import ProjectCard from "@/components/projectCard";
import Image from "next/image";
import React from "react";

export default function Work() {
  return (
    <div
      id="projects"
      className="flex h-screen w-full flex-col items-center border-b-4 border-black"
    >
      <ProjectCard>project 1</ProjectCard>
    </div>
  );
}
