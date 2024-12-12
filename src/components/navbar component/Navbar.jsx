"use client";
import React, { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { navlinks, socialLinks } from "@/constants/constvalues";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);
  const location = usePathname();
  // Function to toggle the mobile view of the navbar
  const handleNavbar = () => {
    setMobileView(!mobileView);
  };
  const showicon = (icon) => {
    switch (icon) {
      case "LinkedIn":
        return (
          <div className="p-2.5 rounded-full hover:scale-110  sm:shadow-social_icons_shadow  sm:hover:shadow-social_icons_shadow_hover shadow:sm_shadow-social_icons_shadow  hover:shadow-sm_shadow-social_icons_shadow   bg-[#eae9e9] ">
            <FaLinkedin className="w-[22px]  h-[22px]   text-[#0a66c2]   " />
          </div>
        );
      case "Facebook":
        return (
          <div className="p-2.5 rounded-full hover:scale-110  shadow-social_icons_shadow hover:shadow-social_icons_shadow_hover  bg-[#eae9e9] ">
            <FaFacebook className="w-[22px]  h-[22px]   text-[#0a66c2]" />
          </div>
        );
      case "Instagram":
        return (
          <div className="p-2.5 rounded-full hover:scale-110 shadow-social_icons_shadow hover:shadow-social_icons_shadow_hover  bg-[#eae9e9]">
            <FaInstagram className="w-[22px]   h-[22px]   text-[#C13584] " />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <nav className="overflow-hidden text-black ">
      {/* Desktop navbar */}
      <div className="bg-customGray py-3 fixed top-0 w-full z-10 overflow-hidden rounded-br-md rounded-bl-md shadow-dark_shadow hover:shadow-dark_navbar_shadow_hover">
        <div className="flex justify-between bg-transparent items-center px-7 xl:px-10">
          {/* Logo */}
          <div className=" md:ml-6 xl:ml-10  ">
            <Link
              href="/"
              className="flex relative  w-20 h-10 sm:w-24 sm:h-14 md:h-16 md:w-28  lg:w-32     shadow-logo-shadow rounded-lg"
            >
              <Image
                src={"/image_03.png"}
                alt="Logo"
                fill
                priority
                quality={100}
                className="object-contain   rounded-lg bg-none shadow-[0px_10px_80px_-100px_rgb(44,172,104),1px_0px_10px_0px_rgb(44,172,104)] text-center transform transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>

          <div className="block smm:hidden xl:hidden">
            <RxHamburgerMenu onClick={handleNavbar} className="w-8 h-8" />
          </div>
          <div className="text-nowrap text-black hidden smm:block">
            <ul className="flex flex-1 gap-x-[7px] font-Questrial">
              {navlinks.map((value) => (
                <li key={value.id}>
                  <div className="text-[16px] relative sm:text-[17px]">
                    {value.name !== "Gliggo Investments" ? (
                      <Link
                        href={`${value.url}`}
                        className={`py-3 border-customGreen cursor-pointer px-3 relative transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-customGreen before:hover:rounded-lg before:hover:scale-x-100 shadow-[4px_4px_8px_#00000044] hover:shadow-[6px_6px_12px_#00000066] rounded-lg ${
                          location.pathname == value.url
                            ? "bg-black text-customGreen rounded-lg"
                            : ""
                        }`}
                      >
                        <div className="absolute inset-0 rounded-lg hover:bg-black text-customGreen hover:bg-transparent"></div>
                        {value.name}
                      </Link>
                    ) : (
                      <a
                        href={value.url}
                        target="_blank"
                        className={`py-3 border-customGreen cursor-pointer px-3 relative transition-colors shadow-[4px_4px_8px_#00000044] hover:shadow-[6px_6px_12px_#00000066] rounded-lg ${
                          location.pathname === value.url
                            ? "bg-black text-customGreen rounded-lg"
                            : "bg-gradient-to-tr from-gray-200 via-[#2CAC68] to-[#2CAC68] text-black"
                        } hover:bg-black hover:text-black`}
                      >
                        <div className="absolute inset-0 rounded-lg"></div>
                        {value.name}
                        <FaExternalLinkAlt className="inline-block ml-2" />
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Social media links for desktop view */}
          <div className="hidden xl:inline-block">
            <ul className="flex gap-x-3">
              {socialLinks.map((value) => (
                <li key={value.id}>
                  <div className="relative  ">
                    <a
                      href={value.url}
                      target="_blank"
                      className="hover:scale-105"
                    >
                      {showicon(value.name)}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile navbar */}
      {mobileView && (
        <motion.div
          className="fixed inset-0 z-50 bg-customGreen text-white"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex justify-end p-4">
            {/* Cross icon to close the mobile navbar */}
            {/* <RxCross2
              className="w-8 h-8 cursor-pointer text-white"
              onClick={handleNavbar}
            /> */}
          </div>
          <div className="flex flex-col h-full justify-start  items-center gap-y-6">
            {/* Navigation links for mobile view */}
            {/* <ul className="flex flex-col gap-y-10 justify-center items-center font-Questrial">
            {navlinks.map((value) => (
                <li key={value.id}>
                  <div className="relative text-[20px]">
                    {value.name !== "Gliggo Investments" ? (
                      <Link
                        href={value.url}
                        className={`p-3 shadow-dark_shadow rounded-lg px-5 font-medium  uppercase transition-colors relative before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-customGreen before:hover:rounded-xl before:hover:scale-x-100 ${
                          location.pathname === value.url
                            ? "bg-black text-customGreen rounded-lg"
                            : ""
                        }`}
                        onClick={handleNavbar}
                      >
                        <div className="absolute inset-0 rounded-lg text-black"></div>
                        {value.name}
                      </Link>
                    ) : (
                      <a
                        href={value.url}
                        target="_blank"
                        className={`py-3 px-5  rounded-lg shadow-dark_shadow relative transition-colors ${
                          location.pathname === value.url
                            ? ""
                            : "bg-gradient-to-tr from-[#000]   to-gray-700 focus:ring-8 focus:outline-none focus:ring-yellow-200  text-white"
                        } hover:bg-customGray hover:text-white`}
                      >
                        <div className="absolute inset-0 rounded-lg"></div>
                        {value.name}
                        <FaExternalLinkAlt className="inline-block ml-2" />
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul> */}
            {/* Social media links for mobile view */}
            {/* <ul className="flex gap-x-7  items-center p-4">
              {socialLinks.map((value) => (
                <li key={value.id}>
                  <div className="">
                    <a
                      href={value.url}
                      target="_blank"
                      className="cursor-pointer"
                    >
                      {showicon(value.name)}
                    </a>
                  </div>
                </li>
              ))}
            </ul> */}
          </div>
        </motion.div>
      )}
    </nav>
  );
};
