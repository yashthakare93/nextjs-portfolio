"use client"
import React from "react";
import AboutSection from "./components/section/AboutSection";
import EducationSection from "./components/section/EducationSection";
import { ContainerScroll } from "./components/ui/container-scroll-animation";
import SkillsSection from "./components/section/SkillsSection";


const title = <h1 className="text-4xl font-bold">About</h1>;

const Page: React.FC = () => {
  return (
    <div className="h-fit transition-colors duration-500 dark:bg-black text-black dark:text-white">
      <AboutSection />
      <ContainerScroll titleComponent={title}>
        <div></div>
      </ContainerScroll>
      <div className="h-fit">
      <SkillsSection/>
      <EducationSection />
      </div>
    </div>
  );
};

export default Page;
