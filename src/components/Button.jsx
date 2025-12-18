import React from 'react'

const Button = ({btnText,className}) => {
  return (
    <button className={`bg-[#00DD00] text-sm cursor-pointer py-3.5 px-6 rounded-[40px] font-poppins ${className}`}>{btnText}</button>
  )
}

export default Button