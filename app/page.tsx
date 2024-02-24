"use client";
import { useRef } from "react";
import About from "./About/page";
import Footer from "./Footer/page";
import Header from "./Header/page";
import Hero from "./Hero/page";
import Projects from "./Projects/page";

import { motion, useScroll } from "framer-motion";
import Skills from "./Skills/page";
import { Asap } from "next/font/google";

const asap = Asap({
  weight: "100",
  style: "normal",
  preload: true,
  subsets: ["latin", "latin-ext", "vietnamese"],
});

export default function Home() {
  return (
    <main
      className={` flex flex-col items-center bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white ${asap.className}`}
    >
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
