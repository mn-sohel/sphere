import React from 'react'

const ArrivalItem = ({arrivalTxt, arrivalNum, bg, color}) => {
  return (
    <>
        <div className='flex items-center gap-[18px] mb-[30px] ml-6' >
              <h4 className='text-[#2c2c2c] font-["Montserrat"] text-base font-medium leading-[130%]' >{arrivalTxt}</h4>
              <div 
                className= 'w-[40px] h-[31px] text-[#fff] font-["Montserrat"]  bg-amber-400 flex items-center justify-center rounded-[8px] text-[15px] font-bold '
                 style={{backgroundColor: bg ? bg : '#AFE638', color: color ? color : '#fff'}}>
                    {arrivalNum}  
              </div>  
        </div>
    </>
  )
}

export default ArrivalItem