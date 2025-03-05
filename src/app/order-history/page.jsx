"use client";
import React, { useState, useEffect } from "react";
import withAuth from "../components/withAuth";

const OrderHistoryPage = ({ session, status }) => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        setIsLoading(true);
        const storedOrders = JSON.parse(localStorage.getItem("orderHistory")) || [];
        setOrders(storedOrders);
      } catch (err) {
        console.error("Error fetching order history:", err);
        setError("Failed to load order history. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    if (status === "authenticated") {
      fetchOrderHistory();
    }
  }, [status]);

  if (!session) {
    return (
      <div className="text-[#333] text-center my-8">
        <span>
          Please <span className="text-red-500">login</span> to access this page.
        </span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="text-center p-6">
        <span className="flex items-center justify-center">
          <svg
            className="animate-spin h-5 w-5 mr-2 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l-2 2.046v-2.046z"
            ></path>
          </svg>
          Loading...
        </span>
      </div>
    );
  }

  if (orders.length === 0 && !error) {
    return (
      <div className="text-[#333] text-center my-8">
        <span>No order history found.</span>
      </div>
    );
  }

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.orderId !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem("orderHistory", JSON.stringify(updatedOrders));
  };

  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[#333] text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 mb-8">
          Order History
        </h1>
        {error && (
          <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-lg text-center">
            {error}
          </div>
        )}
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#343434] p-6 shadow-lg rounded-lg w-full"
            >
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold text-[#f5f5f5] mb-4">
                  Order #{order.orderId}
                </h2>
                <button
                  onClick={() => handleDeleteOrder(order.orderId)}
                  className="text-red-500 hover:text-red-700 font-medium"
                >
                  Delete
                </button>
              </div>
              <div>
                <span className="mt-3 text-lg">{order.concertName}</span>
                <span className="text-gray-500 text-lg">
                  @ Impact, Muang Thong Thani
                </span>
              </div>

              <div className="mt-6"></div>

              <h3 className="font-semibold text-xl text-[#f5f5f5]">Show Schedule</h3>
              <div className="flex justify-between font-bold text-xl mt-2">
                <span className="text-red-500">{order.date}</span>
              </div>

              <div className="mt-6">
                <p className="text-lg">Seating Zone: {order.zone}</p>
                <p className="text-lg">Seat: {order.seat}</p>
                <p className="text-lg">Quantity: 1 seat</p>
                <p className="text-lg">Ticket Price: {order.ticketPrice}</p>
                <p className="text-lg">Delivery Service Fee: {order.deliveryFee}</p>
                <p className="text-lg">Ticket Delivery Method: {order.deliveryMethod}</p>
                <p className="text-lg">Payment Methods: {order.paymentMethod}</p>
              </div>

              <div className="mt-6"></div>

              <h3 className="font-semibold text-xl text-[#f5f5f5]">Amount Due</h3>
              <div className="flex justify-between font-bold text-xl mt-2">
                <span className="text-red-500">{order.amountDue}.00</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withAuth(OrderHistoryPage);