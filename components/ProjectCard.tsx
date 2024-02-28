"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";
type propType = {
  children: React.ReactNode;
  src: string;
  link: string;
};

export default function ProjectCard(prop: propType) {
  const router = useRouter();
  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault;
    router.push(prop.link);
  }

  return (
    <div className=" mt-3 flex h-[35vh] w-[80vw] flex-col items-center rounded-xl bg-[rgba(248,250,252,.08)] transition duration-300 ease-in-out hover:shadow-lg hover:shadow-indigo-500/50 sm:grid sm:h-[35vh] sm:w-[70vw] sm:grid-cols-2 ">
      <Image
        src={prop.src}
        onClick={handleClick}
        height={500}
        width={500}
        className="z-50 mt-2 h-32 w-[90%] cursor-pointer rounded-xl sm:m-3 sm:h-[90%] sm:w-[90%]"
        alt="project image"
      ></Image>
      <div className=" sm:flex sm:h-full sm:w-full sm:flex-col sm:items-start sm:justify-start sm:p-3">
        <div className=" w-full p-1 text-sm font-bold text-white ">
          <h1 className="sm:text-3xl sm:font-extrabold">{prop.children}</h1>
        </div>
        <div className="w-full px-1 text-xs sm:text-sm">
          <p>Description</p>
        </div>
      </div>
    </div>
  );
}
