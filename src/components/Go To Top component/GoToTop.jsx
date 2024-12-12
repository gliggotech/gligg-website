"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll"; 


const GoToTop = () => {
  const [visible, setVisible] = useState(false);
  let hideTimeout;

  const handleclick = () => {
    scroll.scrollToTop({ smooth: true, duration: 500 });
  };

  const listenScroll = () => {
    let heightToHidden = 300;
    const winscroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    // Check if the user has scrolled past `heightToHidden` or is at the bottom
    if (
      winscroll > heightToHidden ||
      winscroll + clientHeight >= scrollHeight
    ) {
      setVisible(true);
      // Cancel the hiding timeout if at the bottom
      if (winscroll + clientHeight >= scrollHeight) {
        if (hideTimeout) clearTimeout(hideTimeout);
        return;
      }
    } else {
      setVisible(false);
    }

    // Reset the hide timeout
    if (hideTimeout) clearTimeout(hideTimeout);

    // Set a new hide timeout
    hideTimeout = setTimeout(() => {
      setVisible(false);
    }, 3000); // Hide after 2 seconds of inactivity
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);

    // Clean up the event listener and timeout
    return () => {
      window.removeEventListener("scroll", listenScroll);
      if (hideTimeout) clearTimeout(hideTimeout);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="relative z-50 shadow-2xl shadow-customGreen">
      {visible && (
        <motion.div
          onClick={handleclick}
          className="fixed max-w-28 p-3 bg-customGreen bottom-4  rounded-full right-5 cursor-pointer hover:shadow-dark_shadow_hover shadow-dark_shadow "
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 1.5,
          }}
        >
          <FaArrowUp className="text-black " />
        </motion.div>
      )}
    </div>
  );
};

export default GoToTop;
