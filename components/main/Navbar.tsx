"use client"
import React, { useState } from "react";
import { FaTwitter, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex items-center justify-center gap-2 px-4 md:px-10">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-between w-[500px] h-auto border md:border-[#7042f861] bg-[#03001417] backdrop-blur-md z-50 px-6 py-2 rounded-full text-gray-200">
          <a href="#about-me" className="cursor-pointer">About me</a>
          <a href="#skills" className="cursor-pointer">Skills</a>
          <a href="#experience" className="cursor-pointer">Experience</a>
          <a href="#projects" className="cursor-pointer">Projects</a>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="">
          <div className="absolute top-[65px] h-[14vh] left-0 w-full bg-[#03001417] border-[#7042f861] opacity-50 bg-black z-40 p-5 flex flex-col items-center text-white md:hidden">
          </div>
          <div className="absolute top-[65px] left-0 h-full w-full bg-[#03001417] border-[#7042f861] z-50 p-5 flex flex-col items-center text-white md:hidden">
            <a href="#about-me" className="py-2" onClick={() => setIsOpen(false)}>About me</a>
            <a href="#skills" className="py-2" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#experience" className="py-2" onClick={() => setIsOpen(false)}>Experience</a>
            <a href="#projects" className="py-2" onClick={() => setIsOpen(false)}>Projects</a>
          </div>
          </div>
        )}

        {/* Social Links */}
        <div className="flex flex-row gap-5">
          <Link href="https://x.com/hey_itsyashika">
            <FaTwitter color="white" />
          </Link>
          <Link href="mailto:mehndirattayashika5@gmail.com">
            <MdEmail color="white" />
          </Link>
          <Link href="https://github.com/y4sh1k4">
            <FaGithub color="white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
