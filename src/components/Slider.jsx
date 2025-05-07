import { Button } from "antd";
import { Briefcase } from "lucide-react";
import React from "react";
import doczon from "../assets/doczon.jpg";
import foodee from "../assets/foodee.jpg";

import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bannerImages = [
  "https://zon.uz/_next/static/media/inverter_protech-desktop.f5a74588.webp",
  "https://zon.uz/_next/static/media/fubag-desk.8415d125.webp",
  "https://zon.uz/_next/static/media/crown-desk.6b1b7d10.webp",
  "https://zon.uz/_next/static/media/resanta-desk.d0ae6da5.webp",
  "https://zon.uz/_next/static/media/dewalt_new_desktop.1a3adcaf.webp",
];

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
    onClick={onClick}
  >
    &#8592;
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
    onClick={onClick}
  >
    &#8594;
  </button>
);

const Slider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="max-w-[1200px] mx-auto my-[15px]">
      <div className="relative rounded overflow-hidden mb-6">
        <SliderSlick {...settings}>
          {bannerImages.map((src, idx) => (
            <div key={idx}>
              <img
                src={src}
                alt={`banner-${idx}`}
                className="w-full h-[434px] object-cover rounded"
              />
            </div>
          ))}
        </SliderSlick>
      </div>

      <div className="flex gap-[40px] justify-between">
        <div className="bg-blue-100 w-[285px] h-[200px] flex-col py-[19.5px] rounded text-center flex justify-center items-center">
          <h1 className="font-bold text-lg">Добро пожаловать!</h1>
          <p className="py-[9px] text-sm px-4">
            Войдите, чтобы оставлять отзывы <br /> и пользоваться другими
            функциями авторизованных пользователей.
          </p>
          <Button type="primary" style={{ height: "40px", width: "182px" }}>
            Войти в личный кабинет
          </Button>
        </div>

        <div className="bg-blue-100 w-[285px] h-[200px] text-center flex gap-4 justify-center items-center rounded">
          
          <h3 className="font-bold text-[18px] leading-[100%] text-blue-500">
            Покупать <br /> как юрлицо
          </h3>
          <Briefcase className="w-12 h-12 text-blue-400 mb-2" />
        </div>

        <div>
          <img
            src={doczon}
            alt="Doczon"
            className="w-[285px] h-[200px] rounded"
          />
        </div>

        <div>
          <img
            src={foodee}
            alt="Foodee"
            className="w-[285px] h-[200px] rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
