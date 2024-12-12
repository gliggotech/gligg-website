import Application_Form from "@/components/careers components/Application_Form";
import { careers } from "@/constants/constvalues";

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