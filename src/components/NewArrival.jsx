import React from 'react'
import Container from './commonLayouts/Container'
import ArrivalItem from './commonLayouts/ArrivalItem'
import ArrivalBox from './commonLayouts/ArrivalBox'
import Slider from 'react-slick'
import ArrowLeft from '../icons/ArrowLeft'
import ArrowRgt from '../icons/ArrowRgt'

function NextRightArrow(props){
  return(
    <div onClick={props.onClick} className={` absolute -top-[100px] right-0 flex items-center justify-center w-[55px] h-[55px] rounded-full border border-[#000] hover:bg-[#AFE638] hover:border-[#AFE638] transition-all duration-300 cursor-pointer `}>
        <ArrowRgt />
        </div>
  )
}
function PrevNextArrow(props){
  return(
   <div onClick={props.onClick} className=" absolute -top-[100px] right-20 flex items-center justify-center w-[55px] h-[55px] rounded-full border border-[#000] hover:bg-[#AFE638] hover:border-[#AFE638] transition-all duration-300 cursor-pointer ">
        <ArrowLeft />
        </div>
  )
}

const NewArrival = () => {

    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextRightArrow/>,
    prevArrow: <PrevNextArrow />,
    // autoplay: true,
    autoplaySpeed: 2500,
  };


  return (
    <div className="mt-[106px] mb-[84px]">
        <Container>
            {/* heading part */}
            <div className="flex justify-between items-center mb-[46px]">
                <h2 className='text-left text-[#000] font-["Prompt"] text-[47px] font-bold leading-[125%]'>
                New <span className="text-[#5E1EE5]">arrival</span> for you
              </h2>
            </div>

            {/* Number part */}
            <div className="flex justify-between gap-[76px]">
                <div className="mt-8 border-l border-[#E2E2E2] h-[308px] relative before:content-[''] before:bg-[#5e1ee5] before:absolute before:w-[2px] before:h-[43px] before:left-[0px] before:top-[70px]">
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
                        <Slider {...settings} >
                        <ArrivalBox 
                            loveIcon={true}
                            extraRight={true}
                            arrivalItemName="Xiphone 14 Pro Maxe"
                            itemPrice={true}
                            arrivalItemPrice="175.00"
                            paraText={
                            "Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc."
                            }
                            rating="5"
                            totalRating="(121)"
                            className={"mx-0  my-0.5"}
                        />
                        <ArrivalBox 
                            loveIcon={true}
                            arrivalItemName="Xiphone 13"
                            itemPrice={true}
                            arrivalItemPrice="100.00"
                            paraText={
                            "Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc."
                            }
                            rating="5"
                            totalRating="(89)"
                            className={" mx-0 my-0.5"}
                        />
                        </Slider>
                    
                </div>
            </div>
        </Container>
    </div>
  )
}

export default NewArrival