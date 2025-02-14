"use client";
import email from "@/public/images/header/email.png";
import phone from "@/public/images/header/hotline.png";
import logo from "@/public/images/header/logo-white.png";
import pr from "@/public/images/header/pr.png";
import fb from "@/public/images/header/social.png";
import tw from "@/public/images/header/tw.png";
import yt from "@/public/images/header/yt.png";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdLocalPhone } from "react-icons/md";
const Footer = () => {
  return (
    <section className="sm:pt-16 lg:pt-24">
      <div className="mx-auto px-[8%]">
        <div className="grid grid-cols-3 items-center gap-5">
          <Image
            className="hidden w-[350px] rounded-md lg:block"
            src={logo}
            alt="Logo"
            width={300}
            height={300}
          />

          <div>
            <p>ĐĂNG KÝ NHẬN BẢN TIN TỪ DGN LOGISTICS</p>
            <p>Giữ cập nhật về chính sách, thông tin mới nhất.</p>
          </div>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Nhập email của bạn vào đây..."
              className=" w-[250px] rounded-l-full border-[1px] border-black  px-4 py-2 focus:border-red-500 focus:outline-none"
            />
            <button className="rounded-r-full border-[1px] border-l-0 border-black bg-[#FF1F1F]  px-6 py-2 text-white hover:bg-red-600">
              ĐĂNG KÝ
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:gap-x-12 lg:gap-y-12">
          <div className="w-full lg:flex lg:flex-col lg:items-center">
            <div className="flex flex-col items-center justify-center lg:hidden lg:flex-row">
              <Image
                className="mb-2 w-[350px] rounded-md"
                src={logo}
                alt="Logo"
                width={300}
                height={300}
              />

              <div>
                <p
                  className=" font-semibo
                ld text-center text-[20px] text-dark"
                >
                  Trung tâm Dịch vụ Bưu chính{" "}
                </p>
                <p className=" text-center text-[16px] font-semibold text-dark">
                  Công ty Cổ Phần Tập Đoàn Diginext
                </p>
                <p className="mb-2 mt-2 text-center font-bold text-dark">
                  Mã số thuế: 0108173696
                </p>

                <p className="mt-5 flex items-center gap-2 text-[16px] text-dark">
                  Trụ sở Hà Nội : Số 04 ngõ 102 Khúc Thừa Dụ, Phường Dịch Vọng,
                  Quận Cầu Giấy, Tp. Hà Nội
                </p>
                <p className="mt-5 flex items-center gap-2 text-[16px] text-dark">
                  Văn phòng HCM : The Prince Residence, 17-19-21 Nguyễn Văn
                  Trỗi, Phường 11, Q. Phú Nhuận
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-between text-dark lg:hidden">
              <div>
                <div className="flex justify-center gap-3">
                  <Image
                    src={email}
                    className="w-[30px]"
                    alt="Email icon"
                    width={30}
                    height={30}
                  />
                  <p className="text-center text-[20px] font-bold">Email</p>
                </div>
                <p className="mt-3 text-center text-[20px] font-bold">
                  cskh@dgpost.vn
                </p>
              </div>
              <div>
                <div className="flex justify-center gap-3">
                  <Image
                    src={phone}
                    className="w-[30px]"
                    alt="Phone icon"
                    width={30}
                    height={30}
                  />
                  <p className="text-center text-[20px] font-bold">Hotline</p>
                </div>
                <p className="mt-3 text-center text-[20px] font-bold">
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
              <li className=" w-full items-center gap-2 text-dark">
                <p className="text-[13px] font-normal">
                  GIẤY PHÉP KINH DOANH SỐ: 01021ABCD
                </p>
                <p className="text-[13px] font-normal">
                  Đăng ký lần đầu ngày 30 tháng 01 năm 2025. Thay đổi lần thứ:
                  2, ngày 15 tháng 02 năm 2025 Do Sở kế hoạch và đầu tư thành
                  phố Hà Nội cấp.
                </p>
              </li>
              <li className="flex w-full items-center gap-2 text-dark">
                <span className=" flex items-center gap-2">
                  <IoLocationSharp size={45} color="#000" />
                  <span className="text-[13px] font-normal">
                    {" "}
                    Số 04 ngõ 102 Khúc Thừa Dụ, Phường Dịch Vọng, Quận Cầu Giấy,
                    Tp. Hà Nội
                  </span>
                </span>{" "}
              </li>
              <li className="flex items-center gap-2 text-dark">
                <MdLocalPhone size={30} color="#000" />
                <span className="text-[13px] font-normal">1900.4333 </span>
              </li>
              <li className="flex items-center gap-2 text-dark ">
                <MdEmail size={28} color="#000" />
                <span className="text-[13px] font-normal">cskh@dgpost.vn</span>
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
              <li className="flex items-center gap-2 text-dark">
                <Link
                  href="/gioi-thieu-chung"
                  className="flex items-center gap-2"
                >
                  <IoIosArrowForward size={20} color="#000" />
                  Giới thiệu chung
                </Link>
              </li>

              <li className="flex items-center gap-2 text-dark">
                <Link
                  href="/ho-so-nang-luc"
                  className="flex items-center gap-2"
                >
                  <IoIosArrowForward size={20} color="#000" />
                  Hồ sơ năng lực
                </Link>
              </li>

              <li className="flex items-center gap-2 text-dark">
                <Link
                  href="/tam-nhin-xu-menh"
                  className="flex items-center gap-2"
                >
                  <IoIosArrowForward size={20} color="#000" />
                  Tầm nhìn xứ mệnh
                </Link>
              </li>

              <li className="flex items-center gap-2 text-dark">
                <Link
                  href="/chinh-sach-bao-mat"
                  className="flex items-center gap-2"
                >
                  <IoIosArrowForward size={20} color="#000" />
                  Chính sách bảo mật
                </Link>
              </li>

              <li className="flex items-center gap-2 text-dark">
                <Link href="/lien-he" className="flex items-center gap-2">
                  <IoIosArrowForward size={20} color="#000" />
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-8 lg:mt-0">
            <p className="text-lg font-semibold text-dark">Dịch vụ</p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-2 text-dark">
                <Link
                  href="/dich-vu-dgpost"
                  className="flex items-center gap-2"
                >
                  <IoIosArrowForward size={20} color="#000" /> Dịch vụ DGPost
                </Link>
              </li>

              <li className="flex items-center gap-2 text-dark">
                <Link
                  href="/dich-vu-kho-van"
                  className="flex items-center gap-2"
                >
                  <IoIosArrowForward size={20} color="#000" /> Dịch vụ kho vận
                </Link>
              </li>

              <li className="flex items-center gap-2 text-dark">
                <Link
                  href="/dich-vu-van-tai-noi-tinh"
                  className="flex items-center gap-2"
                >
                  <IoIosArrowForward size={20} color="#000" /> Dịch vụ vận tải
                  nội tỉnh
                </Link>
              </li>

              <li className="flex items-center gap-2 text-dark">
                <Link
                  href="/dich-vu-van-tai-lien-tinh"
                  className="flex items-center gap-2"
                >
                  <IoIosArrowForward size={20} color="#000" /> Dịch vụ vận tải
                  liên tỉnh
                </Link>
              </li>

              <li className="flex items-center gap-2 text-dark">
                <Link
                  href="/dich-vu-xu-ly-fulfillment"
                  className="flex items-center gap-2"
                >
                  <IoIosArrowForward size={20} color="#000" /> Dịch vụ xử lý
                  fulfillment
                </Link>
              </li>

              <li className="flex items-center gap-2 text-dark">
                <Link
                  href="/dich-vu-quan-ly-chuoi-cung-ung"
                  className="flex items-center gap-2"
                >
                  <IoIosArrowForward size={20} color="#000" /> Dịch vụ quản lý
                  chuỗi cung ứng
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-8 lg:mt-0">
            <p className="text-lg font-semibold text-dark">Tin tức</p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-2 text-dark">
                <Link
                  href="/tin-tuc/tin-tuc-doanh-nghiep"
                  className="flex items-center gap-2"
                >
                  <IoIosArrowForward size={20} color="#000" /> Tin tức doanh
                  nghiệp
                </Link>
              </li>

              <li className="flex items-center gap-2 text-dark">
                <Link
                  href="/tin-tuc/tin-tuc-thi-truong"
                  className="flex items-center gap-2"
                >
                  <IoIosArrowForward size={20} color="#000" /> Tin tức thị
                  trường
                </Link>
              </li>

              <li className="flex items-center gap-2 text-dark">
                <Link href="/tuyen-dung" className="flex items-center gap-2">
                  <IoIosArrowForward size={20} color="#000" /> Tuyển dụng
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
      <div className="mt-2 flex h-[100px]  items-center justify-between rounded-tl-[50px] rounded-tr-[50px] bg-[#1868D1] px-[8%] lg:mt-10">
        {" "}
        <p
          className="lg:text-md text-center text-[12px] 
             font-bold text-white lg:mt-0 lg:text-[18px]"
        >
          © Copyright 2025 by DGNlogistics
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://www.facebook.com/dgpostvn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={fb} alt="" />
          </a>
          <a
            href="https://x.com/DGPost_VN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={tw} alt="" />
          </a>

          <a
            href="https://www.pinterest.com/dgpostvn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={pr} alt="" />
          </a>
          <a
            href="https://www.youtube.com/@DGPostVietNam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={yt} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
