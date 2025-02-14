"use client";
import about from "@/public/images/bg-search.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

const BannerTop = () => {
  return (
    <>
      <motion.div
        className="relative h-[800px] w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src={about} alt="about" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute -bottom-10 left-0 right-0">
          <motion.div
            className="flex space-x-8 bg-[#19519F] pt-5 text-white"
            style={{
              clipPath: "polygon(0 0, 100% 0%, 100% 60%, 0% 100%)",
            }}
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="container mx-auto flex items-center gap-5">
              <span className="rounded-t-xl bg-white px-5 py-5 font-bold text-[#19519F]">
                DGN Logistics
              </span>
              <span>Sứ Mệnh</span>
              <span>Tầm Nhìn</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default BannerTop;
