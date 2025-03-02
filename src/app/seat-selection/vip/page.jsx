"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const VIPPageOne = () => {
  const [selectedZone, setSelectedZone] = useState("");
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [confirmedSeats, setConfirmedSeats] = useState([]);
  const router = useRouter();

  const seatingZones = [
    { name: "VIP1", color: "bg-blue-200", price: "6,500" },
    { name: "VIP2", color: "bg-orange-200", price: "6,500" },
    { name: "VIP3", color: "bg-red-200", price: "6,500" },
  ];

  const handleZoneChange = (event) => {
    setSelectedZone(event.target.value);
    setSelectedSeat(null);
  };

  const handleSeatSelect = (seatNumber) => {
    setSelectedSeat(seatNumber);
  };

  const handleConfirmSeat = async () => {
    if (selectedSeat !== null) {
      try {
        console.log("Booking seat:", { zone: selectedZone, seat: selectedSeat });
        const response = await fetch(
          `http://localhost:3000/api/bookings/${selectedZone}/${selectedSeat}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId: "65a1b2c3d4e5f6a7b8c9d0e1" }),
          }
        );
  
        const data = await response.json();
  
        if (response.ok) {
          console.log("API Response:", data);
          setConfirmedSeats([...confirmedSeats, selectedSeat]);
          router.push("/payment");
        } else {
          console.log("API Error:", data);
          alert(data.message);
        }
      } catch (error) {
        console.error("Error booking seat:", error);
        alert("Failed to book seat. Please try again.");
      }
    }
  };

  return (
    <div className="text-[#333] p-6">
      <h1 className="text-2xl font-bold mb-4">VIP Seat Selection</h1>
      <p>Select your preferred VIP seat.</p>

      {/* Zone Selection */}
      <div className="max-w-md mx-auto space-y-4">
        <select
          className="w-full p-4 rounded-lg border border-gray-300 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleZoneChange}
          value={selectedZone}
        >
          <option value="" disabled>
            Choose a zone...
          </option>
          {seatingZones.map((zone, index) => (
            <option key={index} value={zone.name}>
              {zone.name} - THB {zone.price}
            </option>
          ))}
        </select>
      </div>

      {/* Seat Selection */}
      {selectedZone && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">
            Select a seat in {selectedZone}
          </h2>
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 40 }, (_, i) => i + 1).map((seat) => (
              <button
                key={seat}
                className={`p-4 border rounded-lg ${
                  selectedSeat === seat
                    ? "bg-blue-500 text-white" // สีเมื่อเลือกที่นั่ง
                    : confirmedSeats.includes(seat)
                    ? "bg-red-500 text-white" // สีเมื่อที่นั่งถูกจองแล้ว
                    : "bg-gray-200" // สีปกติ
                }`}
                onClick={() => handleSeatSelect(seat)}
                disabled={confirmedSeats.includes(seat)} // ปิดการใช้งานปุ่มที่นั่งที่ถูกจองแล้ว
              >
                {seat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Confirm Button */}
      <div className="mt-6">
        <button
          className="w-full p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          onClick={handleConfirmSeat}
          disabled={!selectedZone || selectedSeat === null}
        >
          Confirm Seat {selectedSeat !== null ? `#${selectedSeat}` : ""}
        </button>
      </div>
    </div>
  );
};

export default VIPPageOne;
