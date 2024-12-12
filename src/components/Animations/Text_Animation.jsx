"use client"
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// Component for animating text
const Text_Animation = ({ str }) => {
  // Ref for detecting if component is in view
  const ref = useRef(null);
  // Hook to detect if the component is in the viewport
  const inview = useInView(ref);
  // Animation control
  const animation = useAnimation();

  // Effect to trigger animation when component comes into view
  useEffect(() => {
    if (inview) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [inview, animation]);

  // Splitting the string into an array of characters
  const str1 = str.split("");

  return (
    // Container span with motion animation
    <motion.span ref={ref}>
      {/* Mapping over each character and animating them */}
      {str1.map((s, index) => (
        <motion.span
          // Variants for animation
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          // Initial animation state
          initial="hidden"
          // Animation control
          animate={animation}
          // Transition delay for each character
          transition={{ delay: 0.05 * index }}
          key={index}
        >
          {s}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default Text_Animation;
