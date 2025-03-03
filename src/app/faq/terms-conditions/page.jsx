import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms and Conditions for Ticket Pickup</h1>
      <p className="text-gray-700 mb-6">
        These Terms and Conditions govern the process by which customers may collect their tickets. Tickets may be picked up at the 234 TICKET company office or any authorized dealer branch located throughout Thailand, subject to compliance with the requirements outlined below.
      </p>
      <hr className="border-t border-gray-300 my-6" /> {/* Divider */}

      <h2 className="text-lg font-bold text-gray-900 mb-4">Required Documents for Cash Payments</h2>
      <p className="text-gray-700 mb-6">
        Customers who have made payments via cash are required to present the following documents at the time of ticket collection:
      </p>
      <ol className="list-decimal pl-5 text-gray-700">
        <li className="mb-4">A valid order confirmation issued by 234 TICKET.</li>
        <li className="mb-4">The original payment receipt as proof of transaction.</li>
        <li className="mb-4">
          The national identification card of the individual who completed the purchase, which must be presented in person.
        </li>
      </ol>

      <hr className="border-t border-gray-300 my-6" /> {/* Divider */}

      <h2 className="text-lg font-bold text-gray-900 mb-4">Required Documents for Credit/Debit Card Payments</h2>
      <p className="text-gray-700 mb-6">
        Customers who have made payments via credit or debit card must adhere to the following conditions and provide the listed documents:
      </p>
      <ol className="list-decimal pl-5 text-gray-700">
        <li className="mb-4">A valid order confirmation issued by 234 TICKET.</li>
        <li className="mb-4">
          The national identification card of the cardholder whose credit/debit card was used for the transaction.
        </li>
        <li className="mb-4">
          The original credit or debit card used to complete the payment, which must be presented for verification.
        </li>
      </ol>

      <p className="text-gray-700 mt-6">
        Failure to present all required documents may result in the denial of ticket issuance. 234 TICKET reserves the right to amend these Terms and Conditions at its discretion without prior notice.
      </p>
    </div>
  );
};

export default TermsAndConditions;