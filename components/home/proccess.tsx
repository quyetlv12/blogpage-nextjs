"use client";
import bg from "@/public/images/proccess/bg.png";
import lineWave from "@/public/images/proccess/linewave.png";
import { motion } from "framer-motion";
import _ from "lodash";
import Image from "next/image";
import { useEffect, useState } from "react";
import { processSteps } from "./config";

const Proccess = () => {
  const [quality, setQuality] = useState(0);
  const [satisfiedCustomers, setSatisfiedCustomers] = useState(0);
  const [partners, setPartners] = useState(0);
  const [employees, setEmployees] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuality((prev) => (prev < 100 ? prev + 1 : 100));
      setSatisfiedCustomers((prev) => (prev < 1368 ? prev + 10 : 1368));
      setPartners((prev) => (prev < 36 ? prev + 1 : 36));
      setEmployees((prev) => (prev < 1000 ? prev + 10 : 1000));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      <h1 className="text-center text-2xl font-bold text-[#19519F] md:text-4xl">
        LÝ DO KHÁCH HÀNG ĐÃ CHỌN DGN
      </h1>
      <div className="mt-8 flex w-full justify-center">
        <motion.div
          className="container flex w-full overflow-hidden rounded-[50px] bg-[#1868D1] py-3 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex-1 px-6 py-4 text-center ">
            <p className="text-2xl font-bold">{quality}%</p>
            <p className="text-[16px]">CHẤT LƯỢNG</p>
          </div>
          <div
            className="flex-1 border-l border-transparent px-6 py-4 text-center"
            style={{
              borderImage:
                "linear-gradient(to bottom, white, transparent) 2 100%",
            }}
          >
            <p className="text-2xl font-bold">{satisfiedCustomers}+</p>
            <p className="text-[16px]">KHÁCH HÀNG HÀI LÒNG</p>
          </div>
          <div
            className="flex-1 border-l border-white px-6 py-4 text-center "
            style={{
              borderImage:
                "linear-gradient(to bottom, white, transparent) 2 100%",
            }}
          >
            <p className="text-2xl font-bold">{partners}</p>
            <p className="text-[16px]">ĐỐI TÁC LỚN</p>
          </div>
          <div
            className="flex-1 border-l border-white px-6 py-4 text-center "
            style={{
              borderImage:
                "linear-gradient(to bottom, white, transparent) 2 100%",
            }}
          >
            <p className="text-2xl font-bold">{employees}</p>
            <p className="text-[16px] uppercase">Nhân viên</p>
          </div>
        </motion.div>
      </div>

      {/* QUY TRÌNH  */}

      <div
        className="relative mt-10 py-10 h-[400px] bg-cover bg-center bg-no-repeat before:absolute"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="absolute inset-0 z-0 bg-[#D9D9D9D9] opacity-[85%]"></div>
        <div className="container">
          <div className="relative">
            <h1 className="z-10 text-2xl font-bold text-[#D34419]">
              DGN LOGISTICS
            </h1>
            <h2 className="z-10 text-xl text-[#285E99]">
              Quy trình cung ứng dịch vụ
            </h2>
          </div>
          <div className="relative mt-10 flex w-full justify-between gap-4">
            <div className="absolute -top-5 left-0 z-10 h-full w-full">
              <Image src={lineWave} alt="line-wave" className="h-full w-full" />
            </div>
            {_.map(processSteps, (step) => (
              <motion.div
                key={step.id}
                className="z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: step.id * 0.2 }}
              >
                <Image src={step.image} alt={step.title} />
                <h3 className="mt-5 font-bold">{step.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proccess;
