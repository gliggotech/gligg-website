// app/not-found.tsx
import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="font-Poppins text-8xl font-bold text-customGreen">
            404
          </h1>
          <p className="font-Questrial text-3xl text-gray-800 mt-4">
            Page Not Found
          </p>
        </div>
        
        <div className="bg-customGray rounded-lg p-6 shadow-dark_shadow mb-8">
          <p className="font-Roboto text-gray-600 mb-4">
            Oops! The page you are looking for seems to have wandered off.
            Don't worry, we'll help you find your way back.
          </p>
        </div>
        
        <div className="flex justify-center space-x-4">
          <Link 
            href="/" 
            className="
              bg-customGreen 
              text-white 
              font-Poppins 
              px-6 py-3 
              rounded-lg 
              hover:bg-green-700 
              transition-colors 
              duration-300 
              shadow-dark_shadow 
              hover:shadow-dark_shadow_hover
            "
          >
            Go to Home
          </Link>
          
          <Link 
            href="/contact" 
            className="
              bg-white 
              text-customGreen 
              border-2 
              border-customGreen 
              font-Poppins 
              px-6 py-3 
              rounded-lg 
              hover:bg-customGreen 
              hover:text-white 
              transition-colors 
              duration-300 
              shadow-dark_shadow
            "
          >
            Contact Support
          </Link>
        </div>
        
        {/* <div className="mt-12 text-center">
          <p className="font-Roboto text-gray-500">
            Still lost? 
            <br />
            Check our 
            <Link 
              href="/sitemap" 
              className="
                text-customGreen 
                hover:underline 
                ml-2
              "
            >
              Sitemap
            </Link>
          </p>
        </div> */}
      </div>
    </div>
  );
}
