import iconMission1 from "@/public/images/about/icon-mission1.png";
import iconMission2 from "@/public/images/about/icon-mission2.png";
import iconMission3 from "@/public/images/about/icon-mission3.png";
import truck2 from "@/public/images/about/truck2.png";
import Image from "next/image";
const Mission = () => {
  return (
    <div className="container mt-20 h-[500px]">
      <div className="relative">
        <Image
          src={truck2}
          alt="mission"
          className="absolute right-0 top-0 z-0 hidden md:block"
        />
        <div className="absolute left-0 top-0 !z-10 h-auto w-full md:w-[580px] rounded-2xl bg-[#285E99] p-5">
          <h1 className="text-[24px] md:text-[30px] font-bold text-white">DGN logistics</h1>
          <h2 className="mt-3 text-[18px] md:text-[20px] font-bold text-white">Tầm nhìn</h2>
          <p className="mt-3 text-[14px] md:text-[16px] text-white">
            DGN được thành lập với mục tiêu trở thành công ty dẫn đầu trong
            ngành vận tải trong khu vực.
          </p>

          <h2 className="mt-3 text-[18px] md:text-[20px] font-bold text-white">Mission</h2>
          <p className="mt-3 text-[14px] md:text-[16px] text-white">
            Cung cấp các dịch vụ tích hợp và công nghệ trong ngành vận tải, hàng
            không và hậu cần thương mại điện tử với sự tích hợp, tôn trọng và
            tin tưởng đối với khách hàng mà DGN đang phục vụ.
          </p>

          <h2 className="mt-3 text-[18px] md:text-[20px] font-bold text-white">
            Giá trị cốt lõi
          </h2>
          <p className="mt-3 text-[14px] md:text-[16px] text-white">Vị trí đứng đầu</p>
          <p className="mt-3 text-[14px] md:text-[16px] text-white">Tích hợp công nghệ</p>
          <p className="mt-3 text-[14px] md:text-[16px] text-white">
            Niềm tin và Nghĩa vụ với khách hàng
          </p>
          <p className="mt-3 text-[14px] md:text-[16px] text-white">
            Tạo ra giá trị với cộng đồng
          </p>

          <div className="absolute bottom-0 right-0 md:-right-[254px] z-20 flex flex-col space-y-4 p-5">
            <div className="flex items-center space-x-4 rounded-r-[50px] bg-[#FF1F1F] p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full ">
                <Image
                  src={iconMission1}
                  alt="Map Icon"
                  className="h-10 w-10"
                />
              </div>
              <div>
                <p className="text-lg font-bold text-white">200,000+</p>
                <p className="text-sm text-white">Diện tích kho vận</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 rounded-r-[50px] bg-[#FF1F1F] p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full ">
                <Image
                  src={iconMission2}
                  alt="Warehouse Icon"
                  className="h-10 w-10"
                />
              </div>
              <div>
                <p className="text-lg font-bold text-white">14</p>
                <p className="text-sm text-white">Chi nhánh vận hành</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 rounded-r-[50px] bg-[#FF1F1F] p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full ">
                <Image
                  src={iconMission3}
                  alt="Truck Icon"
                  className="h-10 w-10"
                />
              </div>
              <div>
                <p className="text-lg font-bold text-white">250</p>
                <p className="text-sm text-white">Các loại xe vận hành</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
