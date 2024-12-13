import Common_Industry_Template from "@/components/industries components/Common_Industry_Template";
import { industries_const, webInfo } from "@/constants/constvalues";
import NotFound from "../not-found";

export async function generateMetadata({ params }) {
  const { slug_url } = (await params) || {};
  const blog = industries_const.filter((industry) => {
    return industry.slug == slug_url;
  });
  if (blog.length == 0) {
    return {
      title: "404 - Page Not Found",
      description: "Page not found",
      openGraph: {
        title: "404 - Page Not Found",
        description: "Page not found",
        type: "website",
        locale: "en_US",
        url: `${process.env.NEXT_VERCEL_URL}/404`,
        site_name: `${webInfo.company_name}`,
      },
    };
}
   return {
      title: blog[0].title,
      description: blog[0].description,
        openGraph: {
          title: blog[0].title,
          description: blog[0].description,
          type: "website",
          locale: "en_US",
          url: `${process.env.NEXT_VERCEL_URL}/${blog[0].lug_url}`,
          site_name: `${webInfo.company_name}`,
        },
    };

}
export default async function IndustriesPage({params}) {

    const {slug_url}=await params ||{};
    const blog=industries_const.filter((industry)=>{return industry.slug==slug_url})
    if(blog.length==0){return(<div>
        <NotFound/>
    </div>)}
 
    return (
        <div>
            <Common_Industry_Template blog={blog[0]} />
        </div>
    );
}