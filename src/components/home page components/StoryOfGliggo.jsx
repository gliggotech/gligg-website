import Link from "next/link";
import Text_Animation from "../Animations/Text_Animation";


const StoryOfGliggo = () => {
  
  return (
    // Container for the story section
    <div className="overflow-hidden bg-white rounded-4xl px-5 pt-8" id="Story_Section">
      {/* Title of the story */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-Questrial font-bold text-black">
        The Story of Gliggo
      </h1>
      {/* Content of the story */}
      <div className="flex flex-col justify-center gap-y-5 mt-3 md:px-10 xl:px-36 py-4">
        {/* Animated text */}
        <span className="font-Poppins text-4xl md:max-w-5xl text-black">
          <Text_Animation
            str="Isn't it time for your business to reach its apex? Your greatest
          success is just around the corner."
          />
        </span>
        {/* Description */}
        <p className="font-Poppins text-[18px] text-left md:max-w-5xl text-black">
          We are a boutique IT consulting company specialized in providing
          tailor-made solutions to small and medium businesses. Our focus is to
          help businesses realize their full potential by helping them to reduce
          costs, improve efficiency, and overcome redundancies.
        </p>
        {/* Button to read more */}
        <Link href={"/about"}
          className=" flex items-center shadow-dark_shadow hover:shadow-dark_shadow_hover justify-center max-w-sm px-5 py-2 bg-black text-customGreen rounded-tr-full rounded-br-full rounded-tl-full hover:bg-gradient-to-tr from-[#2CAC68]  to-green-700 hover:text-black font-Poppins"
       
        >
          <Text_Animation str="Read more.." />
        </Link>
      </div>
    </div>
  );
};

export default StoryOfGliggo;
