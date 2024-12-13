import Text_Animation from "../Animations/Text_Animation";
import Review from "../home page components/Review";
import OurService from "./OurService";
import WhyUs from "./WhyUs";





const Common_Industry_Template = ({ blog  }) => {


  return (
    <>
   
    <div className="relative bg-customGray "  >
     
      <div className="bg-black sm:py-10 py-5">
        <h1 className="text-center font-Roboto text-white text-4xl font-bold py-5">
          <Text_Animation str={blog.title} />
        </h1>

        <p className="font-Questrial text-white text-center max-w-4xl mx-auto text-[18px] py-5 px-3">
          {blog.description}
        </p>
      </div>

      <div className="shadow-service_dark_shadow bg-customGreen relative py-10 z-40 ">
        <h1 className="text-4xl px-5 font-Questrial text-black py-6">
          {blog.whytitle}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center gap-3 px-6 ">
          {blog.whyChoose.map((item, index) => (
            <div className="sticky top-10" key={index}>
              <WhyUs item={item} />
            </div>
          ))}
        </div>
      </div>

      <div className="shadow-dark_shadow bg-customGray py-10 relative z-40">
        <h1 className="text-4xl px-5 font-Questrial text-black py-6 ">
          {blog.service_title}
        </h1>

        <div className="grid grid-cols-1  xl:grid-cols-2  2xl:grid-cols-3 justify-items-center gap-3 px-6">
          {blog.services.map((item, index) => (
            <div className="sticky top-10" key={index}>
              <OurService item={item} />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black py-10 text-white">
        <h1 className="text-4xl px-5 font-Questrial  py-6 ">Testimonials</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-3 px-6  ">
          {blog.testimonials.map((item, index) => (
            <Review key={index} review={item} />
          ))}
        </div>
      </div>
    </div>

    </>
  );
};

export default Common_Industry_Template;
