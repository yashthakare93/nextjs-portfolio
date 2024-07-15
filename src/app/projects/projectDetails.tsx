import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  liveLink?: string;
  githubLink?: string;
  imageUrls: string[];
  description?: string; // Optional description field
  techStack?: string; // Optional techStack field
}

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose }) => {
  return (
    <div className="min-h-full p-4 transition-colors duration-500 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-7xl mx-auto pt-10">
        <div className="flex items-center mb-4">
          <button onClick={onClose} className="text-black dark:text-white bg-gray-300 dark:bg-gray-900 p-2 rounded-full focus:outline-none flex items-center">
            <IoIosArrowBack className="text-xl" />
          </button>
          <h1 className="text-4xl font-light font-serif ml-3">{project.title}</h1>
        </div>
        <div className="flex flex-col md:flex-row mt-10 mb-4">
        <div className="md:w-1/2 flex flex-col">
            {/* Map through imageUrls and render each image */}
            {project.imageUrls.map((imageUrl, index) => (
              <div key={index} className="mb-4">
                {/* Use next/image component with width and height */}
                <Image
                  src={imageUrl}
                  alt={`Image ${index + 1} of ${project.title}`}
                  width={400} // Adjust width as per your design
                  height={250} // Adjust height as per your design
                  className="rounded-lg border border-1 border-black dark:border-white md:mr-4"
                />
              </div>
            ))}
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2 font-mono text-blue-600">Description</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">{project.description}</p>

            {/* Additional Data */}
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2 font-mono text-blue-600">Tech Stack</h2>
              <p className="text-gray-700 dark:text-gray-300">{project.techStack}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2 font-mono text-blue-600">GitHub Link</h2>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">{project.githubLink}</a>
            </div>

            {project.liveLink && (
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2 font-mono text-blue-600">Live Project</h2>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">{project.liveLink}</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
