import ProjectCard from "@/components/ProjectCard";
import React from "react";

export default function Work() {
  return (
    <div
      id="projects"
      className="flex h-screen w-full justify-center border-b-4 border-black"
    >
      <div className="flex flex-col items-center sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-20 sm:gap-y-2">
        <ProjectCard src="/project 1.png">Project 1</ProjectCard>
        <ProjectCard src="/project 2.png">Project 2</ProjectCard>
        <ProjectCard src="/project 1.png">Project 3</ProjectCard>
        <ProjectCard src="/project 1.png">Project 4</ProjectCard>
      </div>
    </div>
  );
}
