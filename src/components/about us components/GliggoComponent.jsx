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
      <div className="flex items-center gap-2 mb-2 md:mt-3">
        <p className="text-xl flex items-center  font-bold text-customGreen">
          Gliggo <span className="text-sm ml-2">/ˈɡlɪɡo/</span>
        </p>
        <p className="text-gray-700 text-sm">
          <code className="font-semibold">verb</code> — Derived from{" "}
          <motion.span
            className="m-1 text-customGreen relative font-semibold"
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
            <Link href="/services">"Click, Go!"</Link>
          </motion.span>
          .
        </p>
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
