import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

const AboutSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-44">
      <div className="flex gap-x-60 items-center flex-col sm:flex-row">
        <div className="sm:mt-0 ml-4 sm:text-left text-center">
          <h2 className="font-mono text-green-400 "> Hello</h2>
          <h1 className="text-5xl font-medium font-mono">I'm Yash Thakare</h1>
          <p className="text-sm text-gray-500 py-2">Frontend Developer</p>

          <div className="flex gap-4 mt-4 pl-1 lg:justify-normal justify-center mb-6">
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
        <div className="relative rounded-full overflow-hidden border-4 border-gray-50 lg:w-80 lg:h-80 w-52 h-52">
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
  );
};

export default AboutSection;
