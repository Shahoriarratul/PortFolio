"use client";
import Link from "next/link";

import React, { EventHandler, useRef, useState } from "react";

import { Goldman } from "next/font/google";

const goldman = Goldman({
  subsets: ["latin", "latin-ext"],
  weight: "700",
});

const navStyle =
  "transition duration-500 ease-in-out rounded-full hover:bg-pink-300/20 p-4 ";
export default function Header() {
  return (
    <div className="fixed z-10 mt-5 flex h-16 w-[50vw] flex-row  items-stretch justify-center rounded-full bg-violet-800/25 bg-opacity-45 p-5 text-white shadow-lg shadow-indigo-500/50 transition duration-500 ease-in-out hover:bg-opacity-60 ">
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
