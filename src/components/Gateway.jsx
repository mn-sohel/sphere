import React from 'react'
import Container from './commonLayouts/Container'
import StarShape from '../icons/StarShape'
import SearchIcon from '../icons/SearchIcon'

const Gateway = () => {
  return (
    <>
        <Container>
            <div className='w-[1237px] bg-[#212736] rounded-[15px] pt-[62px] pl-[73px] pr-[51px] pb-[77px] flex gap-[49px] items-center mb-[78px]' >
                <div>
                    <h3 className='w-[410px] font-["Prompt] font-bold text-[46px] text-[#fff] leading-[120%] tracking-[-0.92px]'>Gateway to a world of innovation with</h3>
                    <div className='mt-[17px] flex justify-between items-center' >
                        <img src="images/bottomLogo.png" alt="Bottom Logo" />
                        <StarShape/>
                    </div>
                </div>
                <div className='w-[591px] h-[143px] bg-[#eff0f1] rounded-[15px] flex flex-col justify-center gap-[25px] px-[23px] pt-[34px] pb-[11px] ml-[49px]'>
                    <div className=' flex items-center gap-[21px] ml-3'>
                        <SearchIcon/>
                        <input type="text" placeholder='Search for electronic' className='font-["Montserrat"] font-light text-[21px] text-[#01081a]' />
                    </div>
                        <button className='py-[13px] px-[243px] bg-[#ace238] rounded-[15px] text-[#000] font-["Montserrat"] text-[17px] font-medium cursor-pointer'>Search</button>
                </div>
            </div>
        </Container>
    </>
    
  )
}

export default Gateway