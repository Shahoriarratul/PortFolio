"use client";
import Link from "next/link";

import React, { EventHandler, useRef, useState } from "react";

import { Goldman } from "next/font/google";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const goldman = Goldman({
  subsets: ["latin", "latin-ext"],
  weight: "700",
});

const navStyle =
  "transition duration-500 ease-in-out rounded-full hover:text-bold p-[0.5vw] hover:font-bold";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fixed z-50 mt-5 hidden h-16 w-[50vw]  flex-row items-stretch justify-center rounded-full bg-violet-800/25 bg-opacity-45 p-5 text-white  shadow-lg shadow-indigo-500/50 transition duration-500 ease-in-out hover:bg-opacity-60 lg:visible lg:flex ">
        <ul className="flex flex-row items-center justify-center gap-[2vw] ">
          <Link href="#home" className={navStyle}>
            HOME
          </Link>
          <Link href="#about" className={navStyle}>
            ABOUT
          </Link>
          <Link href="#projects" className={navStyle}>
            PROJECTS
          </Link>
          <Link href="#Skills" className={navStyle}>
            SKILLS
          </Link>
          <Link href="#footer" className={navStyle}>
            CONTACTS
          </Link>
        </ul>
      </div>

      <button
        onClick={() => setIsOpen(true)}
        className={` ${!isOpen ? "content" : "hidden"} xl fixed right-3 top-3 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-violet-800/30 bg-opacity-45 p-2 lg:hidden`}
      >
        <HiOutlineMenu className=" h-10 w-10" />
      </button>

      <div
        className={` fixed right-0 top-0 z-40 flex h-screen flex-col ${isOpen ? "" : "translate-x-[100%]"} rounded-l-3xl bg-violet-800/25 bg-opacity-45 shadow-lg shadow-indigo-500/50 transition duration-500 ease-in-out lg:hidden`}
      >
        <button
          onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
          className={`${isOpen ? "content" : "hidden"}  absolute m-2 flex h-14 w-14 -translate-x-20 flex-row items-center justify-center rounded-full bg-blue-800/40 p-2`}
        >
          <MdOutlineArrowForwardIos size={20} />
        </button>
        <ul className="  mx-3 my-5 flex flex-col items-center justify-center gap-6 ">
          <Link href="#home" className={navStyle}>
            HOME
          </Link>
          <div className=" h-[2px] w-[30%] bg-white" />
          <Link href="#about" className={navStyle}>
            ABOUT
          </Link>
          <div className=" h-[2px] w-[30%] bg-white" />
          <Link href="#projects" className={navStyle}>
            PROJECTS
          </Link>
          <div className=" h-[2px] w-[30%] bg-white" />
          <Link href="#Skills" className={navStyle}>
            SKILLS
          </Link>
          <div className=" h-[2px] w-[30%] bg-white" />
          <Link href="#footer" className={navStyle}>
            CONTACTS
          </Link>
        </ul>
      </div>
    </>
  );
}
