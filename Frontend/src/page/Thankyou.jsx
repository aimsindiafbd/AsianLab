import React from 'react'
import check from '../assets/check.jpg'
import Andorid from '../assets/google-play-download.png'
import ios from '../assets/ios-download.png'
import { NavLink } from 'react-router-dom'
const Thankyou = () => {
    return (
        <div className='mx-auto w-1/2 shadow-lg rounded-2xl my-10'>
            <div>
                <center>
                    <img src={check} className='w-1/6' alt="" />
                    <h1 className='text-[#01ABCE] text-2xl'>Thank You for choosing Asian Lab!</h1>
                    <p>We have received your booking request</p>
                    <p>Our Medical Experts will get in touch <br/> with you shortly</p>
                    <p>Download our Asian Connect 2.0 <br/> for better experience</p>
                    <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                        <NavLink to='https://play.google.com/store/apps/details?id=com.asianhospital'>
                        <img src={Andorid} alt="" className='my-6' />
                    </NavLink>
                    <NavLink to='https://apps.apple.com/in/app/asian-connect-2-0/id6446682188'>
                        <img src={ios} alt="" className='my-6' />
                    </NavLink>
                    </div>
                </center>
            </div>
        </div>
    )
}

export default Thankyou