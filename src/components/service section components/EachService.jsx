import React from "react";
import Text_Animation from "../Animations/Text_Animation";
import Link from "next/link";

const EachService = ({ industry }) => {
  const isLightBackground = industry.background === "#f4f4f4";
  const imageUrl = industry.bgimage;

  return (
    <div
      className={` w-full xl:min-h-[41vh] z-20 sm:w-[60vw] md:w-[55vw] xl:w-[50vw] flex flex-col justify-center 
        
       shadow-service_light_shadow hover:shadow-light_shadow_hover items-center gap-y-3 rounded-3xl font-Questrial sticky sm:top-8 top-5 p-3 sm:p-10`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      key={industry.id}
    >
      <div
        className="absolute inset-0 bg-black opacity-65 rounded-3xl pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="relative w-full h-full flex flex-col justify-center items-center text-white p-2 sm:p-8 z-10">
        <div className="flex justify-center items-center max-h-52 px-4">
          <svg
            preserveAspectRatio="none"
            data-bbox="20 20 160 160"
            viewBox="20 20 160 160"
            height="60"
            width="60"
            xmlns="http://www.w3.org/2000/svg"
            data-type="shape"
            role="presentation"
            aria-hidden="true"
            aria-label=""
            fill="white"
          >
            <g>
              <path d="M98.322 180v-60.16c0-4.101-3.345-6.551-6.58-6.551-1.714 0-3.341.684-4.584 1.927l-42.54 42.54-2.374-2.374 42.54-42.54c1.906-1.906 2.449-4.637 1.417-7.127s-3.346-4.037-6.042-4.037H20v-3.356h60.16c2.695 0 5.01-1.547 6.042-4.037 1.031-2.49.489-5.221-1.417-7.127l-42.54-42.54 2.374-2.374 42.54 42.54c1.242 1.243 2.87 1.927 4.584 1.927 3.234 0 6.58-2.451 6.58-6.551V20h3.356v60.16c0 1.841.724 3.531 2.039 4.758a6.72 6.72 0 0 0 4.542 1.793c1.714 0 3.341-.684 4.584-1.927l42.54-42.54 2.374 2.374-42.54 42.54c-1.906 1.906-2.449 4.637-1.417 7.127 1.031 2.49 3.346 4.037 6.042 4.037H180v3.356h-60.16c-2.695 0-5.01 1.547-6.042 4.037s-.489 5.221 1.417 7.127l42.54 42.54-2.374 2.374-42.54-42.54c-1.242-1.243-2.87-1.927-4.584-1.927-3.234 0-6.58 2.451-6.58 6.551V180h-3.355zm-12.937-40.315-2.878-1.182-14.335 34.909 2.878 1.182 14.335-34.909zm46.443-113.097-2.878-1.182-14.335 34.909 2.878 1.182 14.335-34.909zM61.497 82.507 26.588 68.171l-1.182 2.878 34.909 14.335 1.182-2.877zm113.098 46.443-34.909-14.335-1.182 2.878 34.909 14.335 1.182-2.878zM61.604 117.728l-1.2-2.871-34.82 14.548 1.2 2.871 34.82-14.548zm112.813-47.132-1.2-2.871-34.821 14.548 1.2 2.871 34.821-14.548zM85.144 60.404 70.596 25.583l-2.871 1.2 14.548 34.821 2.871-1.2zm47.131 112.813-14.548-34.821-2.871 1.2 14.548 34.821 2.871-1.2z"></path>
            </g>
          </svg>
        </div>
        <div className="flex flex-col justify-center gap-y-1  text-white font-Questrial text-center">
          <h1 className="text-2xl font-Roboto">
            <Text_Animation str={industry.title} />
          </h1>
          <p className="text-left">{industry.topcontent}</p>
          <p className="text-left">{industry.listtitle}</p>
          <ol className="ml-10 text-[16px] font-Questrial list-disc">
            {industry.listcontent.map((item) => (
              <li key={item} className="text-left">
                {item}
              </li>
            ))}
          </ol>
          <p className="text-left">{industry.bottomcontent}</p>
          <div className="text-left">
            {industry.suggestionPrompt}{" "}
            <Link
              href="/contact"
              className="ml-1 text-customGreen underline cursor-pointer "
              
            >
              Contact Us.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachService;
