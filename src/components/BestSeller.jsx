import React from 'react'
import Container from './commonLayouts/Container';
import Slider from 'react-slick';
import ArrivalBox from './commonLayouts/ArrivalBox';

const BestSeller = () => {

     var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: <NextRightArrow/>,
    // prevArrow: <PrevNextArrow />,
    // autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="mt-[106px] mb-[84px]">
        <Container>
            {/* heading part */}
            <div className="flex justify-between items-center mb-[46px]">
                <h2 className='text-left text-[#000] font-["Prompt"] text-[47px] font-bold leading-[125%]'>
                Flash sale for <span className="text-[#5E1EE5]">best</span> sellers
              </h2>
            </div>

            {/* Number part */}
            <div className="flex justify-between gap-[76px]">
                
                <div className="w-[1300px] mx-auto" >
                        <Slider {...settings} >
                        <ArrivalBox 
                            loveIcon={false}
                            arrivalItemName="Xpad Mini 6"
                            paraText={
                            "Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc."
                            }
                            rating="5"
                            totalRating="(121)"
                            className={"mx-0  my-0.5"}
                            percentTag={"8"}
                            bestprice={"89.000"}
                            delPrice={"150.00"}
                            bestSellprice={true}
                            boxHeight={true}
                        />
                        <ArrivalBox
                            loveIcon={false}
                            arrivalItemName="Hypermac Air Purpler M1"
                            arrivalItemPrice={null}
                            paraText={
                                "Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc."
                            }
                            rating="5"
                            totalRating="(125)"
                            className={" my-0.5 mx-1 "}
                            percentTag={"8"}
                            bestprice={"89.000"}
                            delPrice={"150.00"}
                            bestSellprice={true}
                            boxHeight={true}
                        />
                        <ArrivalBox
                            loveIcon={false}
                            arrivalItemName="AR10 AC 1PK with S-Inverter"
                            arrivalItemPrice={null}
                            paraText={
                                "Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc."
                            }
                            rating="5"
                            totalRating="(125)"
                            className={" my-0.5 mx-1"}
                            percentTag={"13"}
                            bestprice={"90.000"}
                            delPrice={"250.00"}
                            bestSellprice={true}
                            boxHeight={true}
                        />
                        </Slider>
                    
                </div>
            </div>
        </Container>
    </div>
  )
}

export default BestSeller