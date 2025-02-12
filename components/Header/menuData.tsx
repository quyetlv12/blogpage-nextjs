import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Trang chủ",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Giới thiệu",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Dịch vụ",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Chuyển phát Hoả tốc",
        path: "/express",
        newTab: false,
      },
      {
        id: 42,
        title: "Chuyển phát Nhanh", 
        path: "/fast",
        newTab: false,
      },
      {
        id: 43,
        title: "Chuyển phát Tiết kiệm",
        path: "/economy",
        newTab: false,
      },
      {
        id: 44,
        title: "Chuyển phát Quốc tế",
        path: "/international",
        newTab: false,
      },
      {
        id: 45,
        title: "Chuyển phát Đường bộ",
        path: "/ground",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Quy định chung",
    path: "/about",
    newTab: false,
  },
  {
    id: 5,
    title: "Tin tức",
    path: "/blog",
    newTab: false,
  },
  {
    id: 6,
    title: "Vận đơn",
    path: "/contact",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Tạo vận đơn",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Tra cứu vận đơn",
        path: "/contact",
        newTab: false,
      },
    ],
  },
];
export default menuData;
