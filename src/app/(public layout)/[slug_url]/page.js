import Common_Industry_Template from "@/components/industries components/Common_Industry_Template";
import { industries_const } from "@/constants/constvalues";
import NotFound from "../not-found";

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