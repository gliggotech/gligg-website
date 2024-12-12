"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Review = ({ review }) => {
  // Animation controls
  const animation = useAnimation();
  // Hook to detect if the component is in view with a 40% visibility threshold
  const [ref, inView] = useInView({ threshold: 0.2 });

  // useEffect to start or stop animation based on inView status
  useEffect(() => {
    if (inView) {
      animation.start('visible');
    } else {
      animation.start('hidden');
    }
  }, [animation, inView]);

  return (
    <div className=" rounded-xl">

    <motion.div
      // CSS classes and styles for the review container
      className="max-w-sm text-white flex flex-col sm:gap-y-5 gap-y-2 p-4 sm:p-8 border-none shadow-light_shadow hover:shadow-light_shadow_hover   bg-black px-5  rounded-3xl md:mb-5"
      // Variants for hidden and visible states
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      // Initial state
      initial="hidden"
      // Animation controls
      animate={animation}
      // Transition duration
      transition={{ duration: 0.5, ease: 'easeOut' }}
      // Scale effect while tapping
      whileTap={{ scale: 0.95 }}
      // Exit animation
      exit={{ opacity: 0 }}
      // Reference for the inView hook
      ref={ref}
    >
      {/* Review content */}
      <p>{review.content}</p>
      {/* Reviewer name and position */}
      <div className="flex flex-col text-right px-4">
        <h1 className="text-xl">{review.name}</h1>
        <p className="">{review.position}</p>
      </div>
    </motion.div>
    </div>

  );
};

export default Review;
