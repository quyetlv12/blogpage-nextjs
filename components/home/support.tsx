"use client";
import Bg from "@/public/images/support/bg.png";
import { motion } from "framer-motion";

const Support = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="container mt-10"
    >
      <div className="relative flex justify-between items-center h-[165px] px-10 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${Bg.src})`}}>
        <div className="absolute inset-0 bg-[#4385DB] opacity-50"></div>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10"
        >
          <h1 className="text-white text-[32px] font-bold">Nhận hỗ trợ & tư vấn</h1>
          <span className="text-white text-[16px]">Đặt lịch hẹn tư vấn và liên hệ hợp tác DGN logistics</span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative z-10"
        >
          <button className="bg-white text-[#1868D1] px-4 py-2 rounded-[20px] w-[300px] hover:bg-[#1868D1] hover:text-white transition-all duration-300">Liên hệ đội ngũ hỗ trợ</button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Support;
