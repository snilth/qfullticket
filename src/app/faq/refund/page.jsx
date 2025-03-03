import React from "react";

const Refund = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">How to Refund</h1>
      <p className="text-gray-700 mb-6">
        Refund policies vary depending on the event and ticket type. Please
        review the following:
      </p>
      <hr className="border-t border-gray-300 my-6" /> {/* เส้นแบ่ง */}
      <h1 className="text-l font-bold text-gray-900 mb-4">Required documents:</h1>
      <p className="text-gray-700 mb-6">Cash payment:</p>
      <ol className="list-decimal pl-5 text-gray-700">
        <li className="mb-4">
          Show ticket (if not yet received, present the order confirmation and payment receipt).
        </li>
        <li className="mb-4">Buyer’s national ID card.</li>
        <li className="mb-4">A copy of the bank account front page.</li>
      </ol>
      <p className="text-gray-700 mb-6">Credit/Debit Card Payment:</p>
      <ol className="list-decimal pl-5 text-gray-700">
        <li className="mb-4">
          Show ticket (if not yet received, present the order confirmation and payment receipt).
        </li>
        <li className="mb-4">Buyer’s national ID card.</li>
      </ol>
      <h1 className="text-l font-bold text-gray-900 mb-4">You can contact us at:</h1>
      <li className="mb-4">
      Prince of Songkhla University, 15 Kanjanawanich Road,
      Hat Yai District, Songkhla Province 90110

      📞 Phone: 0-7428-2000
      📠 Fax: 0-7455-8941
        </li>
    </div>
  );
};

export default Refund;