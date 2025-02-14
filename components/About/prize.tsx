"use client";
import prize from "@/public/images/about/prizeBg.png";
import cup from "@/public/images/about/prizeCup.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Video from "../Video";
import { partnerImage } from "./config";

const Prize = () => {
  return (
    <div
      className="mt-20 flex min-h-[700px] items-center justify-center bg-cover"
      style={{ backgroundImage: `url(${prize.src})` }}
    >
      <div className="container">
        <div className="grid grid-cols-2 items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-10 text-2xl text-[36px] font-bold text-[#282828]">
              Giải Thưởng DGN
            </h2>
            <div className="flex">
              <Image src={cup} alt="cup" />
              <div>
                <h2 className="text-[#595959] text-[24px]">STRONG NATIONAL BRAND OF VIETNAM</h2>
                <p  className="text-[#595959] text-[18px]">
                  THƯƠNG HIỆU MẠNH QUỐC GIA là chương trình xúc tiến thương mại
                  duy nhất ở cấp Chính phủ, nhằm phát triển thương hiệu mạnh của
                  doanh nghiệp Việt Nam. Đây là giải thưởng uy tín, được Chính
                  phủ, cộng đồng doanh nghiệp và người tiêu dùng ghi nhận, tôn
                  vinh các giá trị “Chất lượng - Đổi mới, Sáng tạo - Năng lực
                  tiên phong”.
                </p>
              </div>
            </div>
          </motion.div>
          <Video />
        </div>
        <div className="mt-10 bg-white">
          <div className="grid grid-cols-5 gap-4 p-4">
            {partnerImage.map((partner, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image src={partner.image} alt={`Partner ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prize;
