"use client";
import Link from "next/link";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";

const navStyle =
  "text-white m-5 transition duration-500 ease-in-out hover:text-blue-500";

export default function Header() {
  const router = useRouter();
  return (
    <div className="flex flex-row items-stretch justify-between  bg-black h-16 fixed p-5 rounded-b-lg w-full transition duration-500 ease-in-out hover:bg-slate-500">
      <Link
        href="#home"
        className="text-white flex flex-col items-center justify-center "
      >
        logo
      </Link>
      <ul className="flex flex-row gap-1 items-center justify-center ">
        <Link href="#home" className={navStyle}>
          Home
        </Link>
        <Link
          href="#about"
          onClick={() => router.push("/dashboard")}
          className={navStyle}
        >
          About
        </Link>
        <Link href="#work" className={navStyle}>
          Work
        </Link>
      </ul>
    </div>
  );
}
