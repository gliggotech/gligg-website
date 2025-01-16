import { Poppins, Questrial, Roboto } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/navbar component/Navbar";
import Footer from "@/components/footer component/Footer";
import GoToTop from "@/components/Go To Top component/GoToTop";
import { webInfo } from "@/constants/constvalues";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const questrial = Questrial({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-questrial",
});

export const metadata = {
  metadataBase: new URL(`${process.env.NEXT_VERCEL_URL}`),
  // title: `${webInfo.company_name}`,
  title: {
    default: `${webInfo.company_name}`,
    template: `%s | ${webInfo.company_name}`,
    keywords: [
      `${webInfo.company_name}`,
      "gliggo technology",
      "gliggo technology home page",
      "gliggo technologies india pvt ltd",
      "gliggo anna nagar",
      "gliggo",
    ],
  },
  description:
    "Taking Your Business to New Heights. Gliggo Technologies India Private Limited offers top-notch IT solutions including BPO, Software Development, and Cloud-based Services.",
  openGraph: {
    title: `${webInfo.company_name}`,
    description:
      "Taking Your Business to New Heights. Gliggo Technologies India Private Limited offers top-notch IT solutions including BPO, Software Development, and Cloud-based Services.",
    type: "website",
    locale: "en_US",
    url: `${process.env.NEXT_VERCEL_URL}`,
    site_name: `${webInfo.company_name}`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable} ${questrial.variable} antialiased`}
      >
        <Navbar />
        <div className="bg-white pt-20">
          {children}
          <GoToTop />
        </div>

        <Footer />
      </body>
    </html>
  );
}
