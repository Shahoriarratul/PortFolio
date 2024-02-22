import React, { Suspense, useEffect, useRef } from "react";
import Canvas from "../components/Canvas";
import Image from "next/image";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { PropagateLoader } from "react-spinners";

// border-4 border-white
export default function Hero() {
  return (
    <div
      id="hero"
      className="relative flex h-screen w-full flex-col items-center justify-start border-b-4 border-black "
    >
      <div className=" mb-[-7vh] h-[35vw] w-[35vw]">
        <Suspense fallback={<PropagateLoader color="#fff" />}>
          <Canvas />
        </Suspense>
      </div>
      <div className="mx-48 mb-10 flex w-[60vw] flex-col items-center px-12 text-right text-2xl font-thin !leading-[1.5] sm:text-3xl">
        <div className=" mb-10 flex items-center justify-center">
          <Image
            src="/potrait.jpeg"
            alt="Shahoriar Ratul"
            width="180"
            height="180"
            quality="95"
            priority={true}
            className="h- mr-10 inline-block h-[15vh] w-[7.5vw] rounded-full border-[0.35rem] border-white object-cover shadow-xl "
          />
          <h1 className="text-left ">
            <span className="font-bold"> Hello, I&apos;m Ratul.</span> I&apos;m
            a <span className="font-bold">full-stack developer</span> with{" "}
            <span className="font-bold">hands on </span> of experience on
            multiple pojects. I enjoy building{" "}
            <span className="italic">sites & apps </span>
            that feels alive . My focus is{" "}
            <span className="underline">React</span> <span> on </span>{" "}
            <span className="underline"> Next.js</span>.
          </h1>
        </div>

        <div className="flex h-12 flex-row gap-5 ">
          <Link
            href="#footer"
            className=" group flex cursor-pointer items-center gap-2 rounded-full border border-violet-800 bg-opacity-45 px-7 py-3 text-center text-xl text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-violet-800/50"
          >
            Contact me here
            <span>
              <BsArrowRight className="inline-block opacity-70 transition" />
            </span>
          </Link>
          <a
            className=" group flex cursor-pointer items-center gap-2 rounded-full border border-violet-800 bg-opacity-45 px-7 py-3 text-xl outline-none transition duration-300 hover:scale-110 hover:bg-violet-800/50 focus:scale-105 active:scale-105 dark:bg-white/10"
            href="/Shahoriar_Ratul_CV.pdf"
            download
          >
            Download CV <HiDownload className="opacity-60 transition" />
          </a>
          <a
            className=" flex cursor-pointer items-center gap-2 rounded-full  p-2 text-white transition hover:scale-[1.15] focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/shahoriar-ratul"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className=" flex scale-[1.15] cursor-pointer items-center gap-2 rounded-full  p-2 text-white transition hover:scale-[1.25] focus:scale-[1.25] active:scale-105 dark:bg-white/10 dark:text-white/60"
            href="https://github.com/Shahoriarratul"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </div>
  );
}
