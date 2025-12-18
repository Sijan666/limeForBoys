import React, { Children } from 'react'

const Container = ({className,children}) => {
  return (
<div className={`max-w-[1190px] m-auto ${className}`}>{children}</div>  )
}

export default Container