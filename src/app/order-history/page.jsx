"use client";
import React, { useState, useEffect } from "react";
import withAuth from "../components/withAuth";

const OrderHistoryPage = ({ session, status }) => {
  const [orders, setOrders] = useState([]);

  // ดึงข้อมูลการจองจาก localStorage หรือ backend (ในที่นี้ใช้ localStorage เป็นตัวอย่าง)
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orderHistory")) || [];
    setOrders(storedOrders);
  }, []);

  // ถ้ายังไม่ล็อกอิน
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

  // ถ้าไม่มีข้อมูลการจอง
  if (orders.length === 0) {
    return (
      <div className="text-[#333] text-center my-8">
        <p>No order history found.</p>
      </div>
    );
  }

  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <h1 className="text-[#333] text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 mb-8">
        Order History
      </h1>
      <div className="space-y-6">
        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#343434] p-6 shadow-lg rounded-lg w-full"
          >
            <h2 className="text-xl font-semibold text-[#f5f5f5] mb-4">
              Order #{order.orderId}
            </h2>
            <div className="space-y-2 text-lg text-[#f5f5f5]">
              <p>
                <span className="font-medium">Concert Name:</span>{" "}
                {order.concertName}
              </p>
              <p>
                <span className="font-medium">Date:</span> {order.date}
              </p>
              <p>
                <span className="font-medium">Seating Zone:</span>{" "}
                {order.zone || "Not specified"}
              </p>
              <p>
                <span className="font-medium">Seat Number:</span>{" "}
                {order.seat || "Not specified"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withAuth(OrderHistoryPage);