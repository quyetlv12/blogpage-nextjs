import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "TRANG CHỦ",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "GIỚI THIỆU", 
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "DỊCH VỤ VẬN CHUYỂN",
    path: "/services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Chuyển phát Hoả tốc",
        path: "/express",
        newTab: false,
      },
      {
        id: 32,
        title: "Chuyển phát Nhanh",
        path: "/fast", 
        newTab: false,
      },
      {
        id: 33,
        title: "Chuyển phát Tiết kiệm",
        path: "/economy",
        newTab: false,
      },
      {
        id: 34,
        title: "Chuyển phát Quốc tế",
        path: "/international",
        newTab: false,
      },
      {
        id: 35,
        title: "Chuyển phát Đường bộ",
        path: "/ground",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "HƯỚNG DẪN THỦ TỤC",
    path: "/guide",
    newTab: false,
  },
  {
    id: 5,
    title: "TIN TỨC",
    path: "/news",
    newTab: false,
  },
  {
    id: 6,
    title: "LIÊN HỆ",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
