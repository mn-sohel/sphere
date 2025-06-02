import React from 'react'
import Container from './commonLayouts/Container'
import StarShape from '../icons/StarShape'
import ProvidedItem from './commonLayouts/ProvidedItem'

const WhatWeProvide = () => {
  return (
    <div className='mt-[105px]'>
        <Container>
            <img src="images/shape.png" alt="s" className='mb-[30px] ml-[-120px]' />
            <div className='w-full mx-auto relative mb-[51px]' >
                <img src="images/shape.png" alt="shape" className=' absolute top-[40px] right-[94px]' />
                <h1 className=' text-center text-[#000] font-["Prompt"] text-[74px] font-extrabold leading-[125%]'>What <span className='text-[#5E1EE5]'>we</span> provide?</h1>
                <StarShape className='absolute top-0 left-[100px]'/>
                <StarShape className='absolute -top-4 right-[50px] w-[22px] h-[22px]'/>
            </div>
            <div className='flex justify-between'>
                <ProvidedItem image="images/computer.png" itemName={"Computer & Laptop"}/>
                <ProvidedItem image="images/mobile.png" itemName={"Mobile & Phone"} />
                <ProvidedItem image="images/camera.png" itemName={"Camera"} />
                <ProvidedItem image="images/tv.png" itemName={"TV & Smart Box"} />
                <ProvidedItem image="images/home.png" itemName={"Home Appliance"} />
                <ProvidedItem image="images/accessories.png" itemName={"Accessories"} />
                <ProvidedItem image="images/others.png" itemName={"Other Categories"} />
            </div>
        </Container>
    </div>
  )
}

export default WhatWeProvide