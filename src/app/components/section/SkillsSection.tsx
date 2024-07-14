import React from "react";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaGitAlt, FaPhp } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiWebpack, SiMongodb, SiMysql, SiVisualstudiocode, SiEjs,SiNextdotjs } from "react-icons/si";
import { FiServer } from "react-icons/fi";

const SkillsSection: React.FC = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <FiServer /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "EJS", icon: <SiEjs /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Webpack", icon: <SiWebpack /> },
    { name: "Babel"},
    { name: "Git", icon: <FaGitAlt /> },
    { name: "VSCode", icon: <SiVisualstudiocode /> },
    { name: "Next.js", icon: <SiNextdotjs /> }
    
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12">
      <h2 className="text-3xl text-center font-bold text-gray-800 dark:text-gray-200 mb-8">Skills</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-2 p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300">
            <div className="text-xl">{skill.icon}</div>
            <span className="text-md">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
