import Application_Form from "@/components/careers components/Application_Form";
import { careers, webInfo } from "@/constants/constvalues";
export async function generateMetadata({ searchParams }) {
    const {title} = await searchParams || {};
    const job= careers.filter((career) => {
        return career.slug_url == title;
    });
    return {
        title:`Application form - ${job[0].title}`,
        description: job[0].description,
        openGraph: {
            title: job[0].title,
            description: job[0].description,
            type: "website",
            locale: "en_US",
            url: `${process.env.NEXT_VERCEL_URL}/carrers/${job[0].slug_url}/application-form/${job[0].slug_url}`,
            site_name: `${webInfo.company_name}`,
        },
    };
}
export default async function ApplicationFormPage({searchParams}) {
    const {title} = await searchParams || {};
    const job= careers.filter((career) => {
        return career.slug_url == title;
    });

    return (
        <div>
            <Application_Form job={job[0]}/>
        </div>
    );
}