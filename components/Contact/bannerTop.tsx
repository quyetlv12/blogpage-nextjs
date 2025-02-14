"use client"
import bgInfomation from "@/public/images/contact/bgInfomation.png";
import bannerTop from "@/public/images/contact/bgTop.png";
import formBg from '@/public/images/contact/formBg.png';
import truck from "@/public/images/contact/truck.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { BiHeadphone } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const BannerTop = () => {
  return (
    <div className="relative">
      <Image
        src={bannerTop}
        alt="bannerTop"
        className="h-full w-full object-cover"
      />
      <div
        className="flex h-[500px] items-center justify-center bg-[#e0e0e0] bg-cover"
        style={{
          backgroundImage: `url(${bgInfomation.src})`,
        }}
      >
        <div className="container">
          <div className=" flex items-center justify-center">
            <motion.div
              className="rounded-md bg-opacity-80 p-8"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-4 text-[36px] font-bold text-[#19519F]">
                Thông tin liên hệ
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <motion.div
                  className="flex flex-col items-center rounded-lg bg-white px-5 py-20 shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="mb-2 rounded-full bg-primary p-4">
                    <IoLocationSharp size={30} color="white" />
                  </div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-center">
                    Số 04, Ngõ 102 Khúc Thừa Dụ, P. Dịch Vọng,
                  </p>
                  <p>Cầu Giấy, TP. Hà Nội, Việt Nam</p>
                </motion.div>
                <motion.div
                  className="flex flex-col items-center rounded-lg bg-white px-5 py-20 shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="mb-2 rounded-full bg-primary p-4">
                    <BiHeadphone size={30} color="white" />
                  </div>
                  <h3 className="font-semibold">24/7 Support</h3>
                  <p className="text-center">(+84) 1900.4333</p>
                  <p className="text-center">(+84)24 688 688 68</p>
                </motion.div>
                <motion.div
                  className="flex flex-col items-center rounded-lg bg-white px-5 py-20 shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="mb-2 rounded-full bg-primary p-4">
                    <MdEmail size={30} color="white" />{" "}
                  </div>
                  <h3 className="font-semibold">Send Email</h3>
                  <p className="text-center">dgnlogistics@gmail.com</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="h-[700px] bg-cover" style={{
          backgroundImage: `url(${formBg.src})`,
        }}>
        <div className="container relative " >
          <Image
            src={truck}
            alt="mission"
            className="absolute left-0 top-20 z-0 hidden md:block"
          />
          <motion.div
            className="absolute right-32 top-20 !z-10 h-auto w-full rounded-2xl bg-white p-5 md:w-[580px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-[24px] font-bold text-[#19519F] md:text-[30px] mb-5">
              Booking & tracking
            </h1>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="First name"
                className="mt-1 block w-full h-[50px] rounded-md border-[#999999] border-[1px] px-4 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone number</label>
              <input
                type="number"
                placeholder="Phone number"
                className="mt-1 block w-full h-[50px] rounded-md border-[#999999] border-[1px] px-4 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="mt-1 block w-full h-[50px] rounded-md border-[#999999] border-[1px] px-4 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                placeholder="Note"
                className="mt-1 block w-full rounded-md border-[#999999] border-[1px] p-4 focus:border-indigo-500 focus:ring-indigo-500"
                rows={3}
              ></textarea>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Refresh
              </button>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border-[#999999] border-[1px] bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
          </motion.div>
        </div>
      </div>
      <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4359.493006754393!2d105.787558540673!3d21.029114903136325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x707d264481af6e5%3A0xecc2157de2685e14!2zVHJ1bmcgdMOibSBixrB1IGNow61uaCBER1BPU1Q!5e0!3m2!1svi!2s!4v1739518907530!5m2!1svi!2s"
          width="600"
          height="450"
          loading="lazy"
          className="mt-10 h-[700px] w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default BannerTop;
