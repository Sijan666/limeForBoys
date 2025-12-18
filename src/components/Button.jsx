import React from "react";

const Button = ({ className, text }) => {
  return (
    <div
      className={`py-3.5 px-[25px] bg-[#00DD00] rounded-[40px] font-pop font-normal text-3.5 text-black leading-[22.4px]  ${className}`}
    >
      {text}
    </div>
  );
};

export default Button;
