"use client";
import { useEffect, useRef, useState } from "react";

import { ImCross } from "react-icons/im";
import Text_Animation from "../Animations/Text_Animation";
import { useForm } from "react-hook-form";
import { job_apply } from "@/app/actions/job_Application_Function";
import { useRequest } from "@/custom hooks/useRequest";
import { useRouter } from "next/navigation";

const Application_Form = ({ job }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    resetField,
    reset,
    formState: { errors },
  } = useForm();
  const file = watch("resume");
  const { success, error, loading, sendRequest, setError, setSuccess } =
    useRequest();
  const router = useRouter();
  const onSubmit = async (data) => {
    // Create FormData for file and other data
    const formData = new FormData();

    // Append all form fields
    Object.keys(data).forEach((key) => {
      if (key === "resume") {
        // Handle file upload
        if (data[key][0]) {
          formData.append("resume", data[key][0]);
        }
      } else {
        formData.append(key, data[key]);
      }
    });

    const res = await sendRequest(() => job_apply(formData));
    if (res.success) {
      reset();
      setTimeout(() => {
        setSuccess("");
        router.push("/careers");
      }, 2000);
    } else {
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  useEffect(() => {
    // Scroll to the top of the page on component mount or navigation
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <div
        className=" bg-white text-black p-3 md:px-52 sm:pt-9  md:pt-10 pt-9  xl:px-[30vw] py-3"
        id="application_form"
      >
        <h1 className="text-center text-black text-xl md:text-2xl lg:text-3xl uppercase font-bold mb-5">
          <Text_Animation str="Application Form" />
        </h1>

        {/* Job Title */}
        <h4 className="p-1 text-xl  border-2 border-customGreen text-center mb-5 bg-customGreen text-black rounded-3xl">
          <Text_Animation str={job.title} />
        </h4>

        <form className="p-2 max-w-3xl" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-y-5">
            <h1 className="text-2xl font-bold text-black">
              <Text_Animation str="Personal Info" />
            </h1>
            <div className="flex flex-col gap-y-6">
              {/* First Name */}
              <div className="flex flex-col  gap-y-2 mb-3">
                <label htmlFor="first_name" className="text-black">
                  First Name <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  className="border-b-2 border-black  outline-none required bg-white"
                  {...register("first_name", {
                    required: "First name is required",
                  })}
                />
                {errors.first_name && (
                  <span className="text-red-700">
                    {errors.first_name.message}
                  </span>
                )}
              </div>

              {/* Last Name */}
              <div className="flex flex-col  gap-y-2 mb-3">
                <label htmlFor="last_name" className="text-black">
                  Last Name <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  className="border-b-2 border-black outline-none required bg-white"
                  {...register("last_name", {
                    required: "Last name is required",
                  })}
                />
                {errors.last_name && (
                  <span className="text-red-700">
                    {errors.last_name.message}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col  gap-y-2 mb-3">
                <label htmlFor="email" className="text-black">
                  Email <span className="text-red-700">*</span>
                </label>
                <input
                  type="email"
                  className="border-b-2 border-black outline-none required bg-white"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Enter a valid email",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-700">{errors.email.message}</span>
                )}
              </div>
              {/* Contact Number */}
              <div className="flex flex-col  gap-y-2 mb-3">
                <label htmlFor="contact_Number" className="text-black">
                  Contact Number <span className="text-red-700">*</span>
                </label>
                <input
                  type="number"
                  className="border-b-2 border-black outline-none required bg-white"
                  {...register("contact_Number", {
                    required: "Contact Number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter a valid Contact Number",
                    },
                  })}
                />
                {errors.contact_Number && (
                  <span className="text-red-700">
                    {errors.contact_Number.message}
                  </span>
                )}
              </div>

              {/* Address */}
              <div className="flex flex-col  gap-y-2 mb-3">
                <label htmlFor="address" className="text-black">
                  Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="border-b-2 border-black outline-none required bg-white"
                  {...register("address", {
                    required: "Address is required",
                  })}
                />
                {errors.address && (
                  <span className="text-red-700">{errors.address.message}</span>
                )}
              </div>
            </div>

            <h1 className="text-2xl font-bold">
              <Text_Animation str="Professional Info" />
            </h1>
            <div className="flex flex-col gap-y-6">
              {/* University */}
              <div className="flex flex-col  gap-y-2 mb-3">
                <label htmlFor="university" className="text-black">
                  University
                </label>
                <input
                  type="text"
                  className="border-b-2 border-black  outline-none required bg-white"
                  {...register("university")}
                />
              </div>

              {/* Expertise */}
              <div className="flex flex-col  gap-y-2 mb-3">
                <label htmlFor="expertise" className="text-black">
                  Expertise
                </label>
                <input
                  type="text"
                  className="border-b-2 border-black  outline-none required bg-white"
                  {...register("expertise")}
                />
              </div>
              {job?.show_Github && (
                <div>
                  <div className="flex flex-col  gap-y-2 mb-3">
                    <label htmlFor="githublink" className="text-black">
                      GitHub Profile Link
                    </label>
                    <input
                      type="text"
                      className="border-b-2 border-black outline-none required bg-white"
                      {...register("githublink")}
                    />
                  </div>
                </div>
              )}

              <div className="flex flex-col  gap-y-2 mb-3">
                <label htmlFor="linkedinlink" className="text-black">
                  LinkedIn Profile Link
                </label>
                <input
                  type="text"
                  className="border-b-2 border-black outline-none required bg-white"
                  {...register("linkedinlink")}
                />
              </div>
              <div className="flex flex-col  gap-y-2 mb-3">
                <label htmlFor="bio" className="text-black">
                  Short Bio (Up To 250 Characters)
                </label>
                <textarea
                  type="text"
                  className="border-b-2 border-black outline-none required bg-white"
                  {...register("bio", {
                    maxLength: {
                      value: 250,
                      message: "Short Bio must be at least 250 characters",
                    },
                    required: "Short Bio is required",
                  })}
                />
                {errors.bio && (
                  <span className="text-red-700">{errors.bio.message}</span>
                )}
              </div>

              {/* Resume Upload */}
              <div className="flex flex-col  gap-y-2 mb-3">
                <label htmlFor="resume" className="text-black">
                  Upload Your Resume <span className="text-red-700">*</span>
                </label>
                <div className="flex items-center gap-x-5">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    {...register("resume", { required: "Resume is required" })}
                  />
                  {file && (
                    <ImCross
                      className="text-2xl rounded-full bg-white border-red-600 text-red-600 border-2 p-1 cursor-pointer"
                      onClick={() => {
                        resetField("resume");
                        setValue("resume", null);
                      }}
                    />
                  )}
                </div>
                {errors.resume && (
                  <span className="text-red-700">{errors.resume.message}</span>
                )}
              </div>
            </div>
            {success && <p className="text-green-600">{success}</p>}
            {error && <p className="text-red-700">{error}</p>}
            {/* Submit Button */}
            <button
              disabled={loading}
              className="bg-customGreen hover:text-black text-black font-bold p-3 rounded-md max-w-sm"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Application_Form;
