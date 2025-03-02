"use client";
import { useState } from "react";
import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

import Link from "next/link";
import Navbar from "./components/Navbar";
import ModalLogin from "./components/ModalLogin";
import AboutUs from "./components/Footer";

export default function RootLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // open login modal
  const handleOpenModal = () => setIsModalOpen(true);

  // close login model
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
          <div>
            <Navbar />
          </div>
        </header>
        <main>
          <SessionProvider>{children}</SessionProvider>
        </main>

        <AboutUs />

        {/* if modal is open show ModalLogin component */}
        {isModalOpen && <ModalLogin onClose={handleCloseModal} />}
      </body>
    </html>
  );
}
