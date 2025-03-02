'use client'; // Mark this as a Client Component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

const SeatSelectionPage = () => {
  const router = useRouter(); // Use useRouter for navigation

  // Data for seating zones from the image
  const seatingZones = [
    { name: 'VIP (THB 6,500)', color: 'bg-blue-200', price: '6,500' },
    { name: 'THB 6,300', color: 'bg-orange-200', price: '6,300' },
    { name: 'THB 5,800', color: 'bg-red-200', price: '5,800' },
  ];

  // State to store the selected zone
  const [selectedZone, setSelectedZone] = useState('');

  const handleZoneChange = (event) => {
    setSelectedZone(event.target.value); // Update the selected zone
  };

  const handleConfirm = () => {
    if (selectedZone === 'VIP (THB 6,500)') {
      router.push('/seat-selection/vip'); // Navigate to VIP page for VIP zone
    } else if (selectedZone === 'THB 6,300') {
      router.push('/seat-selection/middle'); // Navigate to VIP page for VIP zone
    } else if (selectedZone === 'THB 5,800') {
      router.push('/seat-selection/low'); // Navigate to VIP page for VIP zone
    } else if (selectedZone) {
      alert(`You selected ${selectedZone}. This zone does not have a dedicated page yet.`);
    } else {
      alert('Please select a zone before confirming.');
    }
  };

  return (
    <div className="text-[#333] p-6">
      <h1 className="text-2xl font-bold mb-4">Select Your Seat Zone</h1>
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
        <button
          className="w-full p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          onClick={handleConfirm}
          disabled={!selectedZone} // Disable button if no zone is selected
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default SeatSelectionPage;