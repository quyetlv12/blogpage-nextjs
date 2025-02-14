import bgService from "@/public/images/service/dichvu/bgFourCard.png";
import bannerTop from "@/public/images/service/dichvu/dichvukhovan.png";
import Image from "next/image";
const Dichvukhovan = () => {
  return (
    <div className="relative">
      <Image
        src={bannerTop}
        alt="bannerTop"
        className="h-full w-full object-cover"
      />
      <div className="bg-cover h-[488px] py-10" style={{ backgroundImage: `url(${bgService.src})` }}>
        <div className="container">
          <h2>DGN LOGISTICS</h2>
          <h1 className="uppercase">Dịch vụ kho vận</h1>
        </div>
      </div>
    </div>
  );
};

export default Dichvukhovan;
