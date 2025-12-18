import React from 'react'

const Heading = ({textOne , textTwo , className}) => {
  return (
    
    <div className="text-center">
      <h4 className='text-green-500 mb-1'> {textOne}</h4>
     <h2 className={` mb-8 ${className}`}> {textTwo}</h2>
    
    </div>
  )
}

export default Heading