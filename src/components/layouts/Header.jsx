import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import logo from "/src/assets/logo.png";
import usaflag from "/src/assets/usaflag.png";
import { Link } from "react-router-dom";
import Button from "../Button";
import Images from "../Images";

const Header = () => {
  return (
    <div className="py-8 fixed top-0 left-0 w-full ">
      <Container>
        <Flex>
          {/* Logo start */}
          <Link to={"/"}>
            <div className="mr-[30px]">
              <Images imgSrc={logo} />
            </div>
          </Link>
          {/* Logo End */}
          {/* Change Lang Start */}
          <Link to={"/"}>
            <div className="flex items-center border-[#FFFFFF4D] border p-[9px] rounded-[10px] ">
              <Images imgSrc={usaflag} />
              <p className="font-pop font-normal text-3.5 text-[#FFFFFF] leading-3.5 pl-2 ">
                EN
              </p>
            </div>
          </Link>
          {/* Change Lang End */}
          {/* Menu Start */}
          <div className="ml-[235px] mr-[35px]">
            <ul className="flex items-center gap-x-[35.5px]">
              <li>
                <Link
                  className={
                    "font-pop font-normal text-3.5 text-white leading-3.5"
                  }
                  to={"/"}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "font-pop font-normal text-3.5 text-white leading-3.5"
                  }
                  to={"/"}
                >
                  Why Lime
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "font-pop font-normal text-3.5 text-white leading-3.5"
                  }
                  to={"/"}
                >
                  Vehicles
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "font-pop font-normal text-3.5 text-white leading-3.5"
                  }
                  to={"/"}
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "font-pop font-normal text-3.5 text-white leading-3.5"
                  }
                  to={"/"}
                >
                  Advertise
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "font-pop font-normal text-3.5 text-white leading-3.5"
                  }
                  to={"/"}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "font-pop font-normal text-3.5 text-white leading-3.5"
                  }
                  to={"/"}
                >
                  Help
                </Link>
              </li>
            </ul>
          </div>
          {/* Menu End */}
          {/* Button Start */}
          <div className="">
            <Link to={"/"}>
              <Button
                className={
                  "border border-[#00DD00] hover:bg-transparent hover:border hover:border-[#FFFFFF4D] hover:text-white duration-500"
                }
                btnText={"Download App"}
              />
            </Link>
          </div>
          {/* Button End */}
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
