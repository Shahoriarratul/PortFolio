"use client";

import Skill3d from "@/components/Skill3d";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "SQl",
  "PostgreSQL",
  "C#",
  ".net",
  "GSAP",
  "Framer Motion",
];

const iconLink = [
  "html.png",
  "css.png",
  "javaScript.png",
  "typeScript.png",
  "react.png",
  "Nextjs.png",
  "Nodejs.png",
  "Git.png",
  "Tailwind.png",
  "Prisma.png",
  "MongoDB.png",
  "Redux.png",
  "Express.png",
  "SQl.png",
  "PostgreSQL.png",
  "C.png",
  "net.png",
  "GSAP.png",
  "FramerMotion.png",
];
const combinedArray = skillsData.map((item, index) => [item, iconLink[index]]);
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 640); // Adjust this threshold as needed
    }

    handleResize(); // Call it initially to set the state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobile]);
  return (
    <div
      id="Skills"
      className="flex w-full flex-col items-center justify-center"
    >
      {!isMobile && <Skill3d />}

      <div className=" z-10 mb-10 mt-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text p-4 text-center text-6xl text-transparent ">
        SKILLS
      </div>
      {isMobile ? (
        <div className="z-10 flex w-[80vw] flex-row flex-wrap justify-evenly">
          {combinedArray.map(([item, value], index) => (
            <div
              className="flex flex-row items-center justify-center gap-2 rounded-full border-2 border-violet-900/65 p-3"
              key={index}
            >
              <Image
                src={`/Tech logo/${value}`}
                height={25}
                width={25}
                alt="skillIcon"
              />
              <p className=" text-center text-base text-white" key={item}>
                {item}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="z-10 w-full justify-evenly bg-violet-300/50">
          <Marquee loop={0} pauseOnHover={true} speed={100}>
            {combinedArray.map(([item, value], index) => (
              <div
                className="m-6 flex flex-row items-center justify-center gap-2 rounded-full px-4 py-2  "
                key={index}
              >
                <Image
                  src={`/Tech logo/${value}`}
                  height={60}
                  width={60}
                  alt="skillIcon"
                />
                <p className=" text-center text-5xl text-black" key={item}>
                  {item}
                </p>
              </div>
            ))}
          </Marquee>
        </div>
      )}
    </div>
  );
}
