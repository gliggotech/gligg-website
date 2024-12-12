"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const RotatingWords = ({ words }) => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words]);

  return (
    <motion.div
      key={index}
      initial={{  opacity: 0,
        y: 50, }}
      animate={{ opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          type: 'spring',
          stiffness: 100,
        },}}
      exit={{
        opacity: 0,
        y: -50,
        transition: {
          duration: 1,
        },
      }}
      transition={{ duration: 1 }}
      className={`text-3xl inline-block sm:text-4xl md:text-5xl font-Questrial font-bold text-black ${index%2==0?'bg-gradient-to-r from-[#2CAC68]  to-[#000] ':'bg-gradient-to-r from-[#000]  to-[#2CAC68]'}  bg-clip-text text-transparent`}
    >
   
      {words[index]} 
      {/* <Text_Animation str={words[index]} /> */}
    </motion.div>
  );
};

export default RotatingWords;
