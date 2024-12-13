import EachCareer from "@/components/careers components/EachCareer";
import { careers, webInfo } from "@/constants/constvalues";
export async function generateMetadata({ params }) {
  const { slug } = (await params) || {};
  const job = careers.filter((career) => {
    return career.slug_url == slug;
  });

  return {
    title: job[0].title,
    description: job[0].description,
      openGraph: {
        title: job[0].title,
        description: job[0].description,
        type: "website",
        locale: "en_US",
        url: `${process.env.NEXT_VERCEL_URL}/careers/${job[0].slug_url}`,
        site_name: `${webInfo.company_name}`,
      },
  };
}

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
