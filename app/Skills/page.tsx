"use client";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

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
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
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
  return (
    <div
      id="Skills"
      className="flex h-screen w-full flex-col items-center justify-center"
    >
      <div className=" absolute z-0 h-[80vh] w-full  ">
        <Spline scene="https://prod.spline.design/c040WGtElTcDEf88/scene.splinecode" />
      </div>
      <div className=" p-4 text-center text-4xl text-violet-300">SKILLS</div>
      <div className="z-10 sm:w-[60vw]">
        <ul className="flex  flex-wrap justify-center gap-2 text-lg text-white">
          {skillsData.map((skill, index) => (
            <motion.li
              className="borderBlack rounded-xl bg-violet-400/15 px-5 py-3 dark:bg-white/10 dark:text-white/80"
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
