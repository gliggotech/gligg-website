"use client"
import React from "react";
import SunAnimation3 from "../Animations/SunAnimation3";
import Text_Animation from "../Animations/Text_Animation";
import Link from "next/link";

const Industry = ({ industry }) => {
  const indbg = industry.background;
  let redirect_url;

    if (industry.title == "Business Process Outsourcing") {
      redirect_url = "/bpo";
   
    }
    if (industry.title == "Software Development") {
      redirect_url = "/software_development";
   
    }
    if (industry.title == "Managed IT Services") {
      redirect_url = "/cloud";
   
    }

  return (
    // Main container for an industry
    <div
      className={`max-w-3xl md:max-w-screen-xl h-auto sm:px-10 sm:py-5 p-5 text-black rounded-[40px] shadow-dark_shadow hover:shadow-dark_shadow_hover`}
      style={{ backgroundColor: `${industry.background}` }}
    >
      {/* Container for the SunAnimation3 component */}
      <div className="sm:mb-1 mb-2 p-5 flex justify-center items-center">
        <SunAnimation3 />
      </div>
      {/* Container for industry content */}
      <div className="flex flex-col justify-center items-center gap-y-5 font-Questrial">
        {/* Title of the industry */}
        <h1 className="text-2xl font-Roboto ">
          {/* Animated title using Text_Animation component */}
          <Text_Animation str={industry.title} />
        </h1>
        {/* Top content of the industry */}
        <div>
          <p className=" text-[18px]">{industry.topcontent}</p>

          {/* Subtitle for the list */}
          <p className="mb-2">{industry.listtitle}</p>
          {/* Ordered list of content */}
          <ol className="ml-10 text-[17px] font-Questrial list-disc">
            {/* Mapping over list content and rendering each item */}
            {industry.listcontent.map((item, index) => (
              <li className="" key={index}>
                {item}
              </li>
            ))}
          </ol>
        </div>
        {/* Bottom content of the industry */}
        <div>
          {industry.bottomcontent}
          <Link href={redirect_url}
            className={`ml-1 underline text cursor-pointer text-nowrap ${
              indbg == "#f4f4f4" ? "text-[#2CAC68]" : "text-[#f4f4f4]"
            }`}
        
          >
            Read more..
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Industry;
