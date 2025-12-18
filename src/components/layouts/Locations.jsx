import Container from "../Container";
import Image from "../Image";
import { FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Locations = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rightPadding: "55%",
  };

  return (
    <div className="pt-20">
      <Container>
        <div className="text-center">
          <p className="text-[#00B200] font-pop text-[20px] ">Locations</p>
          <h3 className="text-[40px] font-pop pb-16">Our U.S. Cities</h3>
        </div>
        <div className=" -mx-3">
          <Slider {...settings}>
            <div className="outline-none w-1/3 px-3">
              <Image imgSrc={"/src/assets/newYork.png"} />
              <div className="flex items-center">
                <u className="text-[20px] font-pop pt-7">New York</u>
                <p className="text-[16px] pl-2.5 pt-7">
                  <FaArrowRight />
                </p>
              </div>
            </div>

            <div className="outline-none w-1/3 px-3">
              <Image imgSrc={"/src/assets/sanFran.png"} />
              <div className="flex items-center">
                <u className="text-[20px] font-pop pt-7">San Francisco</u>
                <p className="text-[16px] pl-2.5 pt-7">
                  <FaArrowRight />
                </p>
              </div>
            </div>

            <div className="outline-none w-1/3 px-3">
              <Image imgSrc={"/src/assets/washDc.png"} />
              <div className="flex items-center">
                <u className="text-[20px] font-pop pt-7">Washington, DC</u>
                <p className="text-[16px] pl-2.5 pt-7">
                  <FaArrowRight />
                </p>
              </div>
            </div>

            <div className="outline-none w-1/3 px-3">
              <Image imgSrc={"/src/assets/newYork.png"} />
              <div className="flex items-center">
                <u className="text-[20px] font-pop pt-7">New York</u>
                <p className="text-[16px] pl-2.5 pt-7">
                  <FaArrowRight />
                </p>
              </div>
            </div>

            <div className="outline-none w-1/3 px-3">
              <Image imgSrc={"/src/assets/sanFran.png"} />
              <div className="flex items-center">
                <u className="text-[20px] font-pop pt-7">San Francisco</u>
                <p className="text-[16px] pl-2.5 pt-7">
                  <FaArrowRight />
                </p>
              </div>
            </div>

            <div className="outline-none w-1/3 px-3">
              <Image imgSrc={"/src/assets/washDc.png"} />
              <div className="flex items-center">
                <u className="text-[20px] font-pop pt-7">Washington, DC</u>
                <p className="text-[16px] pl-2.5 pt-7">
                  <FaArrowRight />
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Locations;
