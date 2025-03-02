import React from "react";
import Image from "next/image";

const SeatSelectionPage = () => {
  return (
    <div className="m-4 flex justify-center items-center text-center">
      <Image
        src="/concert-plan.png"
        alt="Concert Plan"
        width={500}
        height={300}
      ></Image>
    </div>
  );
};

export default SeatSelectionPage;
