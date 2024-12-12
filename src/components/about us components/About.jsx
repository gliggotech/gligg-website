"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import OurTeam from "./OurTeam";

import Strength from "./Strength";


;
import GliggoComponent from "./GliggoComponent.jsx";
import { our_team, strengths } from "@/constants/constvalues";

const About = () => {
  const [heading, setHeading] = useState([]);
  const [content, setContent] = useState([]);
  useEffect(() => {
    // Scroll to the top of the page on component mount or navigation
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const headingText = "Our Story";
    const contentText =
      "We are a boutique IT consulting company specialized in providing tailor-made solutions to small and medium businesses. Our focus is to help businesses realize their full potential by helping them to reduce costs, improve efficiency, and overcome redundancies. We established our business in 2016 and since then we have helped many businesses achieve excellence though process automation and outsourcing. We have survived in a tough market of competition due to our commitment in delivering what we promise. Our 3-way approach identifies the problems and bottlenecks of the client, then we design the solution and implement it.";

    const headingChars = headingText.split("");
    const contentWords = contentText.split(" ");

    // Animate heading text letter by letter
    const animateHeading = () => {
      setHeading((prevHeading) =>
        prevHeading.map((char, index) => ({
          ...char,
          isVisible: true,
        }))
      );
    };

    // Animate content text word by word
    const animateContent = () => {
      setContent((prevContent) =>
        prevContent.map((word, index) => ({
          ...word,
          isVisible: true,
        }))
      );
    };

    // Set initial state for heading
    setHeading(
      headingChars.map((char, index) => ({
        char,
        isVisible: false,
        delay: index * 0.1,
      }))
    );

    // Set initial state for content
    setContent(
      contentWords.map((word, index) => ({
        word,
        isVisible: false,
        delay: index * 0.05,
      }))
    );

    // Start animations
    animateHeading();
    setTimeout(animateContent, headingChars.length * 100);
  }, []);
 


  return (
    <div className=" font-Questrial bg-customGray relative w-full  " id="about">
     
      <div className="">

       <GliggoComponent/>
      </div>
      {/* Container for About section */}
      <div className=" text-black w-full">
        {/* Inner container */}
        <div className="max-w-7xl 2xl:px-28 2xl:py-8 px-10 py-3 sm:px-20  ">
          {/* Animation for heading */}
          <motion.div className="flex flex-wrap pt-10 sm:pt-0">
            {/* Mapping over heading characters and animating each */}
            {heading.map(({ char, isVisible, delay }, index) => (
              <motion.h1
                key={index}
                className=" font-Questrial  mr-2 mb-5 text-5xl md:text-6xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.5, delay }}
              >
                {char}
              </motion.h1>
            ))}
          </motion.div>
          {/* Animation for content */}
          <div className="flex gap-x-1 px-3 w-full flex-wrap">
            {/* Mapping over content words and animating each */}
            {content.map(({ word, isVisible, delay }, index) => (
              <motion.p
                key={index}
                className="font-Questrial text-[18px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.5, delay }}
              >
                {word}
              </motion.p>
            ))}
          </div>
        </div>
         
        {/* Our Team section */}
        <div className=" px-10 2xl:px-28 2xl:py-8  py-3 sm:px-20   text-black ">
          <h1 className="text-6xl font-bold    ">
            Our Team
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center sm:gap-y-20 gap-y-8 mt-5   gap-x-5">
            {/* Mapping over team members and rendering OurTeam component for each */}
            {our_team.map((team, index) => (
              <OurTeam
                key={index} // Unique key prop for each team member
                name={team.name}
                position={team.position}
                content={team.content}
                imageUrl={team.imageUrl}
              />
            ))}
          </div>
        </div>
        {/* Our Strength section */}
        <div className="bg-customGreen shadow-service_dark_shadow 2xl:px-28 2xl:py-10 sm:p-10 px-10 md:p-14 pb-5 font-Questrial relative z-10">
          <div className="">
            <h1 className="md:text-6xl text-5xl font-bold mb-5 py-5 ">Our Strengths</h1>
          </div>
          <div className=" 2xl:px-28 2xl:py-10  sm:flex-row  gap-y-6 sm:px-10 ">  
            <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 flex-1 gap-y-6 gap-x-10">
              {/* Mapping over strengths and rendering Strength component for each */}
              {strengths.map((strength) => (
                <Strength
                  key={strength.id} // Unique key prop for each strength
                  icon={strength.icon}
                  title={strength.title}
                  content={strength.content}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
