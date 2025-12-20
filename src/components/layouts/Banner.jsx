import Heading from "../Heading";
import Button from "../Button";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="">
      <div className="bg-[url('/src/assets/banner.png')] pt-[560px] pb-[350px] bg-cover bg-center bg-no-repeat">
        {/* <div className="w-[400px] mx-auto  items-center"> */}
        <Heading className={"text-center pb-10"} text={"Ride Green"} />
        <Link to={"/"}>
          <div className="flex justify-center gap-x-2">
            <Button
              className={
                "border border-[#00DD00] hover:bg-transparent hover:border hover:border-[#FFFFFF4D] hover:text-white duration-500"
              }
              btnText={"Our cities"}
            />
            <Button
              className={
                "border border-[#00DD00] hover:bg-transparent hover:border hover:border-[#FFFFFF4D] hover:text-white duration-500"
              }
              btnText={"Download the App"}
            />
          </div>
        </Link>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Banner;
