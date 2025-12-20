import Container from "../Container";
import React from "react";

const Map = () => {
  return (
    <div className="bg-[#1A1A1A] py-[232px]">
      <Container>
  <div className="flex items-center gap-20">
    
    {/* LEFT: Map image */}
    <img
      src="/src/assets/map.png"
      alt="Map"
      className="w-[600px] h-auto"
    />

    {/* RIGHT: Download card */}
    <div className="backdrop w-[440px] h-[600px] ml-40">
      <h1 className="text-white text-[40px] font-bold mt-20">
        Download The Map
      </h1>

      <div className="flex gap-4 mt-10">
        <img
          src="/src/assets/appstore.png"
          alt="App Store"
          className="w-[180px] h-auto object-contain"
        />
        <img
          src="/src/assets/google.png"
          alt="Google Play"
          className="w-[180px] h-auto object-contain"
        />
      </div>
    </div>

  </div>
</Container>
    </div>
  );
};

export default Map;
