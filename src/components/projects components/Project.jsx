"use client"
import React, { useEffect, useState } from "react";
import { ourproject_words, projects } from "@/constants/constvalues";
import RotatingWords from "../Animations/RotatingWords";
import EachProject from "./EachProject";



const Project = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);

    // Function to handle scroll event
    const handleScroll = () => {
      // Adjust the scroll threshold as needed
      // For example, change z-index when scrolled more than 100 pixels
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`shadow-dark_shadow relative  ${scrolled ? "z-50" : "z-0"} `} id="ourprojects">
  
      {/* Insights Section */}
      <div className="font-Questrial text-black flex flex-col gap-y-8 py-8 xl:flex-row w-full sticky bg-customGray top-64 sm:py-10 2xl:px-32">
        {/* Left Section */}
        <div className="xl:h-[100vh] h-[30vh] sm:h-[25vh] md:h-[40vh] flex justify-center items-center md:items-center w-full max-w-4xl bg-customGray sticky sm:top-20">
          <div className="flex flex-col px-10 gap-y-5">
            {/* Animated text */}
            <div className="sm:text-7xl text-6xl">
           <RotatingWords words={ourproject_words}/>
            </div>
            {/* Short description */}
            <span className="text-2xl text-black">
             Please have a look at just some of our projects we've completed for our clients!
            </span>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex flex-col w-full z-50 2xl:p-2">
          <div className="shadow-service_dark_shadow grid grid-cols-1 gap-x-4 sm:gap-x-6 px-5 md:gap-x-8 lg:gap-x-10 gap-y-2 sm:px-4 2xl:px-8 lg:px-16 justify-items-center bg-customGreen flex-1  py-14 sm:py-2 2xl:gap-y-5 lg:py-10 2xl:py-16 rounded-3xl">
            {/* Rendering each project */}
            {projects.map((project, index) => (
              <EachProject project={project} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
