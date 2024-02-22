import Image from "next/image";
import React from "react";
type propType = {
  children: React.ReactNode;
};

export default function ProjectCard(prop: propType) {
  return (
    <div className=" mt-5 flex h-72 w-60 flex-col justify-start rounded-lg border-8 border-gray-400">
      <Image
        src="/project 1.png"
        height={500}
        width={500}
        className=" mt-2 h-52 w-56 rounded-lg "
        alt="project image"
      ></Image>
      <div className=" text-left text-lg text-white">{prop.children}</div>
    </div>
  );
}
