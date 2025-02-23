"use client";

import { useState } from "react";
import Link from "next/link";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true); // สถานะสำหรับเลือกฟอร์ม Login หรือ Register
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // ใช้ในการเปิด/ปิด Modal

  // ฟังก์ชันที่จะเปิด Modal เมื่อคลิกที่ลิงก์ Login/Register
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // ฟังก์ชันปิด Modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Backdrop */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={handleCloseModal} // คลิกที่พื้นหลังจะปิด Modal
        ></div>
      )}

      {/* Modal/Form */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-30">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <button
                onClick={() => setIsLogin(true)}
                className={`px-4 py-2 rounded-l-md ${isLogin ? "bg-red-500 text-white" : "bg-gray-200"} transition`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`px-4 py-2 rounded-r-md ${!isLogin ? "bg-red-500 text-white" : "bg-gray-200"} transition`}
              >
                Sign Up
              </button>
            </div>

            {isLogin ? (
              <div>
                <h2 className="text-xl font-bold mb-4 text-center">Sign In</h2>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 mb-3 border rounded focus:ring-2 focus:ring-red-500"
                />
                <div className="relative mb-3">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500"
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute right-2 top-2 text-gray-500"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 w-full rounded transition duration-300">
                  Sign In
                </button>

                <div className="text-center mt-4">
                  <a href="#" className="text-red-500 hover:underline">
                    Forgot password?
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-bold mb-4 text-center">Sign Up</h2>

                {/* ส่วนต่างๆ ของฟอร์ม Sign Up */}
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 mb-3 border rounded focus:ring-2 focus:ring-red-500"
                />
                <div className="relative mb-3">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500"
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute right-2 top-2 text-gray-500"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password Confirmation"
                  className="w-full p-2 mb-3 border rounded focus:ring-2 focus:ring-red-500"
                />

                {/* เพิ่มข้อมูลอื่นๆ ตามต้องการ */}

                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 w-full rounded transition duration-300">
                  Sign Up
                </button>
              </div>
            )}

            <div className="mt-6 text-center">
              <p>
                Already a member?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-red-500 hover:underline"
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ลิงก์ Login/Register */}
      <header className="bg-[#222] py-2">
        <div className="flex justify-between text-center items-center m-8">
          <Link href={"/"} className="text-center">
            <h1 className="text-4xl font-bold text-red-500">234 Ticket</h1>
          </Link>
          <button
            onClick={handleOpenModal}
            className="p-2 font-bold text-red-500 hover:text-[#f5f5f5] hover:bg-red-500 transition-all duration-300 ease-in-out border rounded-md border-red-500"
          >
            Login / Register
          </button>
        </div>
      </header>
    </div>
  );
};

export default LoginPage;
