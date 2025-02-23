import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#333] p-3 flex justify-between">
        <div className="font-bold">QFULLTICKET</div>
        <div>
          <ul className="flex">
            <li className="px-4">
              <Link href={"/home"}>Home</Link>
            </li>
            <li className="px-4">
              <Link href={"/concert-details"}>Concert Details</Link>
            </li>
            <li className="px-4">
              <Link href={"/seat-selection"}>Seat Selection</Link>
            </li>
            <li className="px-4">
              <Link href={"/payment"}>Payment</Link>
            </li>
            <li className="px-4">
              <Link href={"/order-history"}>Order History</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
