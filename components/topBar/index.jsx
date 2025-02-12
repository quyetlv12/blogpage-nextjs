import React from "react";
import email from "@/public/images/header/email.png";
import hotline from "@/public/images/header/hotline.png";
import pr from "@/public/images/header/pr.png";
import fb from "@/public/images/header/social.png";
import tw from "@/public/images/header/tw.png";
import yt from "@/public/images/header/yt.png";
const TopBar = () => {
  return (
    <div
      className={` header left-0 top-0 z-40 flex w-full items-center`}
    >
      <div className="flex gap-5">
        <div className="flex gap-2 items-center">
          <img src={hotline} alt="" srcSet="" />
          <span className="text-white font-bold">Hotline: 1900.4333</span>
          
        </div>
        <div className="flex gap-2 items-center">
          <img src={email} alt="" srcSet="" />
          <span className="text-white font-bold">cskh@dgpost.vn</span>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <a
          href="https://www.facebook.com/dgpostvn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fb} alt="" srcSet="" />
        </a>
        <a
          href="https://x.com/DGPost_VN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={tw} alt="" srcSet="" />
        </a>

        <a
          href="https://www.pinterest.com/dgpostvn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={pr} alt="" srcSet="" />
        </a>
        <a
          href="https://www.youtube.com/@DGPostVietNam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={yt} alt="" srcSet="" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
