import React from 'react';


const WhyUs = ({ item }) => {
    const { title, description } = item;

    return (
        <div className="relative p-1">
            <div className='bg-customGray  hover:text-customGreen shadow-dark_shadow hover:shadow-dark_shadow_hover  rounded-xl sticky top-28 flex flex-col items-center justify-center font-Poppins gap-y-5 text-black p-5 h-auto max-w-full sm:h-[250px] sm:max-w-sm  border-2 hover:border-white transition-all duration-300 ease-in-out'>
                <h1 className='font-Poppins font-bold text-lg sm:text-xl text-center'>{title}</h1>
                <p className='text-base sm:text-base md:text-base px-4 sm:px-5 text-center'>{description}</p>
            </div>
        </div>
    );
};

export default WhyUs;
