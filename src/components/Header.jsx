import React from 'react'
import Container from './commonLayouts/Container'
import Button from './Button'

const Header = () => {
  return (
    <>
        <Container>
            <div className='flex justify-between items-center py-[50px]'>
                {/* Logo part */}
                <div className='flex items-center cursor-pointer justify-cente pb-1'>
                    <img src="images/logo.png" alt="Logo" />
                </div>
                {/* Navbar part */}
                <div className='flex items-center justify-center'>
                    <ul className='flex gap-[25px] font-["Montserrat"] font-semibold text-[13px] text-[#8E8E8E]'>
                        <li className='p-4 leading-[13px] cursor-pointer hover:scale-110 duration-300 ease-in-out'>Home</li>
                        <li className='p-4 leading-[13px] cursor-pointer hover:scale-110 duration-300 ease-in-out'>Pricing</li>
                        <li className='p-4 leading-[13px] cursor-pointer hover:scale-110 duration-300 ease-in-out'>Events</li>
                        <li className='p-4 leading-[13px] cursor-pointer hover:scale-110 duration-300 ease-in-out'>Company</li>
                    </ul>
                </div>
                {/* Loging and sign up */}
                {/* <div> */}
                    <div className='flex items-center gap-6'>
                        <button className='font-["Montserrat"]  text-[13px] font-semibold text-[#8E8E8E] p-4 leading-[130%] cursor-pointer space-y-10 hover:scale-105 transition-all duration-300 ease-in-out uppercase'>Login</button>
                        <Button buttonText="Sign up now" textColor="text-white" isArrowIcon={true}/>
                    </div>
                {/* </div> */}
            </div>
        </Container>
    </>
  )
}

export default Header