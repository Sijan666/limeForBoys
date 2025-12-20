import React from 'react'

const Images = ({className,imgSrc,alt}) => {
  return (
    <img src={imgSrc} alt={alt} className={`${className}`}/>
  )
}

export default Images