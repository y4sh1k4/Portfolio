
import React from "react";
import { FaXTwitter, FaLinkedin, FaTelegram   } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-center m-auto px-[10px]">

        <div className="w-[500px] h-full flex flex-row items-center justify-between ">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#experience" className="cursor-pointer">
              Experience
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            
          </div>
        </div>

        <div className="flex flex-row gap-5">
          
          <Link href="https://x.com/hey_itsyashika">
            <FaXTwitter color="white" />
          </Link>
          <Link href="mehndirattayashika5@gmail.com"><MdEmail color="white"  /></Link>
          <Link href="https://github.com/y4sh1k4"><FaGithub  color="white" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
