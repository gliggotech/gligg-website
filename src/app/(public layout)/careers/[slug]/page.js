import EachCareer from "@/components/careers components/EachCareer";
import { careers } from "@/constants/constvalues";

export default async function CarrersDetailsPage({ params }) {
  const { slug } = (await params) || {};

  //Filter career data based on slug parameter and render the EachCareer component with the filtered data.

  const currentJob = careers.filter((career) => {
    return career.slug_url === slug;
  });

  return (
    <div>
      <EachCareer job={currentJob[0]} />
    </div>
  );
}
