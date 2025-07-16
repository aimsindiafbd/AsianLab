import React, { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import Logo from '../assets/Asian_logo.png'
import DeliveryBoy from '../assets/DeliveryBoy.png'
import TopLogo from '../assets/AsianLogo.png'
const TopHearder = () => {
  const [location,setLocation] = useState({
    city:'',
    state:'',
    pincode:'',
  })
  const [error,setError] = useState("")
  const getLocation = ()=>{
    if(!navigator.geolocation){
      setError("Geolocation is not supported by your browser")
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async({coords})=>{
        try {
          const resp = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}`
          );
          const data = await resp.json();
          const addr = data.address || {};
          const city = addr.city || addr.town || addr.village || "";
          const state = addr.state||"";
          const pincode = addr.postcode || "";
          setError("");
          setLocation({ city, state, pincode });
        } catch (error) {
          setError("Failed to fetch location. Try again.");
        }
      },()=>{
        setError("Location access denied. Enable GPS & try again.");
      }
    )
  }
  useEffect(() => {
    getLocation();
  }, []);
  return (
  <>
<div className="bg-[#e5e2e2] px-4 py-2">
  <div className="flex flex-col sm:flex-row sm:items-center justify-around sm:gap-10">
    {/* Free Home Collection */}
    <div className="flex items-center gap-2 text-lg mb-2 sm:mb-0">
      <span className="text-black">Free Home Collection</span>
      <img src={DeliveryBoy} className="w-8 h-8 inline-block" alt="Delivery Boy" />
    </div>

    {/* Asian Institute Info */}
    <NavLink to="/" className="flex items-center gap-3 text-black">
      <img src={TopLogo} className="h-8" alt="Asian Logo" />
      <p className="pt-1 text-sm sm:text-base font-medium">Asian Institute of Medical Sciences</p>
    </NavLink>
  </div>
</div>



    <div className='bg-white'>
      <div className='flex justify-between'>
        <div>
        <NavLink to='/'>
          <img src={Logo} className="w-[120px] sm:w-[170px]" alt="" />
        </NavLink>
        </div>
       <div className='flex justify-between gap-4 px-5'>
          {/* Location */}
          <div className="flex items-center gap-1">
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            location.city && (
              <>
                <CiLocationOn className="text-2xl text-[#00AECD]" />
                <p className="text-black">
                  {location.city}
                  {location.pincode && `, ${location.pincode}`}
                </p>
              </>
            )
          )}
        </div>
       <div className="hidden sm:flex items-center gap-2">
        <FaPhone className="text-lg text-[#00AECD]" />
        <a href="tel:+9101294253000" className="text-black text-sm">
          0129 - 4253000
        </a>
      </div>
        <div className="hidden sm:flex items-center gap-2">
        <IoIosMail className="text-2xl text-[#00AECD]" />
        <a href="mailto:asianlabs@aimsindia.com" className="text-black text-sm">
         asianlabs@aimsindia.com
        </a>
      </div>
       </div>
      </div>
    </div>
  </>
  )
}

export default TopHearder