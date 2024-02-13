import React, { useEffect, useRef } from "react";
import Canvas from "../components/Canvas";
import { Switch } from "@/components/ui/switch";

export default function Hero() {
  return (
    <div
      id="hero"
      className="relative flex h-screen w-full flex-col items-center justify-center border-b-4 border-black"
    >
      {/* <Switch /> */}

      <div className="absolute right-44 top-44 h-[600px] w-[600px] ">
        {/* <Canvas /> */}
      </div>
    </div>
  );
}
