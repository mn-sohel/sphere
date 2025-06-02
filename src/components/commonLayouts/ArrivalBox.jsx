import React, { useState } from 'react'
import HeartShape from '../../icons/HeartShape'
import { GoStarFill } from 'react-icons/go';
import CartBtn from '../CartBtn';
import DiscountIcon from '../../icons/DiscountIcon';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArrivalBox = ({
    loveIcon, 
    arrivalItemName,
    itemPrice,
    arrivalItemPrice,
    paraText,
    totalRating,
    rating,
    className,
    percentTag,
    bestprice,
    bestSellprice,
    delPrice,
    extraRight,
    boxHeight,

}) => {
    let [ratingValue, setRatingValue] = useState(new Array(+rating).fill(rating));
  return (
    <div className={`${className} flex flex-col justify-center items-center`} >
        {/* arrivalBox top part */}
        <div className="relative w-[410px] h-[404px] border-1 border-[#fff] rounded-[15px] drop-shadow-lg backdrop-blur-sm pt-[99px] pb-[38px] pl-[52px] pr-[56px]" >
            {percentTag && (
            <div
              className=" absolute top-[60px] right-[45px]"
              style={{width:"135px", height:"60px"}}
            >
              <DiscountIcon />
              <div className="absolute top-[18px] right-[35px] text-[#000] font-['Montserrat'] text-[19px] font-bold leading-[115%]">
                {`${percentTag}%Off`}
              </div>
            </div>
          )}
            <div className={` ${boxHeight ? "h-[232px]" : "h-[267px]"} bg-[#D9D9D9]`} ></div>
            {loveIcon && (
                <div className={`w-[49px] h-[49px] bg-[#000] rounded-full absolute top-[28px] ${extraRight ? "right-[30px]" : "right-[80px]"} flex items-center justify-center`}>
                    <HeartShape/>
                </div>
            )}
            <div>
            {bestSellprice && (
              <div className="flex gap-[11px] items-center justify-center mt-4 mb-[31px]">
                <div className="text-[#0177fc] font-['Montserrat'] text-[26px] font-bold leading-[120%]">{`$${bestprice}`}</div>
                <del className="text-[#9a9a9a] font-['Montserrat'] text-sm font-medium leading-[120%]">{`IDR ${delPrice}`}</del>
              </div>
            )}
          </div>

        </div>
        {/* arrivalBox bottom part */}
        <div>
          <div className="flex items-center justify-between mt-[38px]" >
              <div className='font-["Montserrat"] font-extrabold text-[23px] text-[#2c2c2c] leading-[130%]' >
                  {arrivalItemName}
              </div>
              {itemPrice && (
              <div className='font-["Montserrat"] font-extrabold text-[23px] text-[#2c2c2c] leading-[130%]'>
                  {`$${arrivalItemPrice}`}
              </div>
              )}
          </div>
          <p className="w-[410px] mt-[21px] font-['Montserrat'] font-normal text-[18px] text-[#000] leading-[155%]">
              {paraText}
          </p>
          <div className="flex items-center gap-2.5 mt-[17px]" >
              <div className="flex items-center text-[20px] text-[#04a904]" >
                  {ratingValue.map((item,index) => (
                      <GoStarFill key={index} className="m-0.5" />
                  ))}
              </div>
              <span className="font-['Montserrat'] font-normal text-[18px] text-black leading-[155%]">
                  {totalRating}
              </span>
          </div>
          <CartBtn/>
        </div>
    </div>
  )
}

export default ArrivalBox