'use client';

import React, { useState } from 'react';

const VIPPageOne = () => {
  const [selectedZone, setSelectedZone] = useState('');
  const [selectedSeat, setSelectedSeat] = useState(null);

  const seatingZones = [
    { name: 'VIP1', color: 'bg-blue-200', price: '6,500' },
    { name: 'VIP2', color: 'bg-orange-200', price: '6,500' },
    { name: 'VIP3', color: 'bg-red-200', price: '6,500' },
  ];

  const handleZoneChange = (event) => {
    setSelectedZone(event.target.value);
    setSelectedSeat(null);
  };

  const handleSeatSelect = (seatNumber) => {
    setSelectedSeat(seatNumber);
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
          <option value="" disabled>Choose a zone...</option>
          {seatingZones.map((zone, index) => (
            <option key={index} value={zone.name}>{zone.name} - THB {zone.price}</option>
          ))}
        </select>
      </div>
      
      {/* Seat Selection */}
      {selectedZone && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Select a seat in {selectedZone}</h2>
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((seat) => (
              <button
                key={seat}
                className={`p-4 border rounded-lg ${selectedSeat === seat ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => handleSeatSelect(seat)}
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
          disabled={!selectedZone || selectedSeat === null}
        >
          Confirm Seat {selectedSeat !== null ? `#${selectedSeat}` : ''}
        </button>
      </div>
    </div>
  );
};

export default VIPPageOne;