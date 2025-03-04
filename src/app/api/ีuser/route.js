import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";

export async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connectMongoDB();

      const { email } = req.query;
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({
        _id: user._id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
      });
    } catch (dbError) {
      console.error("Database error:", dbError);
      return res.status(500).json({ message: "Database operation failed" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}

export default handler;
