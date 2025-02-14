"use client";
import about2 from "@/public/images/about/about2.png";
import bgContainer from "@/public/images/about/bgprocess.png";
import container from "@/public/images/about/container.png";
import truck from "@/public/images/about/truck.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { transportData } from "./config";
const Parameter = () => {
  return (
    <div>
      <div className="relative">
        <div
          className="absolute -bottom-1 h-[90%] w-full bg-[#e3e3e3]"
          style={{
            clipPath: "polygon(0 19%, 100% 0, 100% 100%, 0% 100%)",
          }}
        ></div>
        <div className="container relative">
        <Image
              src={truck}
              alt="about"
              className="absolute -left-10 top-[30%] z-10 w-[700px] object-cover"
            />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Image src={about2} alt="about" className="w-full object-cover" />
          </motion.div>
          <motion.div
            className="absolute bottom-[5%] right-[5%] text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="mb-5 text-right text-[35px] font-semibold">
              Tại sao khách hàng chọn DGN
            </h2>
            <div className="flex space-x-8">
              {[
                { percentage: 100, color: "white" },
                { percentage: 100, color: "white" },
                { percentage: 70, color: "red" },
                { percentage: 100, color: "white" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div
                    className="relative flex h-48 w-48 items-center justify-center rounded-full border-4"
                    style={{ borderColor: item.color }}
                  >
                    <span className="text-xl font-bold">
                      {item.percentage}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="relative">
        <div
          className="absolute top-0 -z-10 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgContainer.src})`,
            clipPath: `polygon(0 0, 100% 0, 100% 80%, 0% 100%)`
          }}
        ></div>

        <div className="container z-10 !h-[1200px] ">
          <div className="grid grid-cols-2 items-center">
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              <Image src={container} alt="container" className="w-[600px]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h1 className="text-[30px] font-semibold text-[#595959]">
                Hàng hoá vận chuyển trong nước
              </h1>
              <p className="max-w-[520px] text-[#595959]">
                Hàng hóa sẽ luôn được đảm bảo 100% không vấn đề gì. Với kinh
                nghiệm nhiều năm trong nghành, DGN sẽ luôn đảm bảo chất lượng
                vận chuyển hàng hóa
              </p>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="container">
            <div className="flex w-full justify-between gap-20">
              {transportData.map((item, index) => (
                <motion.div
                  key={index}
                  className={`p-4 ${item.backgroundColor} flex h-[340px] w-full flex-col items-center justify-center rounded-lg`}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex justify-center">
                    <Image
                      src={item.icon}
                      alt="icon"
                      className="h-[100px] w-[100px]"
                    />
                  </div>
                  <h3 className="mt-5 text-[28px] font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[28px] text-white">{item.number}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parameter;
