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
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Dịch vụ DGPost",
        path: "/dich-vu-dgpost",
        newTab: false,
      },
      {
        id: 32,
        title: "Dịch vụ Kho vận",
        path: "/dich-vu-kho-van",
        newTab: false,
      },
      {
        id: 33,
        title: "Dịch vụ Vận tải Nội tỉnh",
        path: "/local-transport",
        newTab: false,
      },
      {
        id: 34,
        title: "Dịch vụ Vận tải Liên tỉnh",
        path: "/interprovincial-transport",
        newTab: false,
      },
      {
        id: 35,
        title: "Dịch vụ Xử lý Fulfillment",
        path: "/fulfillment",
        newTab: false,
      },
      {
        id: 36,
        title: "Dịch vụ Quản lý Chuỗi Cung ứng",
        path: "/supply-chain-management",
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
    path: "/blog",
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
