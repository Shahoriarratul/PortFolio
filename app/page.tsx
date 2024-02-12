"use client";
import About from "./About/page";
import Footer from "./Footer/page";
import Header from "./Header/page";
import Hero from "./Hero/page";
import Work from "./Work/page";

export default function Home() {
  return (
    <main className="flex flex-col w-full ">
      <Header />
      <Hero />
      <About />
      <Work />
      <Footer />
    </main>
  );
}
