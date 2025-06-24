"use client"
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const OurTeam = ({ name, position, content, imageUrl }) => {
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

  return (

<div className=" rounded-xl">

    <motion.div
      // Container styles with motion animation
      className="flex flex-col gap-y-5 items-center shadow-dark_shadow hover:shadow-dark_shadow_hover  justify-center 2xl:max-w-2xl xl:max-w-xl md:max-w-md h-auto bg-black rounded-2xl  p-10 sm:rounded-xl font-Questrial text-white group"
      // Variants for animation
      variants={{
        hidden: { opacity: 0, x: -100 },
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
      {/* Team member image */}
      <img
        src={imageUrl}
        alt={name}
        className="w-48  h-60  object-cover object-center bg-white rounded-tr-3xl rounded-tl-3xl"
      />
      {/* Team member name */}
      <h1 className="text-xl text-customGreen font-bold">{name}</h1>
      {/* Team member position */}
      <span className="font-bold">{position}</span>
      {/* Team member content */}
      <p className="group-hover:text-customGreen ">{content}</p>
      {/* Placeholder for a link */}
      <span>
        <a href="#"></a>
      </span>
    </motion.div>
</div>

  );
};

export default OurTeam;
