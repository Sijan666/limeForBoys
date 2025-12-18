
import Heading from "../Heading"
import Image from "../Image"
import picOne from "../../assets/loacte.png"
import picTwo from "../../assets/scane.png"
import picThree from "../../assets/ride.png"
import Container from "../Container"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Flex from "../Flex"




const TheApp = () => {
      var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
  };
    return (
        <>
      
      <section className="bg-[#EEEEEE] py-30">
        <Heading textOne={"The App"} textTwo={" How to Lime "} className={" text-2xl"}/>
        <Container>
      <div >
        {/* <Flex className=" gap-2.5"> */}
        <Slider {...settings}>
           <Image imgSrc={picOne}/>
         <Image imgSrc={picTwo}/>
         <Image imgSrc={picThree}/>
         <Image imgSrc={picOne}/>
          <Image imgSrc={picTwo}/>
          <Image imgSrc={picThree}/>
         </Slider>
      {/* </Flex> */}
      </div>
        </Container>
      </section>
        </>
    )
}

export default TheApp


