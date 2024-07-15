// components/ui/Project.tsx
import React from "react";

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, imageUrl, href }) => {
  return (
    <a href={href} className="block">
      <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img src={imageUrl} alt={title} className="w-full h-52 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default Project;
