import { connectMongoDB } from "../../../../../lib/mongodb";
import Seat from "../../../../../models/Seat";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { zone } = params;
    await connectMongoDB();

    const bookedSeats = await Seat.find({ zone, isBooked: true });

    return NextResponse.json(bookedSeats, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
