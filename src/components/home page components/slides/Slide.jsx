import React from 'react';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';




const Slide = () => {
  return (
    <div className="shadow-service_dark_shadow bg-customGreen relative z-20  pt-10">
      {/* Container for slides */}
      <div className=' flex-col flex sticky top-20 z-20 shad '>
        {/* Render individual slides */}
        <Slide1 /> {/* Render Slide1 component */}
        <Slide2 /> {/* Render Slide2 component */}
        <Slide3 /> {/* Render Slide3 component */}
        <Slide4 /> {/* Render Slide4 component */}
      </div>
    </div>
  );
};

export default Slide;
