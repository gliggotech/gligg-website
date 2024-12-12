import React from "react";
import Image from "next/image";
import Link from "next/link";


const Slide3 = () => {
 

  return (
    <div className="sticky top-2 md:top-10 md:px-10 drop-shadow-d-dark-shadow hover:drop-shadow-d-dark-shadow-hover xl:px-28 z-12 overflow-y-auto px-5">
      {/* Container for the slide content */}
      <div className="flex  h-[100vh]  md:h-[80vh] xl:h-[80vh] 2xl:h-[90vh] rounded-3xl flex-col md:flex-row">
        {/* Left side: Image */}
        <div className="flex-1 w-full h-[50vh] md:h-[80vh] xl:h-[80vh] 2xl:h-[90vh] relative rounded-tl-3xl md:rounded-bl-3xl rounded-tr-3xl md:rounded-tr-none md:rounded-tl-3xl ">
          <Image
            src={"/solutionsimage2.webp"}
            alt="Solution Image"
            fill
            priority
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className=" object-cover rounded-tr-3xl rounded-tl-3xl md:rounded-tr-none md:rounded-br-3xl"
          />
        </div>
        {/* Right side: Data Advisory */}
        <div className="flex items-center justify-center flex-col flex-1 bg-black rounded-br-3xl  md:rounded-tr-3xl md:rounded-br-3xl">
          <div className="sm:p-7">
            {/* SVG Icon for Data Advisory */}
            <svg
              preserveAspectRatio="none"
              data-bbox="20 20 160 160"
              viewBox="20 20 160 160"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              data-type="shape"
              role="presentation"
              aria-hidden="true"
              aria-label=""
              className="sm:w-20 sm:h-20"
            >
              {/* Group for Data Advisory Icon */}
              <g>
                {/* Path for Data Advisory Icon */}
                <path d="M180 98.056h-47.423c-16.919 0-30.634-13.715-30.634-30.634V20h-3.887v47.422c0 16.919-13.715 30.634-30.634 30.634H20v3.887h47.423c16.919 0 30.634 13.715 30.634 30.634V180h3.887v-47.423c0-16.919 13.715-30.634 30.634-30.634H180v-3.887z"></path>
              </g>
            </svg>
          </div>
          {/* Text content for Data Advisory */}
          <div className="flex flex-col sm:gap-y-5 justify-center items-center px-2 gap-y-1 sm:px-2 md:px-3 font-Questrial">
            {/* Title for Data Advisory */}
            <h1 className="text-white text-xl">Data Advisory</h1>
            {/* Description for Data Advisory */}
            <p className="font-Questrial  text-base  text-wrap text-white sm:px-3">
              Our Data Advisory service empowers clients with expert guidance on
              leveraging data for strategic decision-making, performance
              optimization, and actionable insights. Our tailored approach
              ensures that clients benefit from customized data strategies,
              pricing models, and consultations aimed at unlocking the full
              potential of their data assets.
            </p>
            {/* Button for Data Advisory */}
            <div className="flex justify-start items-center px-3">
              <Link href={"/cloud"}
                className=" px-4 py-2 mb-5 bg-black text-customGreen shadow-light_shadow hover: rounded-tr-full rounded-br-full rounded-tl-full hover:bg-gradient-to-tr from-[#2CAC68]  to-green-700 hover:text-black font-Questrial"
               
              >
                Read our latest services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
