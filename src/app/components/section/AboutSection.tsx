import React from 'react';
import { RiEarthLine } from 'react-icons/ri';
import { LinkPreview } from '../ui/link-preview';

const AboutSection = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4 sm:py-8 lg:text-lg text-sm">
            <img
                src="https://i.pinimg.com/736x/42/2c/d6/422cd6c374b4334615c0d53d1809191d.jpg"
                alt="Yash Thakare"
                className="rounded-full lg:w-32 w-24 lg:h-32 h-24 border-4 border-white dark:border-black"
            />
            <h2 className=" font-semibold text-gray-800 dark:text-white lg:mt-4">
                Yash Thakare
            </h2>
            
            <div className="flex sm:space-x-6 gap-1 pb-4 mt-4">
                <LinkPreview
                    url="https://www.linkedin.com/in/yash-thakare01/"
                    className="font-semibold font-mono bg-clip-text mb-2 sm:mb-0"
                >
                    <div className='bg-gradient-to-br from-purple-500 to-pink-500 px-2 rounded-lg text-black dark:text-white '>
                        LinkedIn
                    </div>
                </LinkPreview>
                
                <LinkPreview
                    url="https://github.com/yashthakare93"
                    className="font-semibold font-mono bg-clip-text"
                >
                    <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... px-2 rounded-lg text-black dark:text-white'>
                        Github
                    </div>
                </LinkPreview>
            </div>
            
            <p className=" text-center text-gray-600 dark:text-gray-400">
                🔭 I’m currently learning MERN Stack and Next.js
                <br />
                <br />
                💬 Ask me about  React, Javascript, Core Java, MERN Stack, System Design Etc.
                <br />
                <br />
                ✉️ Email: thakareyash74@gmail.com
                <br />
                <br />
                <div className="flex items-center justify-center px-4 gap-1">
                    <RiEarthLine className="text-gray-600 dark:text-gray-400  mr-2" />
                    <strong>Location:</strong> INDIA, Pune
                </div>
            </p>
        </div>
    );
};

export default AboutSection;
