import React from 'react'
import Container from './commonLayouts/Container'
import PhoneIcon from '../icons/PhoneIcon'
import MailIcon from '../icons/MailIcon'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Container>
        <div className='flex mb-[500px] gap-[147px]' >
            <div className='mt-4'>
                <img src="images/logo.png" alt="Logo" />
                <p className='text-[#000] font-["Montserrat"] text-[18px] font-normal leading-[155%] mt-[57px] w-[381px]'>Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc.</p>
            </div>
          
            <div className='flex justify-between gap-[70px] w-full' >
                <div>
                    <h5 className='text-[#000] font-["Montserrat"] text-[22px] font-extrabold leading-[160%] mb-[13px]'>Company</h5>
                    <ul className='text-[#000] font-["Montserrat"] text-[18px] font-normal leading-[160%] cursor-pointer w-[170px]'>
                        <li>About Us</li>
                        <li className='my-[13px]'>Products Digital</li>
                        <li>Customer Reviews</li>
                    </ul>
                </div>
                <div>
                    <h5 className='text-[#000] font-["Montserrat"] text-[22px] font-extrabold leading-[160%] mb-[13px]'>Information</h5>
                    <ul className='text-[#000] font-["Montserrat"] text-[18px] font-normal leading-[160%] cursor-pointer w-[170px]'>
                        <li>Help Center</li>
                        <li className='my-[13px]'>Payment Methods</li>
                        <li>Return & Refund</li>
                    </ul>
                </div>
                <div>
                    <h5 className='text-[#000] font-["Montserrat"] text-[22px] font-extrabold leading-[160%] mb-[13px]'>Information</h5>
                    <ul className='text-[#000] font-["Montserrat"] text-[18px] font-normal leading-[160%] cursor-pointer w-[238px]'>
                        <li className='my-[25px]'>
                            <Link to="tel: +1 124567890" className='flex items-center gap-2'>
                                <PhoneIcon />
                                (+1) 123-456-7890
                            </Link>
                        </li>
                        <li >
                            <Link to="mailto: email@youremail.com" className='flex items-center gap-2'>
                                <MailIcon />
                                email@youremail.com
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Footer