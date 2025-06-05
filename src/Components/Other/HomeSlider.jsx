import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeSlider() {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className=" w-11/12">
      <div className="slider-container ">
        <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
          <div className="font-libre text-left border-2 border-[#FF9232] rounded-2xl py-10 pl-8 pr-15 mr-10">
            <h3 className="text-brand font-montserrat font-bold text-2xl mb-5">
              Geography
            </h3>
            <p className="mb-5">
              Explore the diverse landscapes and human interactions shaping our
              planet.
            </p>
            <a href="" className="underline">
              Read More
            </a>
          </div>
          <div className="font-libre text-left border-2 border-[#FF9232] rounded-2xl py-10 pl-8 pr-15 mr-10">
            <h3 className="text-brand font-montserrat font-bold text-2xl mb-5">
              Geography
            </h3>
            <p className="mb-5">
              Explore the diverse landscapes and human interactions shaping our
              planet.
            </p>
            <a href="" className="underline">
              Read More
            </a>
          </div>
          <div className="font-libre text-left border-2 border-[#FF9232] rounded-2xl py-10 pl-8 pr-15 mr-10">
            <h3 className="text-brand font-montserrat font-bold text-2xl mb-5">
              Geography
            </h3>
            <p className="mb-5">
              Explore the diverse landscapes and human interactions shaping our
              planet.
            </p>
            <a href="" className="underline">
              Read More
            </a>
          </div>
          <div className="font-libre text-left border-2 border-[#FF9232] rounded-2xl py-10 pl-8 pr-15 mr-10">
            <h3 className="text-brand font-montserrat font-bold text-2xl mb-5">
              Geography
            </h3>
            <p className="mb-5">
              Explore the diverse landscapes and human interactions shaping our
              planet.
            </p>
            <a href="" className="underline">
              Read More
            </a>
          </div>
          <div className="font-libre text-left border-2 border-[#FF9232] rounded-2xl py-10 pl-8 pr-15 mr-10">
            <h3 className="text-brand font-montserrat font-bold text-2xl mb-5">
              Geography
            </h3>
            <p className="mb-5">
              Explore the diverse landscapes and human interactions shaping our
              planet.
            </p>
            <a href="" className="underline">
              Read More
            </a>
          </div>
          <div className="font-libre text-left border-2 border-[#FF9232] rounded-2xl py-10 pl-8 pr-15 mr-10">
            <h3 className="text-brand font-montserrat font-bold text-2xl mb-5">
              Geography
            </h3>
            <p className="mb-5">
              Explore the diverse landscapes and human interactions shaping our
              planet.
            </p>
            <a href="" className="underline">
              Read More
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
}
