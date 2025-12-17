import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import usaflag from "/src/assets/usaflag.png";
import { Link } from "react-router-dom";
import Button from "../Button";

const Header = () => {
  return (
    <div className="py-10 bg-teal-500 ">
      <Container>
        <Flex>
          {/* Logo start */}
          <Link to={"/"}>
            <div className="mr-[30px]">
              <Image src={logo} />
            </div>
          </Link>
          {/* Logo End */}
          {/* Change Lang Start */}
          <Link to={"/"}>
            <div className="flex items-center border-white border p-[9px] rounded-[10px] ">
              <Image src={usaflag} />
              <p className="font-pop font-normal text-3.5 text-[#FFFFFF] leading-3.5 pl-2 ">
                EN
              </p>
            </div>
          </Link>
          {/* Change Lang End */}
          {/* Menu Start */}
          <div className="ml-[240px] mr-[30px]">
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
              <Button text={"Download App"} />
            </Link>
          </div>
          {/* Button End */}
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
