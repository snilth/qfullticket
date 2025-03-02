"use client";
import React from "react";
import withAuth from "../components/withAuth";

const PaymentPage = ({ session, status }) => {
  if (!session) {
    return (
      <div className="text-[#333] text-center my-8">
        <p>
          Please <span className="text-red-500">login</span> to access this
          page.
        </p>
      </div>
    );
  }

  return <div className="text-[#333]">Payment</div>;
};

export default withAuth(PaymentPage);
