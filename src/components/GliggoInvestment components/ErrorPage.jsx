import Link from "next/link";
import React from "react";
import { FaBackspace, } from "react-icons/fa";

const ErrorPage = ({ code, message, content }) => {


  
  return (
    <div className=" h-[100vh] flex flex-col justify-center items-center bg-gray-100 font-Questrial">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        {code && (
          <h1 className="text-6xl font-bold text-red-500 mb-4">{code}</h1>
        )}

        <h2 className="text-2xl font-semibold mb-4">{message}</h2>
        <p className="text-black mb-6">{content}</p>
        <Link href={"/"}
          
          className=" px-5 py-2 bg-black text-customGreen rounded-tr-full rounded-br-full rounded-tl-full hover:bg-customGreen hover:text-black font-Questrial"
        >
          <FaBackspace className="inline mr-2" />
          | Gliggo Back!
        </Link><br /><br />
        <p className="max-w-xl">
          If you're looking for Gliggo Investments, please note that the site is
          currently under development. We’re working hard to bring you an exceptional experience.
          {/* Meanwhile, you can <a className="underline" href="http://gliggoinvestments.com">click here</a> to sign up for early access and stay updated. */}
        </p>        
      </div>
    </div>
  );
};

export default ErrorPage;
