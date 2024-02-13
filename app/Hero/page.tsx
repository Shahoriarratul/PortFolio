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
      className="relative flex h-screen w-full flex-row items-center justify-start border-b-4 border-black "
    >
      <div className=" mx-48 mb-10 mt-4 flex w-[50vw]  flex-col items-center px-12 text-justify text-2xl font-medium !leading-[1.5] sm:text-4xl">
        <div className="flex items-center justify-center">
          <div className="relative">
            <Image
              src="/potrait.jpeg"
              alt="Shahoriar Ratul"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="mb-10 h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
            <div className=" absolute bottom-0 right-0 text-4xl">👋</div>
          </div>
        </div>
        <h1 className="text-left">
          <span className="font-bold">Hello, I&apos;m Ratul.</span> I&apos;m a{" "}
          <span className="font-bold">full-stack developer</span> with{" "}
          <span className="font-bold">hands on </span> of experience on multiple
          pojects. I enjoy building{" "}
          <span className="italic">sites & apps </span>
          that feels alive . My focus is{" "}
          <span className="underline">React</span> <span> on </span>{" "}
          <span className="underline"> Next.js</span>.
        </h1>
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

      <div className="absolute right-52 top-44 h-[600px] w-[600px] ">
        <Canvas />
      </div>
    </div>
  );
}
