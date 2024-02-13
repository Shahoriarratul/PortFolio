import React, { useEffect, useRef } from "react";
import Canvas from "../components/Canvas";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

// border-4 border-white
export default function Hero() {
  return (
    <div
      id="hero"
      className="relative flex h-screen w-full flex-col items-center justify-start border-b-4 border-black "
    >
      <div className=" h-[650px] w-[650px] ">
        <Canvas />
      </div>
      <div className="mx-48 mb-10 mt-[-30px] flex  w-[60vw] flex-col items-center px-12 text-right text-2xl font-medium !leading-[1.5] sm:text-4xl">
        <div className="mb-10  flex items-center justify-center">
          <Image
            src="/potrait.jpeg"
            alt="Shahoriar Ratul"
            width="220"
            height="220"
            quality="95"
            priority={true}
            className="mr-10 inline-block h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl "
          />
          <h1 className="text-left">
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
        <Link
          href="#footer"
          className=" rounded-full bg-[#8e5196] p-3 text-center text-xl text-white transition duration-300 ease-in-out hover:scale-110"
        >
          Contact me here
          <span>
            <BsArrowRight className="inline-block opacity-70 transition group-hover:translate-x-2" />
          </span>
        </Link>
      </div>
    </div>
  );
}
