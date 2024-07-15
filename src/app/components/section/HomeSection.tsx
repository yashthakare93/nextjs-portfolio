import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { Highlight } from "../ui/hero-highlight";
import { LinkPreview } from "../ui/link-preview";

const HomeSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-20 sm:pt-44">
      <div className="flex flex-col sm:flex-row gap-y-10 sm:gap-x-60 items-center">
        <div className="text-center sm:text-left">
          <h2 className="font-mono text-green-400">Hello</h2>
          <h1 className="text-5xl font-medium font-mono pt-2">
            I{'\''}m <Highlight>Yash Thakare</Highlight>
          </h1>
          <p className="text-sm text-gray-500 pt-4">
          Fullstack Developer&#x2009;&#x2009;&#x2009;|&#x2009;&#x2009;CSE Student@PESMCOE PUNE
          </p>

          <div className="flex justify-center sm:justify-start gap-4 mt-4 mb-6">
            <LinkPreview
              url="https://www.linkedin.com/in/yash-thakare01/"
              className=" mb-2 sm:mb-0"
            >
              <div className=' px-2 rounded-lg  '>
                <FaLinkedin className="w-6 h-6" />
              </div>
            </LinkPreview>
            <LinkPreview
              url="https://github.com/yashthakare93"
              className=" mb-2 sm:mb-0"
            >
              <div className=' px-2 rounded-lg  '>
                <FaGithub className="w-6 h-6" />
              </div>
            </LinkPreview>
            <LinkPreview
              url="https://leetcode.com/u/yashthakare_dev/"
              className=" mb-2 sm:mb-0"
            >
              <div className=' px-2 rounded-lg  '>
                <SiLeetcode className="w-6 h-6" />
              </div>
            </LinkPreview>
          </div>
        </div>
        <div className="relative rounded-full overflow-hidden border-4 border-gray-50 w-52 h-52 lg:w-80 lg:h-80">
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

export default HomeSection;
