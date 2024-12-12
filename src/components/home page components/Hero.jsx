"use client"

import { words } from "@/constants/constvalues";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Text_Animation from "../Animations/Text_Animation";
import RotatingWords from "../Animations/RotatingWords";
import HomeSunAnimation from "../Animations/HomeSunAnimation";
import { scroller } from "react-scroll";


const Hero = () => {

  
  useEffect(() => {
    // Scroll to the top of the page on component mount or navigation
    window.scrollTo(0, 0);
  }, []);
  const handleclick = () => {
 
  

    if (document.getElementById("Service_Section")) {
      scroller.scrollTo("Service_Section", {
        smooth: true,
        offset: -100,
      });
    }
  };

  return (
    <div className="" id="hero">
      <div className="flex justify-between items-center flex-col py-1 sm:flex-row mb-5">
        <div className="max-w-5xl px-5 sm:px-10 mb-3 order-2 ">
          <div className="text-3xl sm:text-4xl md:text-5xl font-Questrial font-bold text-black ">
            <Text_Animation str="Taking Your Business to New  " />

            <RotatingWords words={words} />
            {/* <Text_Animation str={words[index]} /> */}
          </div>

          <p className="font-Questrial mt-5 text-base sm:text-lg md:text-[25px] text-wrap text-black">
            Scaling your business to new heights should not be difficult,
            depending on the choices you make. Choose Gliggo as your partner in
            growth.
          </p>
        </div>
        <div className="flex order-1 sm:order-2 justify-center">
          <HomeSunAnimation />
        </div>
      </div>

      <div className="flex flex-col gap-y-5 sm:gap-y-2 px-2 md:px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-5 gap-y-5 px-3">
          <div className="max-w-full xl:max-w-3xl lg:p-8 xl:p-10 2xl:p-12 bg-customGreen p-6 shadow-dark_shadow hover:shadow-dark_shadow_hover rounded-[5px] rounded-tr-[60px] flex flex-col gap-y-5 text-black">
            <h1 className="text-xl sm:text-2xl md:text-3xl mb-3 font-Questrial">
              <Text_Animation str="Business Process Outsourcing (BPO)" />
            </h1>
            <p className="font-Questrial">
              At Gliggo we offer second to none BPO services. Whether the
              business is small or large, whether the task is simple or complex
              we have the tailor-made solution for you.
            </p>
            <div className="flex justify-start items-center p-3">
              <Link href={"/bpo"}
                className=" px-4 sm:px-5 py-2 shadow-dark_shadow hover:shadow-dark_shadow_hover rounded-tr-full rounded-br-full rounded-tl-full hover:bg-gradient-to-tr from-[#000000]  to-[#130F40] hover:text-white font-Questrial"
              
              >
                <Text_Animation str="Explore Now" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:mt-2 cursor-pointer " onClick={handleclick} >
            <motion.div className="flex-grow bg-Arrowcolor shadow-dark_shadow hover:shadow-dark_shadow_hover flex justify-center items-center p-12 md:p-8 rounded-3xl">
              <motion.svg
                initial={{ y: -30 }} // Start position higher
                animate={{ y: 20 }} // End position lower
                transition={{
                  repeat: Infinity, // Repeat the animation infinitely
                  duration: 3, // Duration of each animation cycle
                  ease: "easeInOut", // Use easeInOut easing function for smooth animation
                  delay: 1,
                }}
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-Arrowcolor"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2CAC68"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v19"></path>
                <path d="M19 14l-7 7-7-7"></path>
              </motion.svg>
            </motion.div>
          </div>

          <div className="bg-black p-6 md:px-5 lg:p-8 shadow-dark_shadow hover:shadow-dark_shadow_hover xl:p-10 2xl:p-12 rounded-[5px] rounded-tl-[60px] flex flex-col gap-y-5">
            <h1 className="text-xl sm:text-2xl md:text-3xl text-white mb-2 md:mb-5 font-Questrial">
              <Text_Animation str="Software Development" />
            </h1>
            <p className="font-Questrial text-white">
              At Gliggo we are a leader in software development with a dedicated
              team of skilled and experienced software professionals who strive
              to deliver the right solution for your technology solution needs.
            </p>
            <div className="flex justify-start items-center p-2 md:p-3">
              <Link href={"/software_development"}
                className=" shadow-light_shadow hover:shadow-light_shadow_hover px-4 md:px-5 py-2 bg-white text-black rounded-tr-full rounded-br-full rounded-tl-full hover:bg-gradient-to-tr from-[#2CAC68]  to-green-700 hover:text-black font-Questrial"
             
              >
                <Text_Animation str="Explore More" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 py-2 px-3">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-5 gap-y-5">
            <div className="h-full sm:h-[30vh] md:h-[30vh] xl:h-[30vh] 2xl:h-[30vh] w-full relative">
              <Image
                src={"/heroimg1.webp"}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}

                alt="hero img"
                className="rounded-tr-3xl shadow-dark_shadow hover:shadow-dark_shadow_hover  rounded-xl"
              />
            </div>
            <div className="  shadow-dark_shadow hover:shadow-dark_shadow_hover bg-black rounded-tl-[50px] rounded-bl-[50px] rounded-br-[5px] rounded-tr-[5px]">
              <div className=" p-6 md:px-5   max-w-full xl:max-w-3xl h-full ">
                {/*TODO investigate why the shadow is applying to a different border radius*/}
                <h1 className="text-xl sm:text-2xl md:text-3xl text-customGreen mb-5 font-Questrial">
                  <Text_Animation str="Cloud-based Solutions" />
                </h1>
                <p className="font-Questrial text-customGreen p-1">
                  At Gliggo we provide cloud-based solutions that suit your
                  business needs. Whether it is building a customer/client
                  relationship management (CRM) system or online-shopping
                  experience, we've got it covered.
                </p>
                <div className="flex justify-start items-center p-3">
                  <Link href={"/cloud_solutions"}
                   
                    className=" px-5 shadow-light_shadow hover:shadow-light_shadow_hover py-2 bg-black text-customGreen rounded-tr-full rounded-br-full rounded-tl-full hover:bg-gradient-to-tr from-[#2CAC68]  to-green-700 hover:text-black font-Questrial"
                  >
                    <Text_Animation str="Explore Cloud Solutions" />
                  </Link>
                </div>
              </div>
            </div>  

            <div className="shadow-dark_shadow hover:shadow-dark_shadow_hover px-6 md:px-8 lg:px-16 p-16 sm:p-20 md:p-24 flex justify-center items-center bg-customGreen max-h-52 rounded-3xl xl:max-w-screen-2xl 2xl:max-w-xl">
              <svg
                preserveAspectRatio="none"
                data-bbox="20 20 160 160"
                viewBox="20 20 160 160"
                height="100"
                width="100"
                xmlns="http://www.w3.org/2000/svg"
                data-type="shape"
                role="presentation"
                aria-hidden="true"
                aria-label=""
              >
                <g>
                  <path d="M98.322 180v-60.16c0-4.101-3.345-6.551-6.58-6.551-1.714 0-3.341.684-4.584 1.927l-42.54 42.54-2.374-2.374 42.54-42.54c1.906-1.906 2.449-4.637 1.417-7.127s-3.346-4.037-6.042-4.037H20v-3.356h60.16c2.695 0 5.01-1.547 6.042-4.037 1.031-2.49.489-5.221-1.417-7.127l-42.54-42.54 2.374-2.374 42.54 42.54c1.242 1.243 2.87 1.927 4.584 1.927 3.234 0 6.58-2.451 6.58-6.551V20h3.356v60.16c0 1.841.724 3.531 2.039 4.758a6.72 6.72 0 0 0 4.542 1.793c1.714 0 3.341-.684 4.584-1.927l42.54-42.54 2.374 2.374-42.54 42.54c-1.906 1.906-2.449 4.637-1.417 7.127 1.031 2.49 3.346 4.037 6.042 4.037H180v3.356h-60.16c-2.695 0-5.01 1.547-6.042 4.037s-.489 5.221 1.417 7.127l42.54 42.54-2.374 2.374-42.54-42.54c-1.242-1.243-2.87-1.927-4.584-1.927-3.234 0-6.58 2.451-6.58 6.551V180h-3.355zm-12.937-40.315-2.878-1.182-14.335 34.909 2.878 1.182 14.335-34.909zm46.443-113.097-2.878-1.182-14.335 34.909 2.878 1.182 14.335-34.909zM61.497 82.507 26.588 68.171l-1.182 2.878 34.909 14.335 1.182-2.877zm113.098 46.443-34.909-14.335-1.182 2.878 34.909 14.335 1.182-2.878zM61.604 117.728l-1.2-2.871-34.82 14.548 1.2 2.871 34.82-14.548zm112.813-47.132-1.2-2.871-34.821 14.548 1.2 2.871 34.821-14.548zM85.144 60.404 70.596 25.583l-2.871 1.2 14.548 34.821 2.871-1.2zm47.131 112.813-14.548-34.821-2.871 1.2 14.548 34.821 2.871-1.2z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
