"use client";
import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useSession } from "next-auth/react";

const Payment = () => {
  const [bookingDetails, setBookingDetails] = useState(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    const details = JSON.parse(localStorage.getItem("bookingDetails"));
    if (details) {
      setBookingDetails(details);
    }
  }, []);

  // debug session data
  useEffect(() => {
    console.log("Session Status:", status);
    console.log("Session Data:", session);
  }, [session, status]);

  // conbine fullname: use name alone if lastname is undefined
  const fullName =
    status === "authenticated" && session?.user?.name
      ? `${session.user.name}${
          session.user.lastname ? ` ${session.user.lastname}` : ""
        }`
      : "Loading...";

  const email =
    status === "authenticated"
      ? session?.user?.email || "Loading..."
      : "Loading...";

  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto space-y-4">
      <div className="flex justify-start items-start space-y-2 flex-col">
        <h1 className="text-[#333] text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
          My Ticket
        </h1>
        {/* <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">
          21st March 2021 at 10:34 PM
        </p> */}
      </div>

      <div className="flex flex-col xl:flex-row justify-between items-start w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        {/* Left Side (Customer's Info, Payment Methods, and Pickup Methods) */}
        <div className="flex flex-col justify-start items-start w-full xl:w-2/3 space-y-4 md:space-y-6 xl:space-y-8">
          {/* Customer's Info */}
          <div className="flex flex-col justify-start items-start bg-white dark:bg-[#343434] px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full shadow-lg rounded-lg">
            <h3 className="font-semibold text-xl text-[#f5f5f5]">Member Information</h3>
            <br />
            <div className="flex items-center space-x-4">
              <FaUserCircle className="text-5xl text-gray-800 dark:text-white" />
              <div>
                <h3 className="font-semibold text-xl dark:text-white">
                  {fullName}
                </h3>
                <p className="text-lg dark:text-gray-300">{email}</p>
              </div>
            </div>
            <hr />

            {/* Payment Methods */}
            <div className="mt-6 w-full">
              <h3 className="font-semibold text-xl text-[#f5f5f5]">Payment Methods</h3>
              <ul className="space-y-4 mt-4">
                <li className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex justify-center items-center">
                    <span className="text-white">Credit</span>
                  </div>
                  <p className="text-lg text-[#555] line-through">Pay with Credit/Debit Card</p>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex justify-center items-center">
                    <span className="text-white">iBank</span>
                  </div>
                  <p className="text-lg text-[#f5f5f5]">Pay via Bank Account</p>
                </li>
              </ul>
            </div>

            {/* Pickup Methods */}
            <div className="mt-6 w-full">
              <h3 className="font-semibold text-xl py-[17px] text-[#f5f5f5]">
              Ticket Delivery Methods
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-violet-600 rounded-full flex justify-center items-center">
                    <span className="text-white">Self</span>
                  </div>
                  <p className="text-lg text-[#f5f5f5]">Pick up the ticket in person</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side (Payment Summary and Booking Details) */}
        <div className="flex flex-col justify-start items-start w-full xl:w-1/3 space-y-4 md:space-y-6 xl:space-y-8">
          <div className="text-[#333] bg-white p-6 shadow-lg rounded-lg w-full">
            <h3 className="font-semibold text-xl">Booking Details</h3>
            <div>
              <p className="mt-3 text-lg">
              2025 TREASURE T5 UNIT ASIA TOUR : MOVE 
              </p>
              <p className="text-gray-500 text-lg">
                @ Impact, Muang Thong Thani
              </p>
            </div>

            <br />

            <h3 className="font-semibold text-xl">Show Schedule</h3>
            <div className="flex justify-between font-bold text-xl mt-2">
              <span className="text-red-500">Sun 25 May 2025 18:00</span>
            </div>

            {/* Booking Details */}
            <div className="mt-6">
              <p className="text-lg">Type: VIP</p>
              <p className="text-lg">Seating Zone: {bookingDetails?.zone}</p>
              <p className="text-lg">Seat: {bookingDetails?.seat}</p>
              <p className="text-lg">Quantity: 1 seat</p>
              <p className="text-lg">Ticket Price: {bookingDetails?.price}</p>
              <p className="text-lg">Delivery Service Fee: 30.00</p>
              <p className="text-lg">Ticket Delivery Method: -</p>
              <p className="text-lg">Payment Methods: -</p>
            </div>

            <br />

            <h3 className="font-semibold text-xl">Amount Due</h3>
            <div className="flex justify-between font-bold text-xl mt-2">
              <span className="text-red-500">6,530.00</span>
            </div>
            <button className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
