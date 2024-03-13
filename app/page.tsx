"use client";
import { useEffect, useRef, useState } from "react";
import About from "./About/page";
import Footer from "./Footer/page";
import Header from "./Header/page";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

import { motion, useScroll } from "framer-motion";
import Skills from "../components/Skills";
import { Asap } from "next/font/google";

const asap = Asap({
  weight: "100",
  style: "normal",
  preload: true,
  subsets: ["latin", "latin-ext", "vietnamese"],
});

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    function handleResize() {
      "use client";
      setIsMobile(window.innerWidth < 640); // Adjust this threshold as needed
    }

    handleResize(); // Call it initially to set the state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobile]);
  return (
    <main
      className={` flex flex-col items-center bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white ${asap.className}`}
    >
      <Header />
      <Hero isMobile={isMobile} />
      <About />
      <Projects isMobile={isMobile} />
      <Skills />
      <Footer />
    </main>
  );
}
