import AboutSectionOne from "@/components/About/AboutSectionOne";
import BannerTop from "@/components/About/bannerTop";
import Mission from "@/components/About/mission";
import Parameter from "@/components/About/parameter";
import Prize from "@/components/About/prize";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: "Giới thiệu về DGN Logistics",
};

const AboutPage = () => {
  return (
    <>
      <BannerTop />
      <AboutSectionOne />
      <Parameter />
      <Mission />
      <Prize />
    </>
  );
};

export default AboutPage;
