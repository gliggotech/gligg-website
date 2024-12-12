
import SunAnimation4 from "@/components/Animations/SunAnimation4";
import Image from "next/image";

const Slide1 = () => {
  return (
    <div className="sticky top-2 md:top-10 px-5 drop-shadow-d-dark-shadow hover:drop-shadow-d-dark-shadow-hover md:px-10 xl:px-28 z-12 overflow-y-auto">
      {/* Container for the slide content */}
      <div className="flex flex-col    md:flex-row justify-between h-[100vh] md:h-[80vh] xl:h-[80vh] 2xl:h-[90vh]">
        {/* Left side: Sun Animation */}
        <div className="flex flex-1  mx-auto w-full items-center  justify-center h-[50vh] md:h-[80vh] xl:h-[80vh] 2xl:h-[90vh] bg-black rounded-tl-3xl md:rounded-bl-3xl rounded-tr-3xl md:rounded-tr-none">
          <SunAnimation4 /> {/* Render SunAnimation4 component */}
        </div>
        {/* Right side: Solution Image */}
        <div className="flex flex-1  w-full h-[50vh] md:h-[80vh] xl:h-[80vh] 2xl:h-[90vh] relative rounded-br-3xl md:rounded-tr-3xl md:rounded-br-3xl">
          <Image
            src={"/software/custome_software.jpg"} // Source of the solution image
            alt="alter" // Alt text for accessibility
            fill
            priority
            quality={100}
            className=" object-cover rounded-br-3xl md:rounded-tr-3xl md:rounded-br-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide1;
