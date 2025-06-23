"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const OurDirector = ({ name, position, content, imageUrl }) => {
  const animation = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, inView]);

  return (
    <div className="w-full">
      <motion.div
        className="flex flex-col lg:flex-row lg:gap-x-8 gap-y-6 items-center shadow-dark_shadow hover:shadow-dark_shadow_hover justify-center w-full h-auto bg-black rounded-2xl p-10 sm:rounded-xl font-Questrial text-white hover:text-customGreen"
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={animation}
        transition={{ duration: 0.5 }}
        whileTap={{ scale: 0.98 }}
        ref={ref}
      >
        {/* Image section */}
        <div className="flex-shrink-0">
          <img
            src={imageUrl}
            alt={name}
            className="w-48 h-60 object-cover object-center bg-white rounded-tr-3xl rounded-tl-3xl"
          />
        </div>

        {/* Content section */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-y-4 flex-grow">
          <h1 className="text-2xl lg:text-3xl text-customGreen font-bold">
            {name}
          </h1>
          <span className="text-lg font-bold">{position}</span>
          <p className="text-base leading-relaxed max-w-3xl text-left">{content}</p>
          <span>
            <a href="#"></a>
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default OurDirector;
