import React from 'react'
import ContactBg from '../assets/aboutus-bg.png'
import { IoMdMailUnread } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
const Contact = () => {
    return (
        <div>
            <div className="w-full h-[300px] flex items-center justify-center rounded-xl bg-cover bg-center relative"
                style={{ backgroundImage: `url(${ContactBg})` }}>
                {/* <div className="absolute inset-0 bg-black opacity-60 rounded-xl z-0"></div> */}
                <div className='z-10'>
                    <h1 className='text-white text-6xl font-semibold text-center'>Contact Us</h1>
                    <p className='text-white text-center text-2xl py-4'>Our passion comes from our commitment to helping you help others.</p>
                </div>
            </div>
            <div className="w-full h-1/2">
                <iframe
                    className="w-full" height="400"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.7744934498833!2d77.29739107459527!3d28.426060593428513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdde9ae5f2175%3A0x25d73b332736f2df!2sAsian%20Institute%20of%20Medical%20Sciences%20(Asian%20Hospital)!5e0!3m2!1sen!2sin!4v1744799135743!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            <div className='text-center mt-14'>
                <h1 className='text-3xl text-[#01ABCE] uppercase font-semibold'>Get In Touch</h1>
                <p className='py-4'>You have questions? Dont hesitate to contact us,<br /> Our supportteam here to help you by 24*7.</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:px-10 mb-10'>
                <div>
                    <IoMdMailUnread className='text-5xl border border-gray-200 rounded-full p-2 shadow-2xl relative sm:left-28 left-40 top-4 bg-white text-[#01ABCE]' />
                    <div className='border border-gray-300 rounded-lg p-4 shadow-2xl'>
                        <p className='text-center text-2xl font-medium text-[#01ABCE]'>Mail Us 24/7</p>
                        <p className='py-5 text-center text-base'><a href="mailto:info@aimsindia.com">info@aimsindia.com</a></p>
                    </div>
                </div>
                <div>
                    <FaLocationDot className='text-5xl border border-gray-200 rounded-full p-2 shadow-2xl relative sm:left-28 left-40 top-4 bg-white text-[#01ABCE]' />
                    <div className='border border-gray-300 rounded-lg p-4 shadow-2xl'>
                        <p className='text-center text-2xl font-medium text-[#01ABCE]'>Our Location</p>
                        <p className='py-2 text-center text-base'><a href="#">Badkal Flyover, Road, Sector 21A, Faridabad, Haryana 121001</a></p>
                    </div>
                </div>
                <div>
                    <MdAddCall className='text-5xl border border-gray-200 rounded-full p-2 shadow-2xl relative sm:left-28 left-40 top-4 bg-white text-[#01ABCE]' />
                    <div className='border border-gray-300 rounded-lg p-4 shadow-2xl'>
                        <p className='text-center text-2xl font-medium text-[#01ABCE]'>Call US 24/7</p>
                        <p className='py-5 text-center text-base'><a href="tel:+910129 - 4253000">0129 - 4253000</a></p>
                    </div>
                </div>
                <div>
                    <FaCalendarAlt className='text-5xl border border-gray-200 rounded-full p-2 shadow-2xl relative sm:left-28 left-40 top-4 bg-white text-[#01ABCE]' />
                    <div className='border border-gray-300 rounded-lg p-4 shadow-2xl'>
                        <p className='text-center text-2xl font-medium text-[#01ABCE]'>Working Days</p>
                        <p className='pt-2 text-center text-base'>Mon to Fri - 09:00am To 06:00pm</p>
                        <p className='text-center text-base'>Saturday to Sunday - Closed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact