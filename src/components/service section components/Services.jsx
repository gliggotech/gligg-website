"use client";

import React, { useEffect, useState } from "react";
import RotatingWords from "../Animations/RotatingWords";
import Text_Animation from "../Animations/Text_Animation";
import { industries, service_words } from "@/constants/constvalues";
import EachService from "./EachService";

const Services = () => {
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
    <div 
      className={`
        shadow-dark_shadow relative 
        ${scrolled ? 'sm:z-40 z-20' : 'z-0'}
      `} 
      id="services"
    >
      {/* Header Section */}
      <div 
        className={`
          font-Questrial flex flex-col xl:flex-row bg-customGray sticky py-6 gap-y-5 top-64 sm:py-10
          ${scrolled ? 'z-30' : 'z-0'}
        `}
      >
        {/* Left Section with Text Animation */}
        <div 
          className={`
            flex flex-1 justify-center items-center bg-customGray sticky top-20 
            text-black h-[30vh] sm:h-[25vh] md:h-[40vh] xl:h-[100vh]
            ${scrolled ? 'z-20' : 'z-0'}
          `}
        >
          <div className="flex flex-col sm:items-center px-10 gap-y-5 w-full">
            <div className="text-6xl sm:text-7xl">
              <RotatingWords words={service_words}/>
            </div>
            <span className="text-2xl text-black">
              <Text_Animation str="Services Provided by Gliggo." />
            </span>
          </div>
        </div>

        {/* Right Section with Services */}
        <div 
          className={`
            shadow-service_dark_shadow flex flex-col flex-1 justify-center 
            items-center p-5 sm:p-12 2xl:p-16 bg-black rounded-3xl py-28
            ${scrolled ? 'z-50' : 'z-0'}
          `}
        >
          <div className="grid grid-cols-1 gap-10 justify-items-center">
            {industries.map((industry, index) => (
              <EachService industry={industry} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
