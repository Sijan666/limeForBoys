import React from "react";
import Container from "../Container";
import Images from "../Images";
import whylimeOne from "/src/assets/whyOne.png";
import whylimeTwo from "/src/assets/whyTwo.png";
import whylimeThree from "/src/assets/whyThree.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Whylime = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autopalySpeed: 2000,
  };
  return (
    <Container className={"mt-32 mb-20"}>
      <div className="text-center">
        <h4 className="text-[#00B200] text-[20px] font-poppins">Why Lime</h4>
        <h3 className="text-black text-[40px] font-poppins">
          Our Core Principles
        </h3>
      </div>
      <div className="-mx-3 mt-8">
        <Slider {...settings}>
          <div className="outline-none w-1/3 px-3">
            <Images srcImg={whylimeOne} />
            <div className="relative">
              <h4 className="text-black text-[20px] font-poppins pt-4">
                Safety
              </h4>
              <div className="w-[63px] h-[1px] bg-black absolute bottom-1"></div>
            </div>
          </div>
          <div className="outline-none w-1/3 px-3">
            <Images srcImg={whylimeTwo} />
            <div className="relative">
              <h4 className="text-black text-[20px] font-poppins pt-4">
                Sustainability
              </h4>
              <div className="w-[134px] h-[1px] bg-black absolute bottom-1"></div>
            </div>
          </div>
          <div className="outline-none w-1/3 px-3">
            <Images srcImg={whylimeThree} />
            <div className="relative">
              <h4 className="text-black text-[20px] font-poppins pt-4">
                Community
              </h4>
              <div className="w-[118px] h-[1px] bg-black absolute bottom-1"></div>
            </div>
          </div>
          <div className="outline-none w-1/3 px-3">
            <Images srcImg={whylimeTwo} />
            <div className="relative">
              <h4 className="text-black text-[20px] font-poppins pt-4">
                Sustainability
              </h4>
              <div className="w-[134px] h-[1px] bg-black absolute bottom-1"></div>
            </div>
          </div>
        </Slider>
      </div>
    </Container>
  );
};

export default Whylime;
