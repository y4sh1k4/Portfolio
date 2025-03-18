"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}



const ProjectCard = ({ src, title, description, link }: Props) => {
  const printLog=()=>{
    console.log(link)
  }
  return (
    <Link
        href={link}
        onClick={printLog}
        >
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer h-[25rem] hover:scale-105" >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
    </Link>
  );
};

export default ProjectCard;
