"use client";
import bgSection from "@/public/images/service/bgsection.png";
import truck from "@/public/images/service/image1truck.png";
import bottomFixedBg from "@/public/images/service/khoibottom.png";
import topFixedBg from "@/public/images/service/khoitop.png";
import service1 from "@/public/images/service/service1.png";
import service2 from "@/public/images/service/service2.png";
import service3 from "@/public/images/service/service3.png";
import service4 from "@/public/images/service/service4.png";
import truckimg from "@/public/images/service/truck.png";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { services } from "./config";

const Service = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <section
        className="relative bg-cover bg-center bg-no-repeat pt-10"
        style={{ backgroundImage: `url(${bgSection.src})` }}
      >
        <div className="absolute left-0 top-0 h-full w-full select-none">
          <Image
            src={topFixedBg}
            alt="DGNlogitics"
            className="w-full select-none"
          />
        </div>
        <div className="container mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                image: service4,
                title: "Kho vận & Phân phối",
                description:
                  "Dịch vụ kho bãi và phân phối hàng hóa chuyên nghiệp",
              },
              {
                image: service1,
                title: "Vận tải Đường biển",
                description:
                  "Dịch vụ vận chuyển hàng hóa bằng đường biển an toàn và hiệu quả",
              },
              {
                image: service2,
                title: "Vận tải Đường bộ",
                description:
                  "Vận chuyển hàng hóa bằng đường bộ với mạng lưới rộng khắp",
              },
              {
                image: service3,
                title: "Vận tải Hàng không",
                description:
                  "Dịch vụ vận chuyển hàng hóa bằng đường hàng không nhanh chóng",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="cursor-pointer rounded-[100px] bg-none transition-all duration-300 hover:scale-105 dark:bg-gray-dark"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  className="mb-6 h-48 w-full rounded-[30px] object-cover transition-transform hover:scale-105"
                />
                <h3 className="mb-4 text-xl font-bold text-black transition-colors hover:text-primary dark:text-white dark:hover:text-primary">
                  {service.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-10">
            <h1 className=" text-4xl font-bold text-[#19519F]">
              Introduction DGN
            </h1>
            <p className="mt-5 max-w-[900px]">
              DGN Logistics là một công ty trực Thuộc Tập đoàn Công Nghệ Bưu
              Chính Viễn Thông DIGINEXT.  DGN. Logistics khai thác thị trường
              Việt Nam và nhu cầu ngày càng tăng về các giải pháp logistics tích
              hợp các giải pháp công nghệ về vận chuyển
            </p>
            <p className="mt-5  max-w-[900px]">
              DGN Logistics kết hợp chuyên môn và kinh nghiệm đã tích lũy qua
              nhiều năm trong ngành Logistics  để cung cấp các giải pháp công
              nghệ tích hợp và giá trị chiến lược cho khách hàng của DGN.
            </p>
            <p className="mt-5  max-w-[900px]">
              {" "}
              DGN Logistics là một trong những công ty dẫn đầu thị trường về
              Dịch vụ vận chuyển Tích hợp công nghệ hiện đại, cung cấp các dịch
              vụ chất lượng cao để đáp ứng nhu cầu hậu cần phức tạp của khách
              hàng nhằm phát triển doanh nghiệp của bạn.
            </p>
            {/* <div className="mt-10 flex">
              <button className="flex items-center gap-3 rounded-full bg-[#19519F] px-8 py-3 text-white transition-all duration-300 hover:bg-[#0d2d5c] hover:shadow-lg">
                <span> XEM THÊM</span> <FaArrowRight size={16} />
              </button>
            </div> */}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Image src={truck} alt="bgSection" className="w-full" />
        </motion.div>
        <motion.div
          className="absolute -bottom-[120px] right-0 z-10 select-none"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Image
            src={truckimg}
            alt="DGNlogitics"
            className="w-[500px] select-none"
          />
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full select-none">
          <Image
            src={bottomFixedBg}
            alt="DGNlogitics"
            className="w-full select-none"
          />
        </div>
      </section>
      {/* CÁC DỊCH VỤ  */}

      <div className="container mt-28">
        <div>
          <h1 className="text-center text-4xl font-bold text-[#19519F]">
            DỊCH VỤ DGN
          </h1>
          <h3 className="text-center text-gray-500">
            The MONA is a big BU of Indo-Trans Logistics Corporation and ITL{" "}
          </h3>
          <h3 className="text-center text-gray-500">
            Logistics to tap into Vietnam’s fast growing market
          </h3>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105">
                <Image src={service.image} alt={service.title} />
                <h3 className="absolute bottom-0 left-0 w-full bg-[#19519F] px-4 py-5 font-bold text-white">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Service;
