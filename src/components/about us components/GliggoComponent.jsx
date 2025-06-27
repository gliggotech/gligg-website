"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const GliggoComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden p-6 shadow-lg hover:shadow-xl bg-gray-100 rounded-md border-l-4  font-Questrial"
    >
      {/* <div className="absolute right-1 top-1 p-2 rounded-full bg-customGreen cursor-pointer" onClick={handleIconClick}>
                <ImCross className="text-black " />
            </div> */}
      <div className="block sm:hidden mb-2 mt-3 md:mt-3">
        <div className="flex items-center justify-center sm:justify-start mb-1">
          <p className="text-lg flex items-center font-bold text-customGreen">
            Gliggo
            <span className="text-base ml-1 inline font-normal">/ˈɡlɪɡo/</span>
          </p>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-xs text-gray-700 inline">verb — Derived from </p>
          <motion.span
            className="text-customGreen relative font-semibold text-xs"
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.15,
              filter: "drop-shadow(0 0 5px currentColor)",
            }}
            style={{
              display: "inline-block",
            }}
          >
            <Link
              href="/services"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-customGreen focus:ring-opacity-50 rounded-sm px-1"
            >
              "Click, Go!"
            </Link>
          </motion.span>
          <span className="text-xs text-gray-700">.</span>
        </div>
      </div>

      {/* Desktop/Tablet - Side by side layout */}
      <div className="hidden sm:flex sm:items-center gap-3 mb-2 md:mt-3">
        {/* Main Gliggo Title */}
        <div className="flex items-center">
          <p className="text-xl lg:text-2xl flex items-center font-bold text-customGreen">
            Gliggo
            <span className="text-sm lg:text-base ml-2 inline font-normal">
              /ˈɡlɪɡo/
            </span>
          </p>
        </div>

        {/* Definition Text */}
        <div className="flex items-center">
          <p className="text-sm lg:text-base text-gray-700">
            verb — Derived from{" "}
            <motion.span
              className="text-customGreen relative font-semibold"
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.15,
                filter: "drop-shadow(0 0 5px currentColor)",
              }}
              style={{
                display: "inline-block",
              }}
            >
              <Link
                href="/services"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-customGreen focus:ring-opacity-50 rounded-sm px-1"
              >
                "Click, Go!"
              </Link>
            </motion.span>
            .
          </p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-gray-700 italic"
      >
        <blockquote>
          The name "Gliggo" is derived from the phrase "Click, Go!",
          representing our commitment to providing seamless and efficient
          solutions that enable businesses to achieve their goals with ease.
        </blockquote>
      </motion.div>
    </motion.div>
  );
};

export default GliggoComponent;
