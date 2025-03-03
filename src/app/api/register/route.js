import { NextResponse } from 'next/server';
import { connectMongoDB } from '../../../../lib/mongodb';
import User from '../../../../models/user';
import bcrypt from 'bcryptjs';

export async function POST(req) {
    try {
        const { email, password } = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);

        await connectMongoDB();
        console.log('User data received:', { email, password: hashedPassword });

        const user = await User.create({ email, password: hashedPassword });
        console.log('User created:', user);

        return NextResponse.json({ message: "User registered." }, { status: 201 });
    } catch (error) {
        console.error('Error during user registration:', error);
        return NextResponse.json({ message: "An error occurred while registering the user." }, { status: 500 });
    }
}
