"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AiOutlineGithub } from "react-icons/ai";

import React from "react";

type propType = {
  children: React.ReactNode;
  src: string;
  link: string;
  tech: Array<string>;
  name: string;
  gitLink: string;
  isMobile: boolean;
};
export default function ProjectCard(prop: propType) {
  const router = useRouter();
  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault;

    window.open(prop.link, "_blank");
  }
  function handleGitLink(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault;
    // window.open(prop.gitLink, "_blank");
   
  }

  return (
    <div className="relative mt-3 flex h-auto w-[80vw] flex-col items-center rounded-xl border-2 border-slate-500/25 bg-gradient-to-tr from-black/5 from-10% via-transparent via-50% to-black/5 to-80% backdrop-blur-[3px] transition duration-300 ease-in-out hover:shadow-lg hover:shadow-indigo-500/50 sm:grid sm:h-[35vh] sm:w-[70vw] sm:grid-cols-2 ">
      <Image
        src={prop.src}
        onClick={handleClick}
        height={500}
        width={500}
        className="z-50 mt-2 h-32 w-[90%] cursor-pointer rounded-xl sm:m-3 sm:h-[90%] sm:w-[90%]"
        alt="project image"
      ></Image>
      <div className=" w-full p-1 sm:flex sm:h-full sm:w-full sm:flex-col sm:items-start sm:justify-start sm:p-3 sm:text-base">
        <div className="w-full py-1 text-sm font-bold text-white ">
          <h1 className="sm:text-2xl sm:font-extrabold 2xl:text-3xl">
            {prop.name}
          </h1>
        </div>
        <ul className="flex flex-row flex-wrap gap-3 py-2">
          {prop.tech.map((e) => (
            <li
              className=" text-bold rounded-full bg-white/10 px-2 text-sm text-violet-300 sm:text-sm 2xl:text-base"
              key={e}
            >
              {e}
            </li>
          ))}
        </ul>

        <div className="hidden w-full text-xs text-slate-300 sm:contents sm:text-sm 2xl:text-base">
          <p className="px-1">{prop.children}</p>
        </div>
      </div>
      <div
        onClick={handleGitLink}
        className={` ${!prop.isMobile && "absolute bottom-2 right-2"} m-2 flex cursor-pointer flex-row items-center justify-center gap-2 text-sm hover:text-slate-300 sm:text-base 2xl:text-lg`}
      >
        <span className="">CHECK OUT THE CODE</span>
        <AiOutlineGithub size={26} className=" text-violet-300" />
      </div>
    </div>
  );
}
