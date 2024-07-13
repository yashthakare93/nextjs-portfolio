"use client"
import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { InfiniteMovingCards } from "./components/ui/nfinite-moving-cards";

const items = [
  {
    quote: "BE, Pes Modern college of engineering, Pune",
    name: "2021 – 2025 | Pune, India",
    title: "Aggregate CGPA : 7.5",
  },
  {
    quote: "HSC, Nirala Junior College, Hansapuri",
    name: "2021 | Nagpur, India",
    title: "87.17 %",
  },
  {
    quote: "SSC, South Point School, Hanuman Nagar",
    name: "2019 | Nagpur, India",
    title: "79.00 %",
  },
];

const Page: React.FC = () => {

  return (
    <div className="transition-colors duration-500 dark:bg-black text-black dark:text-white">
    <div className="h-screen flex flex-col justify-center items-center pb-32 ">
      <div className="flex gap-x-80 items-center flex-col sm:flex-row">
        <div className="sm:mt-0 ml-4 sm:text-left text-center">
          <h2 className="font-mono text-green-400 "> Hello</h2>
          <h1 className="text-5xl font-medium font-mono">I'm Yash Thakare</h1>
          <p className="text-sm text-gray-500 py-2">Frontend Devloper</p>
  
          <div className="flex gap-4 mt-4 pl-1">
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <SiLeetcode className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="relative rounded-full overflow-hidden border-4 border-gray-50 lg:w-96 lg:h-96 w-52 h-52">
          <Image
            src="/profile-pic.png"
            alt="Profile"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
    </div>

    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl pb-10 lg:pl-0 pl-2 text-gray-400">Education</h2>
      <div className="flex justify-center w-full">
        <InfiniteMovingCards items={items} direction="left" speed="normal" pauseOnHover={true} />
      </div>
    </div>
  </div>
  );
};

export default Page;
