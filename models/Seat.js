import mongoose from "mongoose";

const seatSchema = new mongoose.Schema({
  zone: {
    type: String,
    required: true,
    enum: ["VIP1", "VIP2", "VIP3"],
  },
  seatNumber: {
    type: Number,
    required: true,
    min: 1,
    max: 40,
  },
  isBooked: {
    type: Boolean,
    default: false,
  },
  bookedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  bookedAt: {
    type: Date,
    default: Date.now,
  },
});

const Seat = mongoose.models.Seat || mongoose.model("Seat", seatSchema);

export default Seat;
