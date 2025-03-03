import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
      <p className="text-gray-700 mb-6">
        At 234 TICKET, we are committed to protecting the privacy and personal information of our customers. This Privacy Policy outlines how we collect, use, and safeguard your personal data when you pick up tickets at our company office or any authorized dealer branch across Thailand.
      </p>
      <hr className="border-t border-gray-300 my-6" /> {/* Divider */}

      <h2 className="text-lg font-bold text-gray-900 mb-4">Information Collected for Cash Payments</h2>
      <p className="text-gray-700 mb-6">
        When you collect tickets purchased with cash, we may collect and process the following personal information to verify your identity and transaction:
      </p>
      <ol className="list-decimal pl-5 text-gray-700">
        <li className="mb-4">
          Details from your order confirmation, which may include your name, contact information, and transaction reference.
        </li>
        <li className="mb-4">
          Information from your payment receipt, used to confirm the completion of your purchase.
        </li>
        <li className="mb-4">
          Your national identification card details, including your full name, ID number, and other identifying data, to ensure the ticket is collected by the authorized purchaser.
        </li>
      </ol>

      <hr className="border-t border-gray-300 my-6" /> {/* Divider */}

      <h2 className="text-lg font-bold text-gray-900 mb-4">Information Collected for Credit/Debit Card Payments</h2>
      <p className="text-gray-700 mb-6">
        For customers who have paid using a credit or debit card, we collect the following personal information to authenticate your identity and payment method:
      </p>
      <ol className="list-decimal pl-5 text-gray-700">
        <li className="mb-4">
          Details from your order confirmation, which may include your name, contact information, and transaction reference.
        </li>
        <li className="mb-4">
          Your national identification card details, such as your full name and ID number, to verify you as the cardholder.
        </li>
        <li className="mb-4">
          Information from the credit or debit card used for payment, including the cardholder’s name and a partial card number, for verification purposes.
        </li>
      </ol>

      <p className="text-gray-700 mt-6">
        The personal information collected during the ticket pickup process is used solely for the purpose of verifying your identity and ensuring the secure issuance of tickets. We do not share your data with third parties unless required by law. 234 TICKET reserves the right to update this Privacy Policy at any time, and changes will be effective upon posting.
      </p>
    </div>
  );
};

export default PrivacyPolicy;