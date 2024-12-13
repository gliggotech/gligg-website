import Contact_Form from "@/components/contact us component/Contact_Form";

export const metadata={
    title:"Contact Us",
    description :"Get in touch with Gliggo Technologies for all your business process outsourcing, software development, and cloud solutions needs."
}
export default function ContactPage() {
    return (
        <div>
            <Contact_Form/>
        </div>
    );
}