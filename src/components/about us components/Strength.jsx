"use client"
import React, { useEffect, useRef } from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaIndustry } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { TiMessages } from "react-icons/ti";
import { motion, useAnimation, useInView } from "framer-motion";
import SunAnimation from "../Animations/SunAnimation";
import Text_Animation from "../Animations/Text_Animation";


const Strength = ({ id, icon, title, content }) => {
  // Animation control
  const animation = useAnimation();
  // Ref for detecting if component is in view
  const ref = useRef(null);
  // Hook to detect if the component is in the viewport
  const inView = useInView(ref);

  // Effect to trigger animation when component comes into view
  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, inView]);

  // Function to render the appropriate icon based on the given icon prop
  const renderIcon = (icon) => {
    switch (icon) {
      case "lightbulb":
        return <HiOutlineLightBulb size={75} />;
      case "industry":
        return <FaIndustry size={75} />;
      case "weightlifting":
        return <GiWeightLiftingUp size={75} />;
      case "messages":
        return <TiMessages size={75} />;
      default:
        return null;
    }
  };

  return (
    <div className=" rounded-3xl">

    <motion.div
      // Container styles with motion animation
      className="flex justify-between flex-col sm:flex-row items-center shadow-dark_shadow hover:shadow-dark_shadow_hover  bg-black  p-10 font-Questrial text-white rounded-3xl  "
      // Unique key for the component
      key={id}
      // Variants for animation
      variants={{
        hidden: { opacity: 0, x: id / 2 === 0 ? 100 : -100 },
        visible: { opacity: 1, x: 0 },
      }}
      // Initial animation state
      initial="hidden"
      // Animation control
      animate={animation}
      // Transition duration
      transition={{ duration: 0.5 }}
      // Scale animation while tapping
      whileTap={{ scale: 0.95 }}
      // Ref for detecting if the component is in view
      ref={ref}
    >
      {/* Sun animation component */}
      <div className="flex ">
        <SunAnimation color={"#2CAC68"} />
      </div>
      <div className="flex flex-col gap-y-5 justify-center items-center max-w-xl ">
        <div className="flex justify-center items-center gap-x-5">
          {/* Render the icon */}
          {renderIcon(icon)}
        </div>
        <div className="flex justify-center items-center gap-x-5">
          {/* Animated title */}
          <h1 className="text-[20px] sm:text-[24px] font-bold">
            <Text_Animation str={title} />
          </h1>
        </div>
        <div className="flex justify-center items-center gap-x-5">
          {/* Content */}
          <p className="text-[14px] sm:text-[16px]">{content}</p>
        </div>
      </div>
    </motion.div>
    </div>
  );
};

export default Strength;
