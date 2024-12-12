"use client"
import  { useEffect, useRef, useState } from "react";
import {  animateScroll as scroll } from "react-scroll"; // Importing Link and scroll from react-scroll package
 // Importing useLocation and useParams hooks
// import Recaptcha from "../../Recaptcha";
import {
  FaExternalLinkAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { usePathname } from "next/navigation";
import Text_Animation from "@/components/Animations/Text_Animation";
import { contactInfo, navlinks, socialLinks } from "@/constants/constvalues";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear(); // Getting the current year
  const ref = useRef();
    const pathname=usePathname();
  // Getting the current location path
  const location = pathname.split("/");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [success, setSuccess] = useState(""); // State for success message
  const [error, setError] = useState(""); // State for error message
  const [modalVisible, setModalVisible] = useState(false);

  // Scroll to specified section on mount or location change
  useEffect(() => {
    const scrollToGeroSection = () => {
      const target = location[1] !== "" ? location[1] : "home";
      scroll.scrollTo(target, {
        smooth: true,
        duration: 500,
        offset: 0,
      });
    };
    scrollToGeroSection();
  }, []);
  const handleSubscribe = (e) => {
    setModalVisible(true);

    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression pattern for email validation

    if (email && emailPattern.test(email) && subscribed) {
      // Simulate subscription process with setTimeout

      setTimeout(() => {
        //send data to the Azure function
        try {
          fetch(webInfo.collectNewsletterSubscribersEndpoint, {
            method: "POST",
            body: JSON.stringify({
              email: email,
            }),
          });
        } catch (error) {
          console.error("Error:", error);
        }
        setSuccess(
          "Congratulations! Your subscription has been successfully processed."
        ); // Set success message
        setError(""); // Clear any previous error message
        setEmail(""); // Clear the email input after successful subscription
        setSubscribed(false); // Reset the subscription checkbox
        if (ref.current) {
          ref.current.reset();
        }
      }, 1000); // Simulating a delay for demonstration purposes
    } else {
      if (!email || !emailPattern.test(email)) {
        setError("Please enter a valid email address."); // Set error message for invalid email
        if (ref.current) {
          ref.current.reset();
        }
        return;
      } else {
        setError("Please toggle the switch to subscribe."); // Set error message for unchecked subscription box
        if (ref.current) {
          ref.current.reset();
        }
        return;
      }
      // setSuccess(""); // Clear any previous success message
    }
  };
  const handleOk = () => {
    setModalVisible(false);
    setSuccess(""); // Clear any previous success message
    setError(""); // Clear any previous error message
  };
  const showicon = (icon) => {
    switch (icon) {
      case "LinkedIn":
        return (
          <div className="p-2.5 rounded-full hover:scale-110  shadow-social_icons_shadow  hover:shadow-social_icons_shadow_hover  bg-[#eae9e9] ">
            <FaLinkedin className="w-[30px]  h-[30px]   text-[#0a66c2]   " />
          </div>
        );
      case "Facebook":
        return (
          <div className="p-2.5 rounded-full hover:scale-110  shadow-social_icons_shadow hover:shadow-social_icons_shadow_hover  bg-[#eae9e9] ">
            <FaFacebook className="w-[30px]  h-[30px]   text-[#0a66c2]" />
          </div>
        );
      case "Instagram":
        return (
          <div className="p-2.5 rounded-full hover:scale-110 shadow-social_icons_shadow hover:shadow-social_icons_shadow_hover  bg-[#eae9e9]">
            <FaInstagram className="w-[30px]   h-[30px]   text-[#C13584] " />
          </div>
        );
      default:
        return null;
    }
  };

  function formatCanadianPhoneNumber(phoneNumber) {
    const cleaned = ("" + phoneNumber).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return null;
  }

  return (
    <footer className="relative bg-white text-black font-Questrial">
      {/* Modal for displaying success/error message */}
      {modalVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 font-Questrial">
          <div className="bg-white p-5 rounded-lg text-center">
            {success && <p className="text-green-700">{success}</p>}
            {error && <p className="text-red-700">{error}</p>}
            <button
              className="text-black font-Questrial   mt-5 bg-customGreen  font-bold text-base sm:text-xl hover:bg-black hover:text-customGreen p-2 rounded-lg"
              onClick={handleOk}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Newsletter Subscription Section */}
      <div className="flex flex-col  pb-4">
        {/* Title */}
        <section className="flex flex-col md:flex-row w-full items-center md:px-14 py-10 gap-y-5">
          <div className="flex flex-1 py-5 px-5">
            <h1 className="font-Questrial font-medium text-6xl md:max-w-xl text-center text-black">
              <span className="font-Questrial font-medium text-6xl">
                <Text_Animation str="FOMO " />
              </span>
              <Text_Animation str="got you puzzled?" />
            </h1>
          </div>
          {/* Newsletter Subscription Form */}
          <form
            onSubmit={handleSubscribe}
            className="flex flex-1 flex-col gap-y-5 text-xl px-3 font-Questrial"
          >
            <h4>Subscribe to our weekly newsletter.</h4>
            <small>
              We promise never to send you spam! Only important news to stay
              up-to-date!
            </small>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-8 h-8 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <span className="font-bold -ml-2 mb-1 text-customGreen">*</span>
              <input
                type="text"
                className="p-3 pl-[20px]  line-clamp-5 grow outline-none text-[18px] placeholder-[#D1D5DB] placeholder-opacity-100 bg-customGray shadow-[inset_2px_2px_8px_rgba(0,0,0,0.2),inset_2px_2px_8px_rgba(0,0,0,0.2)]  rounded-xl text-black "
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <div className="flex gap-x-2 items-center">
              <div className="mt-2">
                <input
                  type="checkbox"
                  className="relative
                  appearance-none 
                  inline-block
                  h-[26px]
                
                  w-[50px]
                  cursor-pointer
                  rounded-full
               bg-customGray
                  
                  shadow-[inset_0px_0px_10px_rgba(0,0,0,0.25),inset_-0px_0px_10px_rgba(0,0,0,0.25)]
                  transition-all
                  after:content-['']
                  after:absolute
                  after:top-[0.7px]
                  after:left-[-0px]
                  after:w-6
                 
                  after:h-6
                  after:bg-customGray
                  after:rounded-full
                  after:shadow-dark_shadow_hover
                  after:transition-all
                  checked:bg-customGreen
                  checked:after:translate-x-[26px]
                  "
                  checked={subscribed}
                  onChange={() => setSubscribed(!subscribed)}
                />
              </div>
              <div className="text-[18px] sm:text-xl">
                Yes, subscribe me to your newsletter.
              </div>
            </div>
            {/* {subscribed && <Recaptcha ref={ref} />} */}

            <button className="self-center shadow-dark_shadow hover:shadow-dark_shadow_hover flex items-center justify-center w-full md:max-w-sm px-5 py-2 bg-black text-customGreen rounded-tr-full rounded-br-full rounded-tl-full hover:bg-gradient-to-tr from-[#2CAC68]  to-green-700 hover:text-black font-Questrial">
              Subscribe
            </button>
          </form>
        </section>

        {/* Brand Name */}
        <section className="flex items-center justify-center relative">
          {/* GLIGGO Link */}
          <div className="font-Poppins  xl:text-[300px] text-[65px] sm:text-[175px] md:text-[200px] font-bold bg-clip-text bg-gradient-to-tr from-[#2CAC68]  to-green-700 text-transparent ">
            <Text_Animation className="items-right " str="Gliggo" />
            <br />
            {/* <small><Text_Animation str="Go Digital" className="text-sm" /></small> */}
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-5 md:gap-0  font-Questrial justify-between items-center sm:px-32 px-5">
          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:max-w-64 gap-x-5 px-2  justify-items-center md:justify-items-start">
            {navlinks.map((value) => (
              <div className="" key={value.id}>
                {value.name !== "Gliggo Investments" ? (
                  <Link href={value.url} className="text-base sm:text-lg">
                    {value.name}
                  </Link>
                ) : (
                  <Link
                    href={value.url}
                    target="_blank"
                    className="text-base sm:text-lg"
                  >
                    <span className="flex justify-center  items-center gap-x-1 sm:gap-x-3">
                      {" "}
                      {value.name} <FaExternalLinkAlt />
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="flex flex-1 flex-col xl:flex-row justify-center items-center gap-y-2 gap-x-10  px-5 sm:pl-10 py-5 sm:py-0 font-Questrial">
            <div className="">
              <h1 className="text-lg sm:text-xl text-center md:text-left">
                Americas - Canada
              </h1>
              <br />
              <p className="text-sm sm:text-base text-center md:text-left">
                <a
                  href={`https://www.google.com/maps/search/${contactInfo.address1}+${contactInfo.address2}`.replace(
                    / /g,
                    "+" //TODO supply the link correctly
                  )}
                  target="_blank"
                >
                  {contactInfo.address1}
                  <br />
                  {contactInfo.address2}
                </a>
              </p>
              <br />
              <p className="text-center md:text-left">
                {" "}
                <a href={`tel:${contactInfo.phone}`}>
                  Tel: {formatCanadianPhoneNumber(contactInfo.phone)}
                </a>
              </p>
              <p className="text-center md:text-left">
                <a href={`mailto:${contactInfo.email}`}>
                  Email: {contactInfo.email}
                </a>
              </p>
            </div>
            <div className=" ">
              <h1 className="text-lg sm:text-xl text-center md:text-left">
                Asia - India
              </h1>
              <p className="text-sm sm:text-base text-center md:text-left">
                {contactInfo.addressIndia}
              </p>
              <p className="text-sm sm:text-base text-center md:text-left">
                {contactInfo.addressIndia_Region}
              </p>
              <p className="text-sm sm:text-base text-center md:text-left">
                {contactInfo.addressIndia_City}
              </p>
              <p className="text-sm sm:text-base text-center md:text-left">
                {contactInfo.addressIndia_State}
              </p>
              <p className="text-center md:text-left">
                <a href={`tel:${contactInfo.phoneIndia}`}>
                  Tel: {contactInfo.phoneIndia}
                </a>
              </p>
              <p className="text-center md:text-left">
                <a href={`mailto:${contactInfo.email}`}>
                  Email: {contactInfo.email}
                </a>
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center items-center max-w-40 md:items-center md:justify-start 2xl:px-20 px-4 mt-5 sm:mt-0">
            <ul className="flex sm:flex-col gap-x-7 gap-y-5 md:items-center md:w-full">
              {socialLinks.map((value) => (
                <li key={value.url}>
                  <a
                    href={value.url}
                    className="text-base sm:text-lg"
                    target="_blank"
                  >
                    {showicon(value.name)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* Footer Text */}
      <div className="font-Poppins text-black py-2 px-10 mb-5 text-center bg-white">
  <div>
    <span>Copyright ©</span> {year}{" "}
    <span className="text-green-700">Gliggo Inc.</span>{" "}
    <span> All rights reserved.</span>
  </div>
</div>

    </footer>
  );
};

export default Footer;
