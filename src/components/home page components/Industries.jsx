import { industries } from "@/constants/constvalues";
import Industry from "./Industry";

const Industries = () => {

  return (
    // Main container for the Industries section
    <div id="Service_Section">
      {/* Container for the Industries section */}
      <div className="bg-white w-full py-10 overflow-x-hidden">
        {/* Title for the Industries section */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-Questrial font-bold text-black ml-10">Industries</h1>
        {/* Grid layout for displaying industries */}
        <div className="grid grid-cols-1  md:grid-cols-2 justify-items-center xl:grid-cols-3 md:gap-x-10 gap-y-5 p-5">
          {/* Mapping over industries data and rendering Industry component for each industry */}
          {industries.map((industry) => (
            <Industry key={industry.id} industry={industry} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
