// WaveBanner.js
import React from "react";
import { TiWeatherCloudy } from "react-icons/ti";

const Banner = () => {
    const data =[
        {
            id:1,
            content:"free shipping on all orders"
        },
        {
            id:2,
            content: "Sale extended: 10% off 1 book",
            hasCode:true,
            code:"HELLOG"
        },
        {
            id:3,
            content: "Sale extended: 20% off ",
            hasCode:true,
            code:"HELLOCODE"
        },
        
    ]
  return (
    <div className="marquee__wrap h-10 overflow-hidden relative">
        <div className="banner-message flex w-full">
            <span className="flex items-center w-full  absolute top-2 gap-10 text-white banner-text ">
                {
                    data.map((item,i) => (
                     <p className=" flex items-center gap-10 min-w-[390px]  poppins-regular " key={i}>{item.content} {item.hasCode?<span className="bg-green-500 rounded-lg px-1 py-1 text-sm">{item.code}</span>:""}<TiWeatherCloudy/></p>
                    ))
                }
            </span>
        </div>
      <span className="marquee__scroll">
        <div className="scrolling-banner__wave-group">
          {/* Repeat SVG wave elements as children */}
          {[...Array(6)].map((_, i) => (
            <svg
              key={i}
              viewBox="0 0 640 100"
              preserveAspectRatio="none"
              className="wave wave--horizontal"
            >
              <path
                fill="#fff"
                d="M640 60C516 60 476-0 316 0 156 0 116 60 0 60V100h640V60z"
              ></path>
            </svg>
          ))}
        </div>
      </span>
      <span className="marquee__scroll">
        <div className="scrolling-banner__wave-group">
          {[...Array(6)].map((_, i) => (
            <svg
              key={i}
              viewBox="0 0 640 100"
              preserveAspectRatio="none"
              className="wave wave--horizontal"
            >
              <path
                fill="#fff"
                d="M640 60C516 60 476-0 316 0 156 0 116 60 0 60V100h640V60z"
              ></path>
            </svg>
          ))}
        </div>
      </span>
    </div>
  );
};

export default Banner;
