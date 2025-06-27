"use client";
import React, { useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5"; // Importing location icon
import { IoMdTime } from "react-icons/io"; // Importing time icon
import { BsPersonWorkspace } from "react-icons/bs";
import Text_Animation from "../Animations/Text_Animation";
import Link from "next/link";

const EachCareer = ({ job }) => {
  useEffect(() => {
    // Scroll to the top of the page on component mount or navigation
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" ">
      <div className="text-center py-12 bg-black text-white font-Questrial p-5 xl:px-36">
        <div className="flex flex-col gap-y-6 sm:px-28">
          <div className="flex flex-col justify-center items-center">
            {/* Displaying the job title with text animation */}
            <h1 className="text-4xl">
              <Text_Animation str={job.title} />
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-5 mt-5 max-w-xl">
              {/* Displaying job location with icon and text animation */}
              <div className="flex items-center justify-center gap-2  p-4 rounded-3xl border-2 border-customGreen">
                <IoLocationOutline className="text-customGreen" />
                <Text_Animation str={job.location} />
              </div>
              {/* Displaying job type with icon and text animation */}
              <div className="flex items-center justify-center gap-2  p-2 rounded-3xl border-2 border-customGreen">
                <IoMdTime className="text-customGreen" />
                <Text_Animation str={job.type_of_work} />
              </div>
              {/* Displaying job field with text animation */}
              <div className="flex items-center justify-center gap-2  p-2 rounded-3xl border-2 border-customGreen">
                <BsPersonWorkspace
                  className="text-customGreen"
                  aria-hidden="true"
                />

                <Text_Animation str={job.field} />
              </div>
            </div>
          </div>
          {job.description && (
            <div>
              <h1 className="text-2xl text-left text-customGreen px-2">
                <Text_Animation str="Job Description :" />{" "}
              </h1>
              <p className="text-left px-2">{job.description}</p>
            </div>
          )}

          {/* Displaying job responsibilities with text animation */}
          <div className="flex flex-col gap-y-1 px-2">
          <h1 className="text-2xl text-left text-customGreen px-2">
            <Text_Animation str="Responsibilities :" />{" "}
          </h1>
            <ol className=" text-left">
              {job.responsibilities.map((item, index) => (
                <li key={index} className="">
                  <span className="text-customGreen">{index + 1}. </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
          {/* Displaying job requirements with text animation */}
          <div className="flex flex-col gap-y-1 px-2">
          <h1 className="text-2xl text-left text-customGreen px-2">
            {" "}
            <Text_Animation str="Requirements : " />
          </h1>
            <ol className=" text-left">
              {job.requirements.map((item, index) => (
                <li key={index} className="">
                  <span className="text-customGreen">{index + 1}. </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
          {/* Displaying nice to have with text animation */}
          <p className=" text-left">
            <span className="text-customGreen px-2">
              {" "}
              <Text_Animation str="Nice to have:" />
            </span>
            <span className="">{job.nice_to_have}</span>
          </p>
          {/* Button to navigate to application form with text animation */}
          <div className="flex justify-center items-center">
            <Link
              href={`/careers/${job.slug_url}/application-form?title=${job.slug_url}`}
              className="bg-customGreen  hover:text-black hover:border-2 hover:bg-customGray text-black font-bold  p-3 rounded-md"
            >
              <Text_Animation str="Apply Now" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachCareer;
