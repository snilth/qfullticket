import React from "react";

const Insurance = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Insurance</h1>
      <p className="text-gray-700 mb-6">
        We offer optional ticket insurance to provide peace of mind in case of
        unexpected situations.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Coverage includes:</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>
          Refunds for medical emergencies, travel restrictions, or unforeseen
          cancellations
        </li>
        <li>Protection against event postponements (subject to terms)</li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">How to Purchase:</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Select the insurance option at checkout</li>
        <li>Review the terms and confirm your purchase</li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Claim Process:</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Submit a claim request with the required documentation</li>
        <li>Processing time varies depending on the case</li>
      </ul>
    </div>
  );
};

export default Insurance;