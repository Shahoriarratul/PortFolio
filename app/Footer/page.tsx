import React from "react";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <div
      id="footer"
      className="flex h-60 w-full flex-col items-center justify-center border-t-4 border-gray-500 bg-[#342145]"
    >
      <div className="felx items-center">
        <Input className=" w-[20vw] bg-black" />
        <h1 className=" text-white">footer</h1>
      </div>
    </div>
  );
}
