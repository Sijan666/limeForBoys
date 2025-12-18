import Container from "../Container";
import Image from "../Image";
import { FaArrowRight } from "react-icons/fa";

const Locations = () => {
  return (
    <div className="pt-20">
      <Container>
        <div className="text-center">
          <p className="text-[#00B200] font-pop text-[20px] ">Locations</p>
          <h3 className="text-[40px] font-pop pb-16">Our U.S. Cities</h3>
        </div>

        <div className="flex">
          <div className="">
            <Image imgSrc={"/src/assets/newYork.png"} />
            <div className="flex items-center">
              <u className="text-[20px] font-pop pt-7">New York</u>
              <p className="text-[16px] pl-2.5 pt-7">
                <FaArrowRight />
              </p>
            </div>
          </div>
          <div className="">
            <Image imgSrc={"/src/assets/sanFran.png"} />
            <div className="flex items-center">
              <u className="text-[20px] font-pop pt-7">San Francisco</u>
              <p className="text-[16px] pl-2.5 pt-7">
                <FaArrowRight />
              </p>
            </div>
          </div>
          <div className="">
            <Image imgSrc={"/src/assets/washDc.png"} />
            <div className="flex items-center">
              <u className="text-[20px] font-pop pt-7">Washington, DC</u>
              <p className="text-[16px] pl-2.5 pt-7">
                <FaArrowRight />
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Locations;
