import Image from "next/image";
import React from "react";
type propType = {
  children: React.ReactNode;
  src: string;
};

export default function ProjectCard(prop: propType) {
  return (
    <div className=" mt-3 flex h-48 w-60 flex-col items-center rounded-xl border-2 border-gray-500 bg-violet-950/15">
      <Image
        src={prop.src}
        height={500}
        width={500}
        className=" mt-2 h-24 w-56 rounded-xl "
        alt="project image"
      ></Image>
      <div className=" w-full p-1 text-sm font-bold text-white">
        <h1>{prop.children}</h1>
      </div>
      <div className="w-full px-1 text-xs">
        <p>Description</p>
      </div>
    </div>
  );
}
