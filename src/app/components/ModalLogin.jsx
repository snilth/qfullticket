"use client";
import { useState } from "react";

const ModalLogin = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-30 bg-black bg-opacity-50">
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
        <button
          onClick={onClose} // ปิด Modal เมื่อคลิก
          className="absolute top-2 right-2 text-gray-500"
        >
          ×
        </button>
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-4 py-2 rounded-l-md ${
              isLogin ? "bg-red-500 text-white" : "bg-gray-200 text-slate-400"
            } transition`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-4 py-2 rounded-r-md ${
              !isLogin ? "bg-red-500 text-white" : "bg-gray-200 text-slate-400"
            } transition`}
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
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 mb-3 border rounded focus:ring-2 focus:ring-red-500"
            />
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
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 w-full rounded transition duration-300">
              Sign Up
            </button>
          </div>
        )}

        <div className="mt-6 text-center">
          <p>
            {isLogin ? (
              <>
                Not a member?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-red-500 hover:underline"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already a member?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-red-500 hover:underline"
                >
                  Sign In
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
