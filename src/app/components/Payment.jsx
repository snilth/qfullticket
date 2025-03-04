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
      ? `${session.user.name}${session.user.lastname ? ` ${session.user.lastname}` : ""}`
      : "Loading...";

  const email = status === "authenticated" ? session?.user?.email || "Loading..." : "Loading...";

  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto space-y-4">
      <div className="flex justify-start items-start space-y-2 flex-col">
        <h1 className="text-[#333] text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
          My Ticket
        </h1>
        <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">
          21st March 2021 at 10:34 PM
        </p>
      </div>

      <div className="flex flex-col xl:flex-row justify-between items-start w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        {/* Left Side (Customer's Info, Payment Methods, and Pickup Methods) */}
        <div className="flex flex-col justify-start items-start w-full xl:w-2/3 space-y-4 md:space-y-6 xl:space-y-8">
          {/* Customer's Info */}
          <div className="flex flex-col justify-start items-start bg-white dark:bg-gray-800 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full shadow-lg rounded-lg">
            <h3 className="font-semibold text-xl text-black">ข้อมูลสมาชิก</h3>
            <br />
            <div className="flex items-center space-x-4">
              <FaUserCircle className="text-5xl text-gray-800 dark:text-white" />
              <div>
                <h3 className="font-semibold text-xl text-black dark:text-white">
                  {fullName}
                </h3>
                <p className="text-lg text-black dark:text-gray-300">{email}</p>
              </div>
            </div>
            <hr />

            {/* Payment Methods */}
            <div className="mt-6 w-full">
              <h3 className="font-semibold text-xl text-black">วิธีการชำระเงิน</h3>
              <ul className="space-y-4 mt-4">
                <li className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex justify-center items-center">
                    <span className="text-white">Credit</span>
                  </div>
                  <p className="text-lg text-black">ชำระเงินด้วยบัตรเครดิต / เดบิต</p>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex justify-center items-center">
                    <span className="text-white">iBank</span>
                  </div>
                  <p className="text-lg text-black">ชำระเงินผ่านบัญชีธนาคาร</p>
                </li>
              </ul>
            </div>

            {/* Pickup Methods */}
            <div className="mt-6 w-full">
              <h3 className="font-semibold text-xl py-[17px] text-black">
                วิธีการรับบัตร
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-violet-600 rounded-full flex justify-center items-center">
                    <span className="text-white">Self</span>
                  </div>
                  <p className="text-lg text-black">รับบัตรด้วยตัวเอง</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side (Payment Summary and Booking Details) */}
        <div className="flex flex-col justify-start items-start w-full xl:w-1/3 space-y-4 md:space-y-6 xl:space-y-8">
          <div className="text-[#333] bg-white p-6 shadow-lg rounded-lg w-full">
            <h3 className="font-semibold text-xl">รายละเอียดการจอง</h3>
            <div>
              <p className="mt-3 text-lg">
                2025 JISOO ASIA TOUR: LIGHTS, LOVE, ACTION! IN BANGKOK
              </p>
              <p className="text-gray-500 text-lg">
                @ Exhibition Hall 1-2, Queen Sirikit National Convention Center
              </p>
            </div>

            <br />

            <h3 className="font-semibold text-xl">รอบการแสดง</h3>
            <div className="flex justify-between font-bold text-xl mt-2">
              <span className="text-red-500">Sat 15 Mar 2025 18:00</span>
            </div>

            {/* Booking Details */}
            <div className="mt-6">
              <p className="text-lg">ประเภท: VIP</p>
              <p className="text-lg">โซนที่นั่ง: {bookingDetails?.zone}</p>
              <p className="text-lg">ที่นั่ง: {bookingDetails?.seat}</p>
              <p className="text-lg">จำนวน: 1 ที่นั่ง</p>
              <p className="text-lg">ราคาบัตร: {bookingDetails?.price}</p>
              <p className="text-lg">ค่าบริการในการจัดส่ง: 30.00</p>
              <p className="text-lg">วิธีการรับบัตร: -</p>
              <p className="text-lg">วิธีการชำระเงิน: -</p>
            </div>

            <br />

            <h3 className="font-semibold text-xl">จำนวนเงินที่ต้องชำระ</h3>
            <div className="flex justify-between font-bold text-xl mt-2">
              <span className="text-red-500">6,530.00</span>
            </div>
            <button className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
              ชำระเงิน
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;