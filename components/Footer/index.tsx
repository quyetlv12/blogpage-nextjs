"use client";
import moment from "moment";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import email from "@/public/images/header/email.png";
import phone from "@/public/images/header/hotline.png";
import logo from "@/public/images/header/logo-white.png";
import { IoLocationSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Footer = () => { 
  return (
    <section className="sm:pt-16 lg:pt-24">
      <div className="mx-auto px-[8%]">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:gap-y-12 lg:gap-x-12">
          <div className="lg:flex lg:flex-col lg:items-center w-full">
            <Image
              className="w-[200px] hidden rounded-md lg:block"
              src={logo}
              alt="Logo"
              width={200}
              height={200}
            />

            <div className="flex lg:hidden flex-col lg:flex-row justify-center items-center">
              <Image
                className="w-[200px] rounded-md mb-2"
                src={logo}
                alt="Logo"
                width={200}
                height={200}
              />

              <div>
                <p
                  className=" font-semibo
                ld text-dark text-[20px] text-center"
                >
                  Trung tâm Dịch vụ Bưu chính{" "}
                </p>
                <p className=" font-semibold text-dark text-[16px] text-center">
                  Công ty Cổ Phần Tập Đoàn Diginext
                </p>
                <p className="text-dark text-center mt-2 font-bold mb-2">
                  Mã số thuế: 0108173696
                </p>

                <p className="text-dark gap-2 flex items-center mt-5 text-[16px]">
                  Trụ sở Hà Nội : Số 04 ngõ 102 Khúc Thừa Dụ, Phường Dịch Vọng,
                  Quận Cầu Giấy, Tp. Hà Nội
                </p>
                <p className="text-dark gap-2 flex items-center mt-5 text-[16px]">
                  Văn phòng HCM : The Prince Residence, 17-19-21 Nguyễn Văn
                  Trỗi, Phường 11, Q. Phú Nhuận
                </p>
              </div>
            </div>

            <div className="flex justify-between text-dark lg:hidden mt-8">
              <div>
                <div className="flex justify-center gap-3">
                  <Image src={email} className="w-[30px]" alt="Email icon" width={30} height={30} />
                  <p className="font-bold text-[20px] text-center">Email</p>
                </div>
                <p className="font-bold text-[20px] mt-3 text-center">
                  cskh@dgpost.vn
                </p>
              </div>
              <div>
                <div className="flex justify-center gap-3">
                  <Image src={phone} className="w-[30px]" alt="Phone icon" width={30} height={30} />
                  <p className="font-bold text-[20px] text-center">Hotline</p>
                </div>
                <p className="font-bold text-[20px] mt-3 text-center">
                  1900.4333
                </p>
              </div>
            </div>
            {/* <p className="text-lg font-semibold text-dark mt-5">
              Thông tin công ty
            </p> */}
            {/* <ul className="mt-5 lg:mt-8  space-y-4">
              <li>
                <Link
                  href="/ve-chung-toi"
                  className="text-dark flex items-center gap-2"
                >
                  <IoIosArrowForward size={20} color="#000" />
                  Thông tin công ty
                </Link>
              </li>
              <li className="text-dark flex items-center gap-2">
                <Link
                  href="/ve-chung-toi"
                  className="text-dark flex items-center gap-2"
                >
                  <IoIosArrowForward size={20} color="#000" />
                  Hồ sơ công ty
                </Link>
              </li>
              <li className="text-dark flex items-center gap-2">
                <Link
                  href="/tin-tuc"
                  className="text-dark flex items-center gap-2"
                >
                  <IoIosArrowForward size={20} color="#000" />
                  Tin tức và Blog
                </Link>
              </li>
            </ul> */}
            <ul className="mt-8 space-y-4">
              {/* <li className="text-dark flex items-center gap-2 ">
                <IoIosArrowForward size={20} color="#000" />
                <span className=" font-bold"> Mã số thuế :</span>
                0108173696
              </li> */}
              <li className="text-dark gap-2 w-full flex items-center">
                <span className=" flex items-center gap-2">
                  <IoLocationSharp size={70} color="#000" />
                  Số 04 ngõ 102 Khúc Thừa Dụ, Phường Dịch Vọng, Quận Cầu Giấy,
                  Tp. Hà Nội
                </span>{" "}
              </li>
              <li className="text-dark flex items-center gap-2">
                <MdLocalPhone size={30} color="#000" />
                1900.4333              </li>
              <li className="text-dark flex items-center gap-2 ">
                <MdEmail size={28} color="#000" />
                cskh@dgpost.vn
              </li>
            </ul>
            {/* <div className="mt-10">
              <span
                className="
            font-bold text-dark text-lg hidden lg:block"
              >
                Tổng đài hỗ trợ : 1900.4333
              </span>
            </div> */}
          </div>

          <div>
            <p className="text-lg font-semibold text-dark">Về DGN</p>
            <ul className="mt-8 space-y-4">
              <a
                href="http://api.diginextgroup.vn/public/api/images/quy_dinh_khieu_nai.pdf"
                target="_blank"
              >
                <li>
                  <Link
                    href="/tin-tuc/chinh-sach-boi-thuong"
                    className="text-dark flex items-center gap-2"
                  >
                    <IoIosArrowForward size={20} color="#000" />
                    Quy định bồi thường
                  </Link>
                </li>
              </a>

              <li className="text-dark flex items-center gap-2">
                <a
                  // href="http://api.diginextgroup.vn/public/api/images/quy_dinh_khieu_nai.pdf"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  {" "}
                  <IoIosArrowForward size={20} color="#000" />
                  Quy định về khiếu nại
                </a>
              </li>

              <li className="text-dark flex items-center gap-2">
                <Link
                  href="tin-tuc/quy-dinh-ve-vat-cam-gui-va-gui-co-dieu-kien"
                  className="flex items-center gap-2"
                >
                  <IoIosArrowForward size={20} color="#000" />
                  Quy định về vật cấm gửi và gửi có điều kiện
                </Link>
              </li>
              <li className="text-dark flex items-center gap-2">
                <a
                  // href="http://api.diginextgroup.vn/public/api/images/chinh-sach-bao-mat.pdf"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  {" "}
                  <IoIosArrowForward size={20} color="#000" />
                  Chính sách bảo mật
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-8 lg:mt-0">
            <p className="text-lg font-semibold text-dark">Dịch vụ</p>
            <ul className="mt-8 space-y-4">
              <li className="text-dark flex items-center gap-2">
                <Link
                  href="/tin-tuc/huong-dan-dong-goi"
                  className="flex items-center gap-2"
                >
                  <IoIosArrowForward size={20} color="#000" /> Hướng dẫn đóng
                  gói
                </Link>
              </li>

              <li className="text-dark flex items-center gap-2">
                <Link
                  href="/tin-tuc/huong-dan-gui-buu-pham"
                  className="flex items-center gap-2"
                >
                  <IoIosArrowForward size={20} color="#000" /> Hướng dẫn gửi bưu
                  phẩm
                </Link>{" "}
              </li>
              <li className="text-dark flex items-center gap-2">
                <Link
                  href="/tin-tuc/huong-dan-nhan-biet-hang-hoa-nguy-hiem"
                  className="flex items-center gap-2"
                >
                  <IoIosArrowForward size={20} color="#000" /> Hướng dẫn nhận
                  biết hàng hóa nguy hiểm
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-8 lg:mt-0">
            <p className="text-lg font-semibold text-dark">Tin tức</p>
            <ul className="mt-8 space-y-4">
              <li className="text-dark flex items-center gap-2">
                <Link
                  href="/tin-tuc/huong-dan-dong-goi"
                  className="flex items-center gap-2"
                >
                  <IoIosArrowForward size={20} color="#000" /> Hướng dẫn đóng
                  gói
                </Link>
              </li>

              <li className="text-dark flex items-center gap-2">
                <Link
                  href="/tin-tuc/huong-dan-gui-buu-pham"
                  className="flex items-center gap-2"
                >
                  <IoIosArrowForward size={20} color="#000" /> Hướng dẫn gửi bưu
                  phẩm
                </Link>{" "}
              </li>
              <li className="text-dark flex items-center gap-2">
                <Link
                  href="/tin-tuc/huong-dan-nhan-biet-hang-hoa-nguy-hiem"
                  className="flex items-center gap-2"
                >
                  <IoIosArrowForward size={20} color="#000" /> Hướng dẫn nhận
                  biết hàng hóa nguy hiểm
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="hidden lg:block">
            <p className="text-lg font-semibold text-dark text-center">
              Trung tâm Dịch vụ Bưu chính
            </p>
            <p className="text-lg font-semibold text-dark text-center">
              Công ty Cổ phần Tập đoàn Diginext
            </p>
            <ul className="mt-8 space-y-4">
              <li className="text-dark flex items-center gap-2 ">
                <IoIosArrowForward size={20} color="#000" />
                <span className=" font-bold"> Mã số thuế :</span>
                0108173696
              </li>
              <li className="text-dark gap-2 w-full flex items-center">
                <span className=" font-bold flex items-center gap-2">
                  <IoIosArrowForward size={40} color="#000" /> Trụ sở Hà Nội :
                  Số 04 ngõ 102 Khúc Thừa Dụ, Phường Dịch Vọng, Quận Cầu Giấy,
                  Tp. Hà Nội
                </span>{" "}
              </li>
              <li className="text-dark flex items-center gap-2">
                <IoIosArrowForward size={20} color="#000" />
                <span className=" font-bold">Hotline :</span> 1900.4333
              </li>
              <li className="text-dark gap-2 flex items-center">
                <span className=" font-bold flex gap-2">
                  <IoIosArrowForward size={40} color="#000" /> Văn phòng HCM :
                  The Prince Residence, 17-19-21 Nguyễn Văn Trỗi, Phường 11, Q.
                  Phú Nhuận
                </span>{" "}
              </li>
              <li className="text-dark flex items-center gap-2">
                <IoIosArrowForward size={20} color="#000" />
                <span className=" font-bold">Hotline :</span> 1900.4333
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      {/* <ConnectWith />
      <DownloadApp /> */}
      <div className="mt-2 lg:mt-10 bg-blue-500  rounded-tr-[50px] flex items-center px-10 rounded-tl-[50px] h-[100px]">
        {" "}
        <p
          className="text-[12px] lg:text-[18px] lg:text-md 
             lg:mt-0 font-bold text-center text-white"
        >
          © Bản quyền thuộc về {moment().format("YYYY")}, Công ty Cổ Phần Tập
          Đoàn Diginext
        </p>
      </div>
    </section>
  );
};

export default Footer;
