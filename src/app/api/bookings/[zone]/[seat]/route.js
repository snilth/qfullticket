import { connectMongoDB } from "../../../../../../lib/mongodb";
import Seat from "../../../../../../models/Seat";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  try {
    const { zone, seat } = params;
    const { userId } = await req.json();

    console.log("Received data:", { userId, zone, seat }); // ตรวจสอบข้อมูลที่ได้รับจาก frontend

    // เชื่อมต่อ MongoDB
    await connectMongoDB();
    console.log("Connected to MongoDB successfully");

    // ตรวจสอบว่าที่นั่งถูกจองแล้วหรือยัง
    const existingSeat = await Seat.findOne({ zone, seatNumber: seat });
    if (existingSeat && existingSeat.isBooked) {
      console.log(`Seat ${seat} is already booked.`);
      return NextResponse.json(
        { message: "Seat already booked" },
        { status: 400 }
      );
    }

    // จองที่นั่ง
    const booking = await Seat.updateOne(
      { zone, seatNumber: seat },
      {
        $set: {
          isBooked: true,
          bookedBy: userId,
          bookedAt: new Date(),
        },
      },
      { upsert: true } // ใช้ upsert ถ้าไม่พบจะเพิ่มเอกสารใหม่
    );

    console.log("Booking result:", booking); // เช็คผลลัพธ์

    // ตรวจสอบการอัปเดต
    if (booking.modifiedCount > 0 || booking.upsertedCount > 0) {
      return NextResponse.json(
        { message: "Seat booked successfully" },
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
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
