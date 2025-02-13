import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import About from "@/components/home/about";
import News from "@/components/home/news";
import Proccess from "@/components/home/proccess";
import Service from "@/components/home/service";
import Support from "@/components/home/support";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DGN Logistics",
  description:
    "DGN Logistics là công ty vận tải hàng hóa chuyên nghiệp, cung cấp dịch vụ vận chuyển hàng hóa bằng đường bộ, đường biển và đường hàng không.",
};

export default function Home() {
  return (
    <>    
      <ScrollUp />
      <Hero />
      <Service />
      <Support />
      <About />
      <News />
      <Proccess />
    </>
  );
}
