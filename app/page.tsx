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
      className={`bg flex flex-col items-center text-white ${asap.className}`}
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
