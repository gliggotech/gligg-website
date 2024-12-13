import React from "react";

const OurService = ({ item }) => {
  const { title, description, tags, path } = item;

  return (
    <div className="sticky top-28 flex justify-center  items-start shadow-dark_shadow hover:shadow-dark_shadow_hover rounded-xl ">
      <div className="bg-black text-white w-full sm:w-[550px]  hover:bg-customGray hover:shadow-dark_shadow_hover rounded-xl hover:text-black  ">
        <img
          src={`${path}`}
          alt={title}
          className="w-full h-[300px] object-cover rounded-xl "
        />
        <div className="p-5">
          <div className="flex flex-wrap justify-center gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="p-2 bg-customGreen shadow-dark_shadow_hover   rounded-xl text-center text-black"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="p-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">
              {title}
            </h1>
            <p className="text-base sm:text-lg text-center">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
