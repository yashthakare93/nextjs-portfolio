import React from "react";
import { InfiniteMovingCards } from "../ui/nfinite-moving-cards";

const items = [
  {
    quote: "BE, Pes Modern college of engineering, Pune",
    name: "2021 – 2025 | Pune, India",
    title: "Aggregate CGPA : 7.5",
  },
  {
    quote: "HSC, Nirala Junior College, Hansapuri",
    name: "2021 | Nagpur, India",
    title: "87.17 %",
  },
  {
    quote: "SSC, South Point School, Hanuman Nagar",
    name: "2019 | Nagpur, India",
    title: "79.00 %",
  },
];

const EducationSection: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl pb-10 lg:pl-0 pl-2 text-gray-400">Education</h2>
      <div className="flex justify-center w-full">
        <InfiniteMovingCards items={items} direction="left" speed="normal" pauseOnHover={true} />
      </div>
    </div>
  );
};

export default EducationSection;
