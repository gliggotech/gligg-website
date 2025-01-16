import Hero from "@/components/home page components/Hero";
import Industries from "@/components/home page components/Industries";
import Slide from "@/components/home page components/slides/Slide";
import StoryOfGliggo from "@/components/home page components/StoryOfGliggo";

// Home Page component, which includes all the components mentioned above.
export const metadata = {
  title: "Home",
  description:
    "Gliggo Technologies is a software development company that provides business process outsourcing, software development, and cloud solutions.",
  keywords: [
    "Gliggo",
    "gliggo technology",
    "gliggo technology home page",
    "gliggo technologies india pvt ltd",
    "gliggo anna nagar",
    "gliggo",
  ],
};
export default function HomePage() {
  return (
    <>
      <Hero />
      <StoryOfGliggo />
      <Industries />
      <Slide />
    </>
  );
}
