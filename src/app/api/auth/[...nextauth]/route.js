import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "../../../../../lib/mongodb";
import User from "../../../../../models/user";
import bcrypt from "bcryptjs";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (!passwordMatch) {
            return null;
          }

          // return user details
          return {
            id: user._id.toString(), // ensure id is a string
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            image: user.image,
            role: user.role,
          };
        } catch (error) {
          console.log("Error: ", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // add user details to token
        return {
          ...token,
          id: user.id,
          name: user.name,
          lastname: user.lastname,
          email: user.email,
          image: user.image,
          role: user.role,
        };
      }
      return token;
    },
    async session({ session, token }) {
      // add user details to session
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          name: token.name,
          lastname: token.lastname,
          email: token.email,
          image: token.image,
          role: token.role,
        },
      };
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
