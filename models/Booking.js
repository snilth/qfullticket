import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  zone: { type: String, required: true },
  seat: { type: Number, required: true, unique: true },
}, { timestamps: true });

const Booking = mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
export default Booking;
