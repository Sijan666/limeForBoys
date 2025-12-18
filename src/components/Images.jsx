import React from 'react'

const Images = ({className,srcImg,alt}) => {
  return (
    <img src={srcImg} alt={alt} className={`${className}`}/>
  )
}

export default Images