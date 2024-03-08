"use client";
import React from "react";

export default function About() {
  return (
    <div
      id="about"
      className=" flex h-screen w-full flex-col items-center justify-center text-justify sm:w-full"
    >
      <div className="z-20 w-[80%] rounded-3xl bg-gradient-to-tr from-white/10 from-10% via-transparent via-50% to-white/10 to-80% text-center text-sm backdrop-blur-[2px] sm:w-[65%] sm:p-20 sm:text-base lg:text-xl 2xl:text-2xl">
        <div className=" m-3">
          <p className="mb-8 mt-5 text-center text-3xl font-medium capitalize sm:text-3xl ">
            About me
          </p>
          <p className="mb-3">
            During my Bachelor in{" "}
            <span className="font-bold">
              Information and Communication Technology
            </span>
            , I decided to pursue my passion for programming. I enrolled many
            courses to try out diffrent language and frameworks. I started with{" "}
            <span className="font-bold">java </span>
            and gradually move toward <span className="font-bold">c#</span> but
            finally i was hooked to Javascript. Then after graduation I finally
            decided to learn{" "}
            <span className="font-medium">full-stack web development</span>.{" "}
            <span className="italic">My favorite part of programming</span> is
            the problem-solving aspect. I{" "}
            <span className="underline">love</span> the feeling of finally
            figuring out a solution to a problem. My core stack is{" "}
            <span className="font-medium text-violet-300">
              React, Next.js, Node.js and MongoDB.
            </span>
            <span>
              {" "}
              I use{" "}
              <span className=" font-bold">
                {" "}
                GSAP , Framer motion and motion js{" "}
              </span>{" "}
              to animate my webiste
            </span>
            . I am also familiar with TypeScript , Prisma and next -auth. I am
            always looking to learn new technologies. I am currently looking for
            a <span className="font-medium">full-time position</span> as a
            software developer.
          </p>

          <p>
            <span className="italic">When I`&apos;m not coding</span>, I enjoy
            playing video games, watching movies. I also enjoy{" "}
            <span className="font-medium">learning new things</span>. I am
            currently learning about{" "}
            <span className="font-medium">
              {" "}
              front end animation with diffrent library
            </span>
            .
          </p>
        </div>
      </div>
      <div className="absolute z-10 h-screen w-full">
        <div className="absolute bottom-auto top-10 h-[80vh] w-[80vw] overflow-hidden rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px] sm:right-[50vh] sm:top-[10vh]"></div>
      </div>
    </div>
  );
}
