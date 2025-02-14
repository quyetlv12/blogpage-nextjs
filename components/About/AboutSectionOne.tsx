"use client";
import about1 from "@/public/images/about/about1.png";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      id="about"
      className="pt-16 md:pt-20 lg:pt-28"
    >
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.6 }}
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <h1 className="text-2xl font-semibold text-[#595959]">
                  Giới Thiệu Về DGN
                </h1>
                <p className="mt-5">
                  Công ty TNHH DGNLOGISTICS Thuộc Tập đoàn Công Nghệ Bưu Chính
                  Viễn Thông DIGINEXT Cung cấp đầy đủ và toàn diện các giải pháp
                  tốt nhất cho khách hàng.. Là công ty dịch vụ logistics chúng
                  tôi hiểu được những nhu cầu của khách hàng.
                </p>
                <p className="mt-5">
                Với nhiều năm kinh nghiệm giao nhận kho vận hàng đầu Việt nam, chúng tôi có thể tư vấn chi tiết cho khách hàng những giấy tờ cần chuẩn bị và đảm bảo đúng tiến độ, tiết kiệm chi phí cho mỗi lô hàng.
                DIGILOGISTICS phát huy ưu thế chủ động của mô hình mới và sự năng động của đội ngũ CBNV vừa có kinh nghiệm vừa có sức trẻ, liên tục phát triển có sự tăng trưởng cao đều đặn hàng năm cả về quy mô và phạm vi họat động, chất lượng dịch vụ
                </p>
              </motion.div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.8, delay: 0.8 }}
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src={about1}
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSectionOne;
