// ProjectSection.tsx
"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { PinContainer } from '../ui/3d-pin';
import projects from '@/app/data/Projects';
import ProjectDetails from '@/app/projects/projectDetails';
import { BackgroundGradient } from '../ui/background-gradient';

interface Project {
  id: number;
  title: string;
  liveLink?: string;
  githubLink?: string;
  imageUrls: string[];
  description?: string; // Optional description field
  techStack?: string; // Optional techStack field
}

const ProjectSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  return (
    <div className="h-fit transition-colors duration-500 dark:bg-black text-black dark:text-white">
      {selectedProject ? (
        <ProjectDetails project={selectedProject} onClose={handleBackToProjects} />
      ) : (
        <>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 text-center">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div key={project.id} onClick={() => handleProjectClick(project)}>
                <PinContainer title={project.liveLink ?? project.githubLink ?? ""} containerClassName="">
                  <BackgroundGradient className="rounded-lg">
                    {/* Use next/image component for optimized images */}
                    <Image
                      src={project.imageUrls[0]}
                      alt={project.title}
                      width={384} 
                      height={384}
                      className="rounded-3xl w-96 h-48"
                    />
                  </BackgroundGradient>
                  <p className="text-center font-mono font-semibold mt-2 uppercase truncate text-blue-600">{project.title}</p>
                </PinContainer>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectSection;