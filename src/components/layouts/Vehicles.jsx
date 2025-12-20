import Container from "../Container";
import Flex from "../Flex";
import Image from "../Images";
import vehiclesOne from "/src/assets/vehiclesOne.png";
import vehiclesTwo from "/src/assets/vehiclesTwo.png";

const Vehicles = () => {
  return (
    <div className="pt-20 pb-24">
      <Container>
        <div className="text-center">
          <p className="text-[#00B200] font-pop text-[20px] ">Our Vehicles</p>
          <h3 className="text-[40px] font-pop pb-16">Discover the Gen4</h3>
        </div>
        <Flex className={"gap-x-5 text-center justify-center"}>
          <div className="bg-[#EEEEEE] px-20 pt-[60px] pb-10 rounded-[20px]">
            <Image imgSrc={vehiclesOne} />
            <p className="text-[20px] font-pop pt-9">E-Scooter</p>
          </div>
          <div className="bg-[#EEEEEE] px-20 pt-[60px] pb-10 rounded-[20px]">
            <Image imgSrc={vehiclesTwo} />
            <p className="text-[20px] font-pop pt-9">E-Bike</p>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Vehicles;
