"use client";
import { useRef } from "react";
import About from "./About/page";
import Footer from "./Footer/page";
import Header from "./Header/page";
import Hero from "./Hero/page";
import Work from "./Work/page";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Work />
      <Footer />
    </main>
  );
}
