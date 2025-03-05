"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const VIPPageOne = () => {
  const [selectedZone, setSelectedZone] = useState("");
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [confirmedSeats, setConfirmedSeats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { data: session, status } = useSession();

  const seatingZones = [
    { name: "VIP1", color: "bg-purple-200", price: "6,500" },
    { name: "VIP2", color: "bg-purple-300", price: "6,500" },
    { name: "VIP3", color: "bg-purple-400", price: "6,500" },
  ];

  useEffect(() => {
    // รีเซ็ต selectedSeat และ confirmedSeats เฉพาะตอนเริ่มต้นหรือเปลี่ยนโซน
    if (!selectedZone && status === "authenticated") {
      setSelectedSeat(null);
      setConfirmedSeats([]);
    }
    console.log("Debug - Zone:", selectedZone, "Seat:", selectedSeat, "Confirmed:", confirmedSeats, "Status:", status);
  }, [selectedZone, status]);

  const handleZoneChange = (event) => {
    setSelectedZone(event.target.value);
    setSelectedSeat(null);
    setError(null);
    setConfirmedSeats([]);
  };

  const handleSeatSelect = (seatNumber) => {
    setSelectedSeat(seatNumber);
    setError(null);
    console.log("Selected Seat:", seatNumber);
  };

  const handleConfirmSeat = async () => {
    if (selectedSeat === null || !selectedZone) return;

    setIsLoading(true);
    setError(null);

    try {
      const userId = session?.user?._id || "65a1b2c3d4e5f6a7b8c9d0e1";
      console.log("Booking seat:", { zone: selectedZone, seat: selectedSeat, userId });

      const response = await fetch(
        `http://localhost:3000/api/bookings/${selectedZone}/${selectedSeat}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        }
      );

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`error: ${text || response.statusText}`);
      }

      const data = await response.json();
      console.log("API Response:", data);

      const bookingDetails = {
        zone: selectedZone,
        seat: selectedSeat,
        price: seatingZones.find((z) => z.name === selectedZone).price,
      };
      localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));

      setConfirmedSeats((prevSeats) => [...prevSeats, selectedSeat]);
      router.push("/payment");
    } catch (error) {
      console.error("Error booking seat:", error);
      setError(error.message || "Failed to book seat. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (status === "loading") {
    return <div className="text-center p-6">Loading session...</div>;
  }

  return (
    <div className="text-[#333] p-6 min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">VIP Seat Selection</h1>
        <p className="text-gray-600 mb-6">Select your preferred VIP seat.</p>

        <div className="max-w-md mx-auto space-y-6">
          <select
            className="w-full p-4 rounded-lg border border-gray-300 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
            onChange={handleZoneChange}
            value={selectedZone}
          >
            <option value="" disabled>
              Choose a zone...
            </option>
            {seatingZones.map((zone, index) => (
              <option key={index} value={zone.name} className="text-gray-800">
                {zone.name} - THB {zone.price}
              </option>
            ))}
          </select>
        </div>

        {selectedZone && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Select a seat in {selectedZone}
            </h2>
            <div className="grid grid-cols-5 gap-3 max-w-md mx-auto">
              {Array.from({ length: 40 }, (_, i) => i + 1).map((seat) => (
                <button
                  key={seat}
                  className={`p-4 border rounded-lg transition-colors duration-200 ${
                    selectedSeat === seat
                      ? "bg-blue-500 text-white"
                      : confirmedSeats.includes(seat)
                      ? "bg-red-500 text-white cursor-not-allowed"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => handleSeatSelect(seat)}
                  disabled={confirmedSeats.includes(seat)}
                >
                  {seat}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 max-w-md mx-auto">
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-center">
              {error}
            </div>
          )}
          <button
            className={`w-full p-4 rounded-lg transition-colors duration-200 ${
              !selectedZone || selectedSeat === null || isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
            onClick={handleConfirmSeat}
            disabled={!selectedZone || selectedSeat === null || isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l-2 2.046v-2.046z"
                  ></path>
                </svg>
                Processing...
              </span>
            ) : (
              `Confirm Seat ${selectedSeat !== null ? `#${selectedSeat}` : ""}`
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VIPPageOne;