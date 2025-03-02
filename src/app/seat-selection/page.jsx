'use client'; // Mark this as a Client Component

import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

const SeatSelectionPage = () => {
  const router = useRouter(); // Use useRouter for navigation

  // Data for seating zones from the image
  const seatingZones = [
    { name: 'VIP (THB 6,500)', color: 'bg-blue-200', price: '6,500' },
    { name: 'THB 6,300', color: 'bg-orange-200', price: '6,300' },
    { name: 'THB 5,800', color: 'bg-red-200', price: '5,800' },
  ];

  return (
    <div className="text-[#333] p-6">
      <h1 className="text-2xl font-bold mb-4">Select Your Seat Zone</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {seatingZones.map((zone, index) => (
          <button
            key={index}
            className={`w-full p-4 rounded-lg ${zone.color} hover:bg-opacity-80 transition duration-200 text-center`}
            onClick={() => {
              if (zone.name === 'VIP (THB 6,500)') {
                router.push('/seat-selection/vip'); // Navigate to VIP page for VIP zone
              } else {
                alert(`You selected ${zone.name}. This zone does not have a dedicated page yet.`);
              }
            }}
          >
            <span className="font-semibold">{zone.name}</span>
            <p className="text-sm">Price: THB {zone.price}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SeatSelectionPage;