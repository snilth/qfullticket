'use client'; // Mark this as a Client Component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import Image from 'next/image'; // Import Image component from next/image

const SeatSelectionPage = () => {
  const router = useRouter(); // Use useRouter for navigation

  // State to store the selected zone and current slide for carousel
  const [selectedZone, setSelectedZone] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Data for seating zones from the image
  const seatingZones = [
    { name: 'VIP (THB 6,500)', color: 'bg-blue-200', price: '6,500' },
    { name: 'THB 6,300', color: 'bg-orange-200', price: '6,300' },
    { name: 'THB 5,800', color: 'bg-red-200', price: '5,800' },
  ];

  const handleZoneChange = (event) => {
    setSelectedZone(event.target.value); // Update the selected zone
  };

  const handleConfirm = () => {
    if (selectedZone === 'VIP (THB 6,500)') {
      router.push('/seat-selection/vip'); // Navigate to VIP page for VIP zone
    } else if (selectedZone === 'THB 6,300') {
      router.push('/seat-selection/middle'); // Navigate to middle zone page
    } else if (selectedZone === 'THB 5,800') {
      router.push('/seat-selection/low'); // Navigate to low zone page
    } else if (selectedZone) {
      alert(`You selected ${selectedZone}. This zone does not have a dedicated page yet.`);
    } else {
      alert('Please select a zone before confirming.');
    }
  };

  // Function to handle carousel navigation (example)
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 0 : prev - 1)); // Simple toggle for demo; adjust as needed
  };

  return (
    <div className="text-[#333] p-6">
      <h1 className="text-2xl font-bold mb-4">Select Your Seat Zone</h1>
      
      {/* Carousel Section */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96 mb-6">
        {/* Slide 1 */}
        <div
          className={`duration-700 ease-in-out ${
            currentSlide === 0 ? 'block' : 'hidden'
          }`}
          data-carousel-item
        >
          <Image
            src="/concert plan.png" // Ensure this image exists in your public folder or is imported correctly
            className="absolute block w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 1"
            width={500}
            height={300}
            priority // Optional: for better performance on initial load
          />
        </div>
        {/* You can add more slides here if needed */}
      </div>

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
