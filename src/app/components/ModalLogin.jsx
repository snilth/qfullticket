"use client";
import { useState } from "react";
/* import { signIn } from 'next-auth/client'; */

const ModalLogin = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const togglePassword = () => setShowPassword(!showPassword);

  // check valid email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // clear error

    // check email
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // check password
    if (!password) {
      setError("Please enter your password.");
      return;
    }

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      setError(result.error);
    } else {
      onClose();
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(""); // clear error

    // check email
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // check password
    if (!password) {
      setError("Please enter your password.");
      return;
    }

    // check confirm password
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const resCheckUser = await fetch("http://localhost:3000/api/usercheck", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const { user } = await resCheckUser.json();

    if (user) {
      setError("User already exists.");
      return;
    }

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      alert("User created successfully");
      setIsLogin(true);
    } else {
      const data = await response.json();
      setError(data.message || "An error occurred during signup.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-30 bg-black bg-opacity-50">
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative text-[#333]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-[#333]"
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

        {/* show error */}
        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-600 rounded text-center">
            {error}
          </div>
        )}

        {isLogin ? (
          <form onSubmit={handleLogin}>
            <h2 className="text-xl text-black font-bold mb-4 text-center">
              Sign In
            </h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-[#333] w-full p-2 mb-3 border rounded focus:ring-2 focus:ring-red-500"
            />
            <div className="relative mb-3">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-[#333] w-full p-2 border rounded focus:ring-2 focus:ring-red-500"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-2 top-2 text-gray-500"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 w-full rounded transition duration-300"
            >
              Sign In
            </button>
            <div className="text-center mt-4">
              <a href="#" className="text-red-500 hover:underline">
                Forgot password?
              </a>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSignup}>
            <h2 className="text-xl text-black font-bold mb-4 text-center">
              Sign Up
            </h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-[#333] w-full p-2 mb-3 border rounded focus:ring-2 focus:ring-red-500"
            />
            <div className="relative mb-3">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-[#333] w-full p-2 border rounded focus:ring-2 focus:ring-red-500"
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="text-[#333] w-full p-2 mb-3 border rounded focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 w-full rounded transition duration-300"
            >
              Sign Up
            </button>
          </form>
        )}

        <div className="mt-6 text-center">
          <p>
            {isLogin ? (
              <>
                <span className="text-black">Not a member?</span>{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-red-500 hover:underline"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                <span className="text-black">Already a member?</span>{" "}
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
