"use client";
import { contactFunction } from "@/app/actions/contactUsFunction";
import { useRequest } from "@/custom hooks/useRequest";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";


const Contact_Form = () => {
  // State variables
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [modalVisible, setModalVisible] = useState(false);

  const { loading, success, error, sendRequest,setSuccess, setError } = useRequest();
  useEffect(() => {
    // Scroll to the top of the page on component mount or navigation
    window.scrollTo(0, 0);
  }, []);



  // Function to handle form submission
  const handlesubmit = async (data) => {
    const result = await sendRequest(() => contactFunction(data));
    console.log(result);
    if(result.success) setModalVisible(true);
  };

  // Function to handle modal confirmation
  const handleOk = () => {
    setModalVisible(false);
    setError("");
    setSuccess("");
    reset();
  };

  return (
    <div
      className="shadow-service_dark_shadow  bg-black font-Questrial relative z-0 py-5 overflow-hidden"
      id="contact"
    >
      {/* Modal for displaying success/error message */}
      {modalVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded-lg text-center">
            {success && <p className="text-green-700">{success}</p>}
            {error && <p className="text-red-700">{error}</p>}
            <button
              className=" mt-5 bg-customGreen font-bold text-base sm:text-xl hover:bg-black hover:text-customGreen p-2 rounded-lg"
              onClick={handleOk}
            >
              OK
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between gap-y-10 gap-x-5 sm:p-10 py-6 px-4 mb-20">
        {/* Image Section */}
        <div
          className="bg-cover bg-no-repeat bg-center flex justify-center items-center relative md:w-[50vw] rounded-3xl  xl:flex-1 h-[40vh]  lxl:h-[50vh] md:h-[50vh] "
          style={{
            backgroundImage: `url(${"/contact.jpg"})`,
            // backgroundImage: `url('https://static.wixstatic.com/media/185c13_e3eeb53caa1d43a8bad54269bd92ebbf~mv2.jpg/v1/fill/w_328,h_328,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/phone%20and%20email.jpg')`,
          }}
        >
          <h1 className="text-center text-8xl text-white relative z-10">
            Get in Touch
          </h1>

          <div className="absolute inset-0 bg-gray-900 opacity-50 blur-lg"></div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col gap-y-6 flex-1 mx-auto   px-4 md:px-5 justify-center w-full">
          <form className="px-5 sm:px-1" onSubmit={handleSubmit(handlesubmit)}>
            {/* First Name */}
            <div className="flex flex-col max-w-xl gap-y-2 mb-3">
              <label htmlFor="first_name" className="text-white font-bold">
                First Name <span className="text-customGreen text-2xl">*</span>
              </label>

              <input
                {...register("first_name", {
                  required: "First name is required",
                  minLength: {
                    value: 3,
                    message: "First name must be at least 3 characters",
                  },
                })}
                className="rounded-xl pl-[20px] grow text-[18px] p-3 outline-none placeholder-[#D1D5DB] placeholder-opacity-100 bg-customGray shadow-input_shadow text-black"
                placeholder="Gliggo"
              />
              {errors.first_name && (
                <p className="text-red-500">{errors.first_name.message}</p>
              )}
            </div>
            {/* Last Name */}
            <div
              className="flex flex-col max-w-xl gap-y-2 mb-3"
              style={{ color: "lightgrey" }}
            >
              <label htmlFor="last_name" className="text-white font-bold">
                Last Name <span className="text-customGreen text-2xl">*</span>
              </label>

              <input
                {...register("last_name", {
                  required: "Last name is required",
                  minLength: {
                    value: 1,
                    message: "Last name must be at least  characters",
                  },
                })}
                placeholder="Inc"
                className="rounded-xl pl-[20px] p-3 outline-none text-[18px] placeholder-[#D1D5DB] placeholder-opacity-100 bg-customGray shadow-input_shadow text-black"
              />
              {errors.last_name && (
                <p className="text-red-500">{errors.last_name.message}</p>
              )}
            </div>
            {/* Email */}
            <div className="flex flex-col max-w-xl  gap-y-2 mb-3">
              <label
                htmlFor="email"
                className="text-white  font-bold flex gap-x-2 items-center"
              >
                Email <span className="text-customGreen text-2xl">*</span>
              </label>

              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className=" p-3 grow outline-none pl-[20px] text-[18px] placeholder-[#D1D5DB] placeholder-opacity-100 bg-customGray shadow-input_shadow  rounded-xl text-black"
                placeholder="info@gliggo.com"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            {/* Message */}
            <div className="flex flex-col max-w-xl gap-y-2 mb-3">
              <label htmlFor="message" className="text-white font-bold">
                Message <span className="text-customGreen text-2xl">*</span>
              </label>
              <textarea
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
                className="rounded-xl p-3 pl-[20px] text-[18px] placeholder-[#D1D5DB] placeholder-opacity-100  outline-none bg-customGray shadow-input_shadow text-black"
                placeholder="Hello World!"
              />
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </div>
            {/* <div className="mt-6">

            <Recaptcha ref={ref} />
            </div> */}
        
            {/* Submit Button */}
            <button
              type="submit"
              className="hover:shadow-service_light_shadow bg-customGreen mt-3 hover:bg-customGray hover:border-none hover:text-customGreen   text-black font-bold p-3 rounded-md max-w-md"
            >
              {loading ? (
                <span className="max-w-6xl text-black" disabled>
                  Loading...
                </span>
              ) : (
                "Contact Us"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact_Form;
