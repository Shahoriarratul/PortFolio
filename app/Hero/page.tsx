import React, { useEffect, useRef } from "react";
import Canvas from "../components/canvas";

export default function Hero() {
  return (
    <div
      id="hero"
      className="flex flex-col items-center justify-center h-screen border-b-4 border-black w-full"
    >
      <div className=" h-[600px] w-[600px]">
        <Canvas />
      </div>
    </div>
  );
}
