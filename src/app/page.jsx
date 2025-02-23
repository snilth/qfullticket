import Image from "next/image";

/* Components */
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div>hello world from index.jsx</div>
        <Navbar />
      </div>
    </>
  );
}
