import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import React from "react";

export default function Work() {
  return (
    <div
      id="projects"
      className="flex h-screen w-full flex-col items-center border-b-4 border-black"
    >
      <ProjectCard src="/project 1.png">Project 1</ProjectCard>
      <ProjectCard src="/project 2.png">Project 2</ProjectCard>
      <ProjectCard src="/project 1.png">Project 3</ProjectCard>
      <ProjectCard src="/project 1.png">Project 4</ProjectCard>
    </div>
  );
}
