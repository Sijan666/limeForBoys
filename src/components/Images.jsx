import React from 'react'

const Images = ({className,ImgSrc,alt}) => {
  return (
    <img src={ImgSrc} alt={alt} className={`${className}`}/>
  )
}

export default Images