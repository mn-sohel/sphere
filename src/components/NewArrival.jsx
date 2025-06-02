import React from 'react'
import Container from './commonLayouts/Container'
import ArrivalItem from './commonLayouts/ArrivalItem'
import ArrivalBox from './commonLayouts/ArrivalBox'

const NewArrival = () => {
  return (
    <div className="mt-[106px]">
        <Container>
            {/* heading part */}
            <div className="flex justify-between items-center mb-[46px]">
                <h2 className='text-left text-[#000] font-["Prompt"] text-[47px] font-bold leading-[125%]'>
                New <span className="text-[#5E1EE5]">arrival</span> for you
              </h2>
            </div>
            {/* Number part */}
            <div className=" flex justify-between  gap-[76px]">
                <div className="  mt-8 border-l border-[#E2E2E2] h-[308px]  relative before:content-[''] before:bg-[#5e1ee5] before:absolute before:w-[2px] before:h-[43px]  before:left-[0px] before:top-[70px]">
                    <div className=" w-[250px] absolute top-[7px]" >
                        <ArrivalItem  
                            arrivalTxt="Computer & Laptop"
                            arrivalNum="15"
                            bg={"#1f2537"}
                        />
                        <ArrivalItem  
                            arrivalTxt="Mobile & Phone"
                            arrivalNum="35"
                            bg={"#AFE638"}
                            color={"#000"}
                        />
                        <ArrivalItem  
                            arrivalTxt="Camera Imaging"
                            arrivalNum="10"
                            bg={"#5E1EE5"}
                        />
                        <ArrivalItem  
                            arrivalTxt="TV & Smart Box"
                            arrivalNum="8"
                            bg={"#F1F1F2"}
                            color={"#000"}
                        />
                        <ArrivalItem  
                            arrivalTxt="Home Appliance"
                            arrivalNum="2"
                            bg={"#FFE921"}
                            color={"#000"}
                        />
                    </div>
                </div>
                <div className="w-[940px]" >
                    <div>
                        <ArrivalBox/>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default NewArrival