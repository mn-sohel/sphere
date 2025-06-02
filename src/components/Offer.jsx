import React from 'react'
import Container from './commonLayouts/Container'
import Button from './Button'

const Offer = () => {
  return (
    <Container>
        <div className="mb-[96px]">
            {/* top side */}
            <div className="flex gap-[17px]">
                <div className="w-[610px] h-[490px] bg-[#f3f4f6] rounded-[21px] pt-[53px] pl-[84px] pr-[85px]" >
                    <h4 className='w-[441px] font-["Prompt"] font-bold text-[45px] text-[#000] text-center mx-auto leading-[107%] '>
                        Might Sound, Everywhere
                    </h4>
                    <div className="w-[422px] h-[267px] mt-[38px] bg-[#d9d9d9] flex items-end justify-center pb-[14px]">
                        <Button buttonText="Discover Now" textColor="text-white" bg="bg-[#5E1EE5]" isArrowIcon={true}/>
                    </div>
                </div>
                <div className="w-[610px] h-[490px] bg-[#f3f4f6] rounded-[21px] pt-[53px] pl-[48px] pr-[49ox]">
                    <div className="flex items-center gap-[57px]">
                        <h4 className='w-[242px] font-["Prompt"] text-[56px] font-bold leading-[125%] tracking-[-1.12px]'>
                              20% OFF  
                        </h4>
                        <Button buttonText="Discover Now" textColor="text-white" bg="bg-[#5E1EE5]" isArrowIcon={true}/>
                    </div>
                    <p className='w-[213px] text-[#000] font-["Montserrat"] text-[23px] font-semibold leading-[125%] tracking-[-0.46px] mt-3 '>
                        Special Christmas Day Offer
                    </p>
                    <div className="w-[306px] h-[267px] bg-[#d9d9d9] ml-[201px]"></div>
                </div>
            </div>
            {/* bottom side */}
            <div className="flex gap-[20px] mt-[21px] ">
                <div className="w-[505px] h-[490px] bg-[#f3f4f6] rounded-[21px] pt-[58px] pl-[59px] pr-[40px]">
                    <h4 className='w-[309px] text-[#000]   font-["Prompt"] text-[39px] font-bold leading-[107%] tracking-[-0.78px]'>
                        Control Your Daily Activity On Yourself
                    </h4>
                    <div className="w-[263px] h-[243px] mt-[21px] ml-[143px] bg-[#d9d9d9] flex items-end justify-center pb-[38px] relative" >
                        <div className="absolute left-[-143px]  flex justify-center">
                           <Button buttonText="Discover Now" textColor="text-white" bg="bg-[#5E1EE5]" isArrowIcon={true}/> 
                        </div>
                        
                    </div>    
                </div>
                <div className="w-[712px] h-[490px] bg-[#f3f4f6] rounded-[21px] pt-[58px] pl-[45px] pr-[29px]">
                    <h3 className='w-[441px] font-["Prompt"] text-[57px] font-bold leading-[117%] tracking-[-1.14px] text-right ml-[190px]'>
                        Travels Light, Sounds Heavy
                    </h3>
                    <div className="mt-6 flex gap-[53px]" >
                        <div className="w-[371px] h-[243px] bg-[#d9d9d9]"></div>
                        <div>
                            <p className='w-[213px] text-[#000] font-["Montserrat"] text-[23px] font-semibold leading-[125%] tracking-[-0.46px] mt-[15px] mb-[34px] text-right '>
                                20+ hours of portable playtime
                            </p>
                            <Button buttonText="Discover Now" textColor="text-white" bg="bg-[#5E1EE5]" isArrowIcon={true}/> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Offer