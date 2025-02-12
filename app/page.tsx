import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Service from "@/components/home/service";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DigiNext - Công ty công nghệ hàng đầu",
  description:
    "DigiNext cung cấp các giải pháp công nghệ toàn diện cho doanh nghiệp của bạn",
};

export default function Home() {
  return (
    <>    
      <ScrollUp />
      <Hero />
      {/* <Features /> */}
      <Service />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Contact />
    </>
  );
}
