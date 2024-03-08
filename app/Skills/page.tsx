"use client";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  "PostgreSQL",
  "C#",
  ".net",
  "GSAP",
  "Framer Motion",
  "motion.js",
];
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
      className="flex h-screen w-full flex-col items-center justify-center"
    >
      {!isMobile && (
        <div className=" absolute z-0 h-[80vh] w-full  ">
          <Spline scene="https://prod.spline.design/c040WGtElTcDEf88/scene.splinecode" />
        </div>
      )}

      <div className=" z-10 mb-10 mt-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text p-4 text-center text-6xl text-transparent ">
        SKILLS
      </div>
      <div className="z-10 sm:w-[60vw]">
        <ul className="flex flex-wrap justify-center gap-2  text-lg text-white">
          {skillsData.map((skill, index) => (
            <motion.li
              className=" rounded-xl bg-purple-700/15 px-5 py-3 backdrop-blur-sm transition-all duration-300 hover:scale-125 dark:bg-white/10 dark:text-white/80  sm:m-5"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
