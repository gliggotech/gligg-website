"use client";
import React, { useEffect } from "react";
import { CiLocationOn } from "react-icons/ci"; // Importing location icon
import { IoMdTime } from "react-icons/io"; // Importing time icon
import { BsPersonWorkspace } from "react-icons/bs";

import { FaExternalLinkAlt } from "react-icons/fa";
import Text_Animation from "../Animations/Text_Animation";
import { careers } from "@/constants/constvalues";
import Link from "next/link";

const Careers = () => {
  const viewMoreJobs = "View more of our jobs on Indeed  ";

  useEffect(() => {
    // Scroll to the top of the page on component mount or navigation
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="  bg-customGray" id="careers">
      {/* Section for main heading */}
      <section className="bg-black text-white sm:pt-9  md:pt-10 pt-9 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-3">
          <Text_Animation str="Join Our Team" />
        </h1>
        <p className="text-lg sm:text-xl py-5">
          Explore exciting career opportunities and become part of our
          innovative team.
        </p>
      </section>

      {/* Section for featured jobs heading */}
      <section className="text-center  bg-black py-3">
        <h1 className="sm:text-6xl text-4xl text-white font-Questrial">
          <Text_Animation str="Featured Jobs" />
        </h1>
      </section>

      {/* Section for displaying individual job listings */}
      <section className="grid grid-cols-1 gap-y-10  bg-black  font-Questrial text-white p-5">
        {careers.map((career, index) => (
          <article
            className="flex flex-col xl:flex-row  justify-center items-center   gap-x-10 gap-y-6 p-1"
            key={index}
          >
            {/* Section for job details */}
            <section className="flex flex-col max-w-xl gap-y-2 p-3">
              <h1 className="text-xl">{career.title}</h1>
              <p>
                We are looking for a {career.title} to join our development
                team.
              </p>
              {/* Section for location, type of work, and field */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-5 mt-5">
                <div className="flex items-center justify-center gap-2  p-2 rounded-3xl border-2 border-customGreen">
                  <CiLocationOn
                    className="text-customGreen text-center"
                    aria-hidden="true"
                  />
                  <p className="text-nowrap text-center">
                    <Text_Animation str={career.location} />
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2  p-2 rounded-3xl border-2 border-customGreen">
                  <IoMdTime className="text-customGreen" aria-hidden="true" />

                  {/* Displaying type of work */}
                  <p className="text-center">
                    <Text_Animation str={career.type_of_work} />
                  </p>
                </div>
                {/* Displaying field */}
                <div className="flex items-center justify-center gap-2  p-2 rounded-3xl border-2 border-customGreen">
                  <BsPersonWorkspace
                    className="text-customGreen"
                    aria-hidden="true"
                  />
                  <p className="text-center">
                    <Text_Animation str={career.field} />
                  </p>
                </div>
              </div>
            </section>

            {/* Button to navigate to individual job page */}
            <div>
              <Link
                href={`/careers/${career.slug_url}`}
                className="bg-customGreen flex-1 hover:bg-customGray hover:text-black hover:border-2  text-black font-bold  p-3 mb-5 rounded-md"
                aria-label={`Read more about ${career.title}`}
              >
                <Text_Animation str="Read More & Apply..." />
              </Link>
            </div>
          </article>
        ))}
        {/* Section for displaying link to more jobs */}
        <div className="text-center flex flex-col gap-y-7 justify-center items-center  ">
          <h3 className="text-3xl">Have different skill sets? </h3>
          {/* Link to view more jobs on Indeed */}
          <a
            href="https://in.indeed.com/cmp/Gliggo-Technologies-India-Private-Limited"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={viewMoreJobs}
            className="bg-customGreen hover:bg-white text-black font-bold  p-3 rounded-md max-w-sm "
          >
            <span>
              <Text_Animation str={viewMoreJobs + "  "} />
              <FaExternalLinkAlt className="inline" />
            </span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Careers;
