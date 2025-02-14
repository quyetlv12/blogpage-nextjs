import second from "@/public/images/service/sixServices/1.png";
import third from "@/public/images/service/sixServices/2.png";
import fourth from "@/public/images/service/sixServices/3.png";
import fifth from "@/public/images/service/sixServices/4.png";
import sixth from "@/public/images/service/sixServices/5.png";
import seventh from "@/public/images/service/sixServices/6.png";

import card1 from "@/public/images/about/card1.png";
import card2 from "@/public/images/about/card2.png";
import card3 from "@/public/images/about/card3.png";

import bottomImage1 from "@/public/images/about/Group.png";
import bottomImage2 from "@/public/images/about/solution.png";
import bottomImage3 from "@/public/images/about/world.png";



import process1 from "@/public/images/proccess/proccess1.png";
import process2 from "@/public/images/proccess/proccess2.png";
import process3 from "@/public/images/proccess/proccess3.png";
import process4 from "@/public/images/proccess/proccess4.png";

export const services = [
  {
    id: 1,
    title: "Dịch vụ DGPOST",
    image: second,
    className : "polygon(0 20%, 100% 0, 100% 100%, 0% 100%)"
  },
  {
    id: 2,
    title: "Dịch vụ Kho Vận",
    image: third,
    className : "polygon(0 20%, 100% 0, 100% 100%, 0% 100%)"
  },
  {
    id: 3,
    title: "Vận tải Nội Tỉnh",
    image: fourth,
    className : "polygon(0 20%, 100% 0, 100% 100%, 0% 100%)"
  },
  {
    id: 4,
    title: "Vận tải Liên Tỉnh",
    image: fifth,
    className : "polygon(0 0, 100% 20%, 100% 100%, 0% 100%);"
  },
  {
    id: 5,
    title: "Dịch vụ xử lý FULFILLMENT",
    image: sixth,
    className : "polygon(0 1%, 100% 20%, 100% 100%, 0% 100%);"
  },
  {
    id: 6,
    title: "Quản lý chuỗi cung ứng",
    image: seventh,
    className : "polygon(0 1%, 100% 20%, 100% 100%, 0% 100%);"
  },
];

export const aboutListItems = [
  {
    id: 1,
    number: "01",
    title: `<span>Diện tích kho bãi</span>`,
    titleClassName: "mt-5",
    image: card1,
    content: [
      "Hơn 200.000 m2 diện tích kho trên toàn quốc",
      "Hơn 200 đầu xe vận chuyển",
    ],
    bottomImage: bottomImage1,
    bottomImageClassName: "ml-[20px]",
  },
  {
    id: 2,
    number: "02",
    title: `Tier 1 logistics <br /> provider`,
    image: card2,
    content: [
      "100% asset and workforce utilization",
      "Elimination of outsourced services",
      "Faster and more reliable service",
      "More sustainable and economical solutions",
    ],
    bottomImage: bottomImage2,
    bottomImageClassName: "ml-[20px]",
  },
  {
    id: 3,
    number: "03",
    title: `Environmentally friendly <br /> logistics solutions`,
    image: card3,
    content: [
      "Green freight Asia Label leaf level 3",
      "100% electric material handling equipment",
      "Solar panels on our warehouse",
    ],
    bottomImage: bottomImage3,
  },
];


export const processSteps = [
  {
    id: 1,
    title: "Gửi yêu cầu thông tin",
    image: process1, // Add the appropriate image path
  },
  {
    id: 2,
    title: "Xử lý thông tin",
    image: process2, // Add the appropriate image path
  },
  {
    id: 3,
    title: "Thống nhất quy trình",
    image: process3, // Add the appropriate image path
  },
  {
    id: 4,
    title: "Xác nhận hợp đồng",
    image: process4, // Add the appropriate image path
  },
];


