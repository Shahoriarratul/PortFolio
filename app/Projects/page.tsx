import ProjectCard from "@/components/ProjectCard";
import React from "react";

export default function Work() {
  return (
    <div
      id="projects"
      className="flex h-screen w-full justify-center sm:h-[130vh]"
    >
      <div className="flex flex-col items-center sm:mt-16 sm:grid sm:grid-cols-1 sm:gap-20 sm:gap-y-2">
        <ProjectCard
          link="https://fast-pizza-sigma.vercel.app/"
          src="/project 1.png"
        >
          Project 1
        </ProjectCard>
        <ProjectCard
          link="https://use-pop-corn-ebon.vercel.app/"
          src="/project 2.png"
        >
          Project 2
        </ProjectCard>
        <ProjectCard
          link="https://travel-list-lovat.vercel.app/"
          src="/project 3.png"
        >
          Project 3
        </ProjectCard>
      </div>
    </div>
  );
}
