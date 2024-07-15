// ProjectSection.tsx
"use client";

import React, { useState } from 'react';
import { PinContainer } from '../ui/3d-pin';
import projects from '@/app/data/Projects';
import ProjectDetails from '@/app/projects/projectDetails';
import { BackgroundGradient } from '../ui/background-gradient';

const ProjectSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
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
                {project.liveLink ? (
                  <PinContainer title={project.liveLink} containerClassName="">
                    <BackgroundGradient className="rounded-lg">
                      <img src={project.imageUrls[0]} alt={project.title} className="w-96 h-48 rounded-3xl" />
                    </BackgroundGradient>
                    <p className="text-center font-mono font-semibold mt-2 uppercase truncate text-blue-600">{project.title}</p>
                  </PinContainer>
                ) : (
                  <PinContainer title={project.githubLink} containerClassName="">
                    <BackgroundGradient className="rounded-lg">
                      <img src={project.imageUrls[0]} alt={project.title} className="w-96 h-48 rounded-3xl" />
                    </BackgroundGradient>
                    <p className="text-center font-mono font-semibold mt-2 uppercase truncate text-blue-600">{project.title}</p>
                  </PinContainer>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectSection;
