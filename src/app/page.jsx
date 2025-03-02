import Image from "next/image";

/* Components */
import Carousel from "./components/Carousel";
import Search from "./components/Search";

export default function Home() {
  return (
    <>
      <div>
        {/* Poster Sliders */}
        {/* <Carousel /> */}
        <div className="m-4 flex justify-center items-center text-center">
          <Image
            src="/poster1.png"
            alt="Poster 1"
            width={500}
            height={300}
          ></Image>
        </div>

        {/* <div className="font-bold text-4xl text-center text-[#333]">
          DISCOVER EVENTS
        </div> */}
        
        {/* Search Component */}
        {/* <Search /> */}
      </div>
    </>
  );
}
