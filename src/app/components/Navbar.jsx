import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#333] p-3">
        <div>
          <ul className="flex text-center justify-center">
            <li className="">
              <Link
                href={"/"}
                className="hover:text-red-500 hover:bg-[#444] rounded-md p-4 transition-all duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                href={"/concert-details"}
                className="hover:text-red-500 hover:bg-[#444] rounded-md p-4 transition-all duration-300 ease-in-out"
              >
                Concert & Entertainment
              </Link>
            </li>
            <li className="">
              <Link
                href={"/seat-selection"}
                className="hover:text-red-500 hover:bg-[#444] rounded-md p-4 transition-all duration-300 ease-in-out"
              >
                Seat Selection
              </Link>
            </li>
            <li className="">
              <Link
                href={"/payment"}
                className="hover:text-red-500 hover:bg-[#444] rounded-md p-4 transition-all duration-300 ease-in-out"
              >
                Payment
              </Link>
            </li>
            <li className="">
              <Link
                href={"/order-history"}
                className="hover:text-red-500 hover:bg-[#444] rounded-md p-4 transition-all duration-300 ease-in-out"
              >
                Order History
              </Link>
            </li>
            <li className="">
              <Link
                href={"/faq/buy"}
                className="hover:text-red-500 hover:bg-[#444] rounded-md p-4 transition-all duration-300 ease-in-out"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
