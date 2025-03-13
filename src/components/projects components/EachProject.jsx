import React from "react";

import { FaExternalLinkAlt } from "react-icons/fa";
import Text_Animation from "../Animations/Text_Animation";

const EachProject = ({ project }) => {
  return (
    <div
      className="w-full sm:w-90 md:w-[70vw] lg:w-[50vw] xl:w-[38vw] bg-black shadow-dark_shadow hover:shadow-service_dark_shadow_hover rounded-3xl font-Questrial text-white  hover:text-customGreen sticky md:top-10 top-5 p-2 sm:p-5 group border-t border-gray-700"
      key={project.title}
    >
      {/* Project Image */}
      <div>
        <img
          src={project.imageUrl}
          alt={project.summary}
          className="group-hover:shadow-service_light_shadow object-cover object-center rounded-2xl w-full h-48 sm:h-64 md:h-60 xl:h-60"
        />
      </div>
      {/* Project Details */}
      <div className=" bg-black sm:px-10">
        {/* Project Title */}
        <h2 className="text-xl text-center py-4 sm:0">
          <Text_Animation str={project.title} />
        </h2>
        {/* Project Description */}
        <p>{project.description}</p>
        {/* Project Summary (hidden on small screens) */}
        <p className="">{project.summary}</p>
        {/* Project Actions */}
        <div className="flex justify-center sm:justify-end">
          {/* Button to view project (opens in new tab) */}
          <a
            href={project.webUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-light_shadow text-white hover:text-black p-3 bg-customGreen rounded-lg mt-4 font-Questrial font-medium"
          >
            <span>View </span>
            <FaExternalLinkAlt className="inline" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EachProject;
