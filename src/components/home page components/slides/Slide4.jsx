import Text_Animation from "@/components/Animations/Text_Animation";
import Review from "../Review";
import { reviews } from "@/constants/constvalues";


const Slide4 = () => {
  return (
    // Main container for the slide
    <div className=" z-20 bg-[#232322] drop-shadow-l-light-shadow hover:drop-shadow-l-light-shadow-hover  p-5 sm:p-7  ">
      {/* Title and introductory text */}
      <div className="flex flex-col px-8 py-2 sm:px-16  md:px-20 xl:px-28  md:py-12 text-white">
        {/* Animated title */}
        <h1 className="font-Questrial text-4xl sm:mb-5 ">
          {/* Text with animation effect */}
          <Text_Animation str="It’s all about client satisfaction." />
        </h1>
        {/* Description */}
        <p className="font-Questrial ">
          A few words from our clients.
          
        </p>
      </div>
      {/* Container for reviews */}
      <div className=" gap-y-5 mt-6 gap-x-6 px-3 md:px-10 xl:px-28 grid sm:grid-cols-2 xl:grid-cols-3 justify-items-center ">
        {/* Mapping through reviews data and rendering Review component */}
        {reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Slide4;
