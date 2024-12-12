"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SunAnimation = ({ color }) => {
  const numRays = 12; // Number of sunlight rays
  const rayLength = 40; // Initial length of sunlight rays
  const scaleVariation = 0.8; // Amount of scale variation
  const angleIncrement = 360 / numRays; // Angle increment for each ray
  const [isClient, setIsClient] = useState(true);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      return;
    }
    if (isClient) {
      return;
    }
  }, []);

  const rays = [];
  for (let i = 0; i < numRays; i++) {
    const angle = i * angleIncrement;
    const x2 = 50 + rayLength * Math.cos((angle * Math.PI) / 180); // Endpoint x-coordinate
    const y2 = 50 + rayLength * Math.sin((angle * Math.PI) / 180); // Endpoint y-coordinate

    rays.push(
      <motion.line
        key={i}
        x1="50"
        y1="50"
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth="2"
        initial={{ opacity: 0, scale: 0.5 }} // Initial hidden state with scale
        animate={{
          opacity: 1,
          scale: [0.5, scaleVariation, 0.5], // Scale animation with variation
        }}
        transition={{
          delay: i * 0.1, // Delay each ray animation
          duration: 2, // Duration of each ray animation
          repeat: Infinity, // Repeat the animation infinitely
          repeatType: "reverse", // Reverse direction on repeat
        }}
      />
    );
  }

  return (
    <div>
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
      >
        {/* Sun center */}
        <circle cx="50" cy="50" r="10" fill={color} />
        {/* Sunlight rays */}
        {rays}
      </svg>
    </div>
  );
};

export default SunAnimation;
