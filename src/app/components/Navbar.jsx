import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#333] p-3 flex justify-between">
        <div className="font-bold text-lime-400">QFULLTICKET</div>
        <div>
          <ul className="flex">
            <li className="">
              <Link
                href={"/home"}
                className="hover:text-lime-400 hover:bg-[#444] rounded-md p-4 transition-all duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                href={"/concert-details"}
                className="hover:text-lime-400 hover:bg-[#444] rounded-md p-4 transition-all duration-300 ease-in-out"
              >
                Concert Details
              </Link>
            </li>
            <li className="">
              <Link
                href={"/seat-selection"}
                className="hover:text-lime-400 hover:bg-[#444] rounded-md p-4 transition-all duration-300 ease-in-out"
              >
                Seat Selection
              </Link>
            </li>
            <li className="">
              <Link
                href={"/payment"}
                className="hover:text-lime-400 hover:bg-[#444] rounded-md p-4 transition-all duration-300 ease-in-out"
              >
                Payment
              </Link>
            </li>
            <li className="">
              <Link
                href={"/order-history"}
                className="hover:text-lime-400 hover:bg-[#444] rounded-md p-4 transition-all duration-300 ease-in-out"
              >
                Order History
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
