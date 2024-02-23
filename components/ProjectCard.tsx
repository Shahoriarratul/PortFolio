"use client";
import Image from "next/image";
import React from "react";
type propType = {
  children: React.ReactNode;
  src: string;
};

export default function ProjectCard(prop: propType) {
  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault;
    alert(`${prop.children} is clicked`);
  }

  return (
    <div
      onClick={handleClick}
      className=" mt-3 flex h-48 w-60 flex-col items-center rounded-xl border-2 border-gray-500 bg-violet-950/15 transition duration-300 ease-in-out hover:shadow-lg hover:shadow-indigo-500/50 sm:h-[35vh] sm:w-[40vw] sm:flex-row"
    >
      <Image
        src={prop.src}
        height={500}
        width={500}
        className="mt-2 h-32 w-56 rounded-xl sm:m-6 sm:h-[87%] sm:w-[45%] "
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
