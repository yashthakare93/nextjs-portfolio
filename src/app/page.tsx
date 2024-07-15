"use client";
import React, { useState, useEffect } from 'react';
import EducationSection from './components/section/EducationSection';
import { ContainerScroll } from './components/ui/container-scroll-animation';
import SkillsSection from './components/section/SkillsSection';
import GithubStatsSection from './components/section/GithubStatsSection';
import { HeroHighlight } from './components/ui/hero-highlight';
import HomeSection from './components/section/HomeSection';
import AboutSection from './components/section/AboutSection';
import ProjectSection from './components/section/ProjectSection';



const Page: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="h-fit transition-colors duration-500 dark:bg-black text-black dark:text-white">
      <div id="home">
        <HomeSection />
      </div>
      <ContainerScroll titleComponent={<h1 className="text-4xl font-bold">About</h1>}>
        <HeroHighlight>
          <div id="about">
            <AboutSection />
          </div>
        </HeroHighlight>
      </ContainerScroll>
      <div id="projects">
        <ProjectSection />
      </div>
      <div className="h-fit">
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="education">
        <EducationSection />
        </div>
       
        <GithubStatsSection />
      </div>
      <footer className="bg-white dark:bg-black text-black dark:text-gray-400 border-t-2 border-gray-300 dark:border-gray-800 text-center py-4">
        <p className="text-sm font-medium">&copy; Copyright 2024 - Developed by Yash Thakare.</p>
      </footer>
     
    </div>
  );
};

export default Page;
