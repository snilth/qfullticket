import Link from "next/link";
import React from "react";

const FAQLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-gray-100 text-[#333]">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow p-6">
        <h2 className="text-lg font-bold mb-4">FAQ</h2>
        <ul>
          <li className="mb-2">
            <Link
              href="/faq/insurance"
              className="text-blue-600 hover:underline"
            >
              Insurance
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/faq/buy" className="text-blue-600 hover:underline">
              How to Buy
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/faq/refund" className="text-blue-600 hover:underline">
              How to Refund
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/faq/pickup" className="text-blue-600 hover:underline">
              How to Pick Up Ticket
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="/faq/terms-conditions"
              className="text-blue-600 hover:underline"
            >
              Terms & Conditions
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="/faq/privacy-policy"
              className="text-blue-600 hover:underline"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 container mx-auto">{children}</main>
    </div>
  );
};

export default FAQLayout;
