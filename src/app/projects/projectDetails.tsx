import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

const ProjectDetails = ({ project, onClose }) => {
  return (
    <div className="min-h-full p-4 transition-colors duration-500 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-7xl mx-auto pt-10">
        <div className="flex items-center  mb-4">
          <button onClick={onClose} className="text-black dark:text-white bg-gray-300 dark:bg-gray-900 p-2 rounded-full focus:outline-none flex items-center">
            <IoIosArrowBack className="text-xl" />
          </button>
          <h1 className="text-4xl font-light font-serif ml-3">{project.title}</h1>
        </div>
        <div className="flex flex-col md:flex-row mt-10 mb-4">
        <div className="md:w-1/2 flex flex-col">
          {project.imageUrls.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={project.title} className="w-fit max-w-96 max-h-60 rounded-lg mb-4  border border-1 border-black dark:border-white md:mr-4" />
          ))}
          </div>

          <div className="md:w-1/2 ">
          <h2 className="text-xl font-semibold mb-2 font-mono text-blue-600 ">Description</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">{project.description}</p>

            {/* Additional Data */}
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2 font-mono text-blue-600 ">Tech Stack</h2>
              <p className="text-gray-700 dark:text-gray-300">{project.techStack}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2 font-mono text-blue-600 ">GitHub Link</h2>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">{project.githubLink}</a>
            </div>

            {project.liveLink && (
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2 font-mono text-blue-600 ">Live Project</h2>
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
