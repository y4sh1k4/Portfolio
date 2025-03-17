import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Featured Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <Link href="metapong.xyz">
        <ProjectCard
          src="/metapong.png"
          title="Metapong"
          description="Metapong is an immersive web-based game that blends interactive animations and 3D elements on XFI ecosystem. It delivers a visually dynamic experience."
        />
        </Link>
        <Link href="https://remex-1.vercel.app/">
        <ProjectCard
          src="/remex.png"
          title="Remex Trade"
          description="REMEX Trade is an advanced platform designed for efficient trading and financial analysis, offers state-of-the-art tools and insights to empower traders"
        />
        </Link>
        
        <Link href="https://monodrome2.vercel.app/">
        <ProjectCard
          src="/megadrome.png"
          title="Megadrome"
          description="Megadrome Finance is a next-generation AMM that combines the best of Curve, Convex and Uniswap, designed to serve as Optimism's central liquidity hub."
        />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
