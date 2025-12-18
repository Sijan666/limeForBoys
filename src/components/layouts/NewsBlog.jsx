import React from "react";
import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import NewsOne from "/src/assets/News1.png";
import NewsTwo from "/src/assets/News2.png";
import NewsThree from "/src/assets/News3.png";
import { Link } from "react-router-dom";

const NewsBlog = () => {
  return (
    <div className="bg-[#1E1E1E] py-20">
      <Container className={'px-50px'}>
        <div className="text-center pb-[75px]">
          <h4 className="text-[#00B200] text-xl font-poppins">
            Lime Times Blog
          </h4>
          <h2 className="text-white text-[40px] font-poppins">
            Our Latest News
          </h2>
        </div>
        <Flex className={"justify-between"}>
          {/* Blog One */}
          <div className="">
            <Link to={""}>
              <Images ImgSrc={NewsOne} />
            </Link>
            <h5 className="text-[16px] font-bold font-poppins text-[#00DD00] pt-[30px] pb-2.5 ">
              Sustainability
            </h5>
            <p className="font-poppins text-[28px] text-white w-[380px]">
              With Our Industry-Leading Net-Zero Target Validated Our Hard Work
              Continues
            </p>
            <p className="text-[16px] text-white font-poppins pt-[30px]">
              by Andrew Savage | January 16, 2024
            </p>
          </div>
          {/* Blog Two */}
          <div className="">
            <Link to={""}>
              <Images ImgSrc={NewsTwo} />
            </Link>
            <p className="font-poppins text-[28px] text-white pb-[150px] pt-[25px] w-[380px]">
              Hero of the Month: Respire
            </p>
            <p className="text-[16px] text-white font-poppins">
              by Andrew Savage | January 16, 2024
            </p>
          </div>
          {/* Blog Three */}
          <div className="">
            <Link to={""}>
              <Images ImgSrc={NewsThree} />
            </Link>
            <p className="font-poppins text-[28px] text-white pb-[105px] pt-[25px] w-[380px]">
              Lime Recaps 2023 With Its Annual ​‘Ride Replay’
            </p>
            <p className="text-[16px] text-white font-poppins">
              by Andrew Savage | January 16, 2024
            </p>
          </div>
        </Flex>
        <div className="pt-[90px] text-center">
            <Link to={''} ><Button btnText={'View More'}/></Link>
        </div>
      </Container>
    </div>
  );
};

export default NewsBlog;
