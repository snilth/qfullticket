import React from "react";

const Buy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">How to Buy</h1>
      <p className="text-gray-700 mb-6">
        Purchasing your ticket is simple and fast. Follow these steps:
      </p>
      <p className="text-gray-700 mb-6">
        Step 1: Go to the website www.234ticket.com, select the desired show, and click "Buy Ticket."
      </p>
      <hr className="border-t border-gray-300 my-6" /> {/* เส้นแบ่ง */}
      <p className="text-gray-700 mb-6">
      Step 2: Select the date/time of the show and check seat availability in the desired zone. 
      The ticket color bands and prices for each zone will be displayed on the right side of the seating chart. 
      Then, click to select your preferred seating zone.
      </p>
      <hr className="border-t border-gray-300 my-6" /> {/* เส้นแบ่ง */}
      <p className="text-gray-700 mb-6">
      Step 3: After selecting your desired zone, the seat selection page will appear, 
      indicating the seating area. Choose your preferred seat and click "Confirm Seat."
      </p>
      <hr className="border-t border-gray-300 my-6" /> {/* เส้นแบ่ง */}
      <p className="text-gray-700 mb-6">
      Step 4: Choose a ticket delivery method 
      <p className="text-gray-700 mb-6">
       1. Self-pickup – Customers can collect their tickets at any 234TICKET outlet within the specified time frame.
       </p>
       <p className="text-gray-700 mb-6">
       2. Postal Delivery – Available only within Thailand. A shipping fee of 60 THB applies nationwide.
       </p>
      </p>
      <hr className="border-t border-gray-300 my-6" /> {/* เส้นแบ่ง */}
      <p className="text-gray-700 mb-6">
      Step 5: Choose a payment method  After selecting your preferred payment method, click "Accept" and then confirm your order.
       </p>
    </div>
  );
};

export default Buy;