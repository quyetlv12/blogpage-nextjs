import bgService from "@/public/images/service/dichvu/bgFourCard.png";
import bannerTop from "@/public/images/service/dichvu/dichvukhovan.png";
import Image from "next/image";
import { fourCard } from "./config";
const Dichvukhovan = () => {
  return (
    <div className="relative">
      <Image
        src={bannerTop}
        alt="bannerTop"
        className="h-full w-full object-cover"
      />
      <div className="bg-cover h-[1100px] lg:h-[488px] py-10" style={{ backgroundImage: `url(${bgService.src})` }}>
        <div className="container">
          <h2 className="text-[20px] text-[#595959] font-bold">DGN LOGISTICS</h2>
          <h1 className="uppercase text-[32px] font-semibold text-[#595959]">Dịch vụ kho vận</h1>
        </div>
        <div>
          <div className="container mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {fourCard.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center rounded-lg p-4 md:p-6 w-full md:w-[282px] h-[200px] md:h-[258px]"
                style={{ backgroundColor: item.bgColor }}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  className="h-16 w-16 md:h-20 md:w-20 object-contain"
                />
                <h3 className="mt-3 md:mt-5 text-lg md:text-xl lg:text-[24px] font-semibold text-white text-center">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dichvukhovan;
