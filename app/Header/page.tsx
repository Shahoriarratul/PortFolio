"use client";
import Link from "next/link";

import React, { EventHandler, useRef, useState } from "react";

import { Goldman } from "next/font/google";

const goldman = Goldman({
  subsets: ["latin", "latin-ext"],
  weight: "700",
});

const navStyle =
  " transition duration-500 ease-in-out rounded-full hover:bg-pink-300/20 p-4";
export default function Header() {
  return (
    <div className="fixed z-10 mt-5 flex h-16 w-[80vw] flex-row items-stretch justify-between rounded-full bg-violet-800/25 bg-opacity-45 p-5 text-white transition duration-500 ease-in-out hover:bg-opacity-60 hover:ring-2 hover:ring-inset hover:ring-pink-300">
      <Link href="#home" className="flex flex-col items-center justify-center">
        <div className={`${goldman.className} text-xl`}>SHAHORIAR RATUL</div>
      </Link>
      <ul className="flex flex-row items-center justify-center gap-6 ">
        <Link href="#home" className={navStyle}>
          HOME
        </Link>
        <Link href="#about" className={navStyle}>
          ABOUT
        </Link>
        <Link href="#projects" className={navStyle}>
          PROJECTS
        </Link>
        <Link href="#skills" className={navStyle}>
          SKILLS
        </Link>
        <Link href="#footer" className={navStyle}>
          CONTACTS
        </Link>
      </ul>
    </div>
  );
}
