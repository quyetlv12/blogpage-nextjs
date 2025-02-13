"use client";
import background from "@/public/images/about/bgCardAbout.png";
import { motion } from "framer-motion";
import * as _ from "lodash";
import Image from "next/image";
import { aboutListItems } from "./config";

const About = () => {
  return (
    <div className="mt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center"
      >
        <h1 className="text-center text-2xl md:text-4xl font-bold text-[#19519F]">
          DGN Logistics
        </h1>
      </motion.div>
      <div className="relative">
        <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 container z-20 px-4 md:px-0">
          {_.map(aboutListItems, (item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className="absolute -top-5 left-0 z-20 h-full w-full text-center"
                >
                  <span className="text-2xl text-[80px] md:text-[124px] font-normal text-[#595959]">
                    {item.number}
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover z-20"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="absolute left-0 top-4 md:top-8 z-20 flex w-full items-center justify-center"
                >
                  <p
                    className={`text-center text-base md:text-[18px] font-bold text-white ${item.titleClassName}`}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  className="absolute left-0 right-0 top-[20%] z-20 flex flex-col items-center justify-center"
                >
                  {_.map(item.content, (content, contentIndex) => (
                    <motion.p
                      key={contentIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.2 + contentIndex * 0.1 + 0.5,
                      }}
                      className="max-w-[250px] text-center text-sm md:text-base lg:text-[18px] font-bold text-[#595959] px-2 md:px-0"
                    >
                      {content}
                    </motion.p>
                  ))}
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                  className="absolute bottom-[15%] flex w-full justify-center"
                >
                  <Image
                    src={item.bottomImage}
                    alt={item.title}
                    className={`h-full w-[40px] md:w-[60px] object-cover ${item.bottomImageClassName}`}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* background */}
        <Image src={background} alt="background" className="w-full h-full -mt-96" />
      </div>
    </div>
  );
};

export default About;
