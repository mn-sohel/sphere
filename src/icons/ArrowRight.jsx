import React from 'react'

const ArrowRight = (width=18, height=19, color="#fff") => {
  return (  
<svg width={width} height={height} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 9.5H14.25" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 4.25L14.25 9.5L9 14.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  )
}

export default ArrowRight