import React from 'react'

const Heading = ({className,text}) => {
  return (
    <div className={`font-pop font-normal text-[72px] text-white leading-[79.2px] ${className}`}>{text}</div>
  )
}

export default Heading