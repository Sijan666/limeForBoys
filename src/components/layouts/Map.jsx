import Container from "../Container";
import React from "react";
import Images from "../Images";
import appstore from '../../assets/appstore.png'
import google from '../../assets/google.png'
import map from '../../assets/map.png'

const Map = () => {
  return (
    <div className="bg-[#1A1A1A] py-[232px]">
      <Container>
  <div className="flex items-center gap-20">
    {/* LEFT: Map image */}
    <Images imgSrc={map} className={'w-[600px] h-auto'}/>

    {/* RIGHT: Download card */}
    <div className="backdrop w-[440px] h-[600px] ml-40">
      <h1 className="text-white text-[40px] font-bold mt-20">
        Download The Map
      </h1>

      <div className="flex gap-4 mt-10">
        <Images imgSrc={appstore} className={'w-[180px] h-auto object-contain'}/>
        <Images imgSrc={google} className={'w-[180px] h-auto object-contain'}/>
      </div>
    </div>

  </div>
</Container>
    </div>
  );
};

export default Map;
