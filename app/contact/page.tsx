
import BannerTop from "@/components/Contact/bannerTop";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên Hệ | DGN Logistics",
  description: "Liên Hệ DGN Logistics",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <BannerTop />
    </>
  );
};

export default ContactPage;
