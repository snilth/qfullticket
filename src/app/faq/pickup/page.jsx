import React from "react";

const PickUp = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">How to Pick Up Ticket</h1>
      <p className="text-gray-700 mb-6">Customers can pick up their tickets at the 234 TICKET company 
        office or at any authorized dealer branch across Thailand.</p>
      <hr className="border-t border-gray-300 my-6" /> {/* เส้นแบ่ง */}
      <h1 className="text-l font-bold text-gray-900 mb-4">Required documents:</h1>
      <p className="text-gray-700 mb-6">Cash payment:</p>
      <ol className="list-decimal pl-5 text-gray-700">
        <li className="mb-4">
          Order confirmation.
        </li>
        <li className="mb-4">Payment receipt.</li>
        <li className="mb-4">Show the national ID card of the person who made the purchase.</li>
      </ol>

      <hr className="border-t border-gray-300 my-6" /> {/* เส้นแบ่ง */}
      <h1 className="text-l font-bold text-gray-900 mb-4">For customers who paid by credit/debit card:</h1>
      <ol className="list-decimal pl-5 text-gray-700">
        <li className="mb-4">
        Order confirmation.
        </li>
        <li className="mb-4">Show the national ID card of the credit/debit cardholder.</li>
        <li className="mb-4">Show the credit/debit card used for payment.</li>
      </ol>
    </div>
  );
};

export default PickUp;
