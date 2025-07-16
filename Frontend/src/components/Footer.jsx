import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import logo from '../assets/Asian_logo.png'
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDropright } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import callImage from '../assets/Call_icon.png'
import Andorid from '../assets/google-play-download.png'
import ios from '../assets/ios-download.png'
const Footer = () => {
    const navigate = useNavigate();
    // const { getCartCount, token } = useContext(AppContext)
    return (
        <>
            <hr className='bg-[#00AECD] ' />
            <div className="w-full h-full md:h-[400px] px-10 lg:h-[400px] flex items-center justify-center bg-cover bg-center relative sm:0px">
                <div className="absolute inset-0  z-0"></div>
                <div className='grid md:grid md:grid-cols-2 lg:grid-cols-3 my-10 z-10'>
                    {/* Asian Lab Image with contennt */}
                    <div>
                        <NavLink to='/'>
                            <div className='flex items-end gap-4'>
                                <img src={logo} className="w-[120px] sm:w-[100px]" alt="" />
                            </div>
                        </NavLink>
                        <p className='py-6 text-justify text-[#00AECD]'>Laboratories used for scientific research take many forms because of the differing. We provide complete process piping capabilities.</p>
                        <div className='flex items-center gap-6'>
                            <FaInstagram className='bg-white text-[#00AECD] text-4xl hover:drop-shadow-xl shadow-2xl p-1 rounded-lg transition-all cursor-pointer' />
                            <FaFacebookSquare className='bg-white text-[#00AECD] text-4xl hover:drop-shadow-xl shadow-2xl p-1 rounded-lg  transition-all cursor-pointer' />
                        </div>
                        <p className='my-4 text-[#00AECD]'>© 2025 Asian Lab. All rights reserved</p>
                    </div>                   

                    {/* Useful Links */}
                    {/* <div className='sm:px-8 mt-5 sm:mt-0'>
                        <div className='flex items-center gap-1'>
                            <p className='bg-white w-4 h-0.5'></p>
                            <h1 className='px-10 text-2xl text-[#00AECD]'>Useful Links</h1>
                            <p className='bg-white w-4 h-0.5'></p>
                        </div>
                        <div className='flex flex-col'>
                            <NavLink to='/about' className='flex text-[#00AECD] items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all'>
                                <IoIosArrowDropright />About Us
                            </NavLink>
                            <NavLink to='/cart' className='flex text-[#00AECD] items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all'>
                                <IoIosArrowDropright />Cart
                            </NavLink>
                            <NavLink to='/contact' className='flex text-[#00AECD] items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all'>
                                <IoIosArrowDropright />Contact Us
                            </NavLink>
                        </div>
                    </div> */}

                    {/* Address, Phone No, Email */}
                    <div className='sm:px-8 py-5 mt-5 sm:mt-0'>
                        <div className='flex items-center gap-1 mt-[-18px]'>
                            <p className='bg-white w-4 h-0.5'></p>
                            <h1 className='px-10 text-2xl text-[#00AECD]'>Address</h1>
                            <p className='bg-white w-4 h-0.5'></p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='flex items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all text-[#00AECD]'>
                                <LuPhoneCall className='text-4xl py-2' /><a href="tel:+9101294253000" className='text-[#00AECD]'>0129 - 4253000 </a>
                            </p>
                            <p className='flex items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all text-[#00AECD]'>
                                <CiLocationOn className='text-6xl py-2 w-10 h-10' />Badkal Flyover, Road, Sector 21A, Faridabad, Haryana 121001
                            </p>
                            <p className='flex items-center gap-2 py-1 hover:translate-y-[-2px] duration-500 transition-all text-[#00AECD]'>
                                <MdAlternateEmail className='text-4xl py-2' /><a href="mailto:asianlabs@aimsindia.com">asianlabs@aimsindia.com</a>
                            </p>
                        </div>
                    </div>

                    {/* Asian Connect */}
                    <div>
                         <div className='flex items-center gap-1 mt-[-18px]'>
                             <h1 className='px-10 text-lg text-[#00AECD] mt-6 mx-auto'>Download Asian Connect 2.0</h1>
                        </div>
                        <div>
                            <center>
                           <NavLink to='https://play.google.com/store/apps/details?id=com.asianhospital'>
                                <img src={Andorid} alt="" className='my-6' />
                           </NavLink>
                            <NavLink to='https://apps.apple.com/in/app/asian-connect-2-0/id6446682188'>
                                <img src={ios} alt="" className='my-6' />
                           </NavLink>
                            </center>
                        </div>
                    </div>

                </div>
            </div>
            {/* Call to action */}
            <div>
                <a href="tel:+9101294253000">
                    <img src={callImage} className='w-full max-w-[60px] bg-[#00AECD] rounded-full py-2 fixed bottom-20 right-0 cursor-pointer z-10' alt="" />
                </a>
            </div>
        </>
    )
}

export default Footer