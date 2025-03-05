import { connectMongoDB } from "../../../../../../lib/mongodb";
import Seat from "../../../../../../models/Seat";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  try {
    const { zone, seat } = params;
    const { userId } = await req.json();

    console.log("Received params:", { zone, seat, userId }); // Debug log

    // Connect to MongoDB
    await connectMongoDB();
    console.log("Connected to MongoDB successfully");

    // Validate input
    if (!zone || !seat || !userId) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const seatNumber = parseInt(seat);
    if (isNaN(seatNumber)) {
      return NextResponse.json(
        { message: "Invalid seat number" },
        { status: 400 }
      );
    }

    // Check if the seat is already booked
    const existingSeat = await Seat.findOne({ zone, seatNumber });
    if (existingSeat && existingSeat.isBooked) {
      return NextResponse.json(
        { message: "Seat already booked" },
        { status: 400 }
      );
    }

    // Update or create the seat booking
    const booking = await Seat.updateOne(
      { zone, seatNumber },
      {
        $set: {
          isBooked: true,
          bookedBy: userId, // Ensure userId is a valid ObjectId
          bookedAt: new Date(),
        },
      },
      { upsert: true }
    );

    console.log("Booking result:", booking); // Debug log

    if (booking.modifiedCount > 0 || booking.upsertedCount > 0) {
      return NextResponse.json(
        { message: "Seat booked successfully", zone, seatNumber },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "No changes made to the booking" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error processing booking:", error);
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}