"use client";
import Link from "next/link";

import React, { EventHandler, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const navStyle =
  "m-5 transition duration-500 ease-in-out hover:text-[#336A86] ";
export default function Header() {
  const [logosrc, setLogoSrc] = useState("/logo-color.png");

  const router = useRouter();

  return (
    <div
      className="flex flex-row items-stretch justify-between bg-slate-900  mt-5 h-16 fixed p-5 rounded-full w-[700px] transition  hover:bg-opacity-30 text-white  hover:text-black "
      onMouseEnter={() => {
        setLogoSrc("/logo-black.png");
      }}
      onMouseLeave={() => {
        setLogoSrc("/logo-color.png");
      }}
    >
      <Link href="#home" className="flex flex-col items-center justify-center ">
        <Image src={logosrc} width={128} height={128} alt="Logo" />
      </Link>
      <ul className="flex flex-row gap-1 items-center justify-center ">
        <Link href="#home" className={navStyle}>
          Home
        </Link>
        <Link href="#about" className={navStyle}>
          About
        </Link>
        <Link href="#work" className={navStyle}>
          Work
        </Link>
      </ul>
    </div>
  );
}
