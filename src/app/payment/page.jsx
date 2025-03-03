"use client";
import React from "react";
import withAuth from "../components/withAuth";

// Components
import Payment from "../components/Payment";

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

  return (
    <>
      <Payment />
    </>
  );
};

export default withAuth(PaymentPage);
