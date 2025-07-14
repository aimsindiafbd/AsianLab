import React, { useContext, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContent";
import { CiShoppingCart } from "react-icons/ci";
import { toast } from 'react-toastify'
const TestDetails = () => {
  const { id } = useParams();  // Get test ID from URL
  const navigate = useNavigate();
  const { TestPrices } = useContext(AppContext);  // Get test data and cart context
  // const [selectedIndex, setSelectedIndex] = useState(0);
  const test = TestPrices.HealthPackage.find(test => test.id === id)||
               TestPrices.ObsGynae.find(test=>test.id===id)||
               TestPrices.OperativePackage.find(test=>test.id===id);


  if (!test) {
    return <div className="text-center text-red-500 text-xl font-bold">Test not found</div>;
  }


  return (
    <>
    {/*Banner */}
    {/* <div>
      <img src={Banner} alt="Banner" className="w-full h-1/6 bg-cover" />
    </div> */}
    <div className=" grid grid-cols-2 my-20 p-4 py-3 gap-10">
      <div className="px-10 shadow-2xl">
         <div className="grid grid-cols-2">
                 <h2 className="text-2xl font-semibold text-[#00AECD] my-4">{test.name}</h2>
                 {test.Test &&(
                   <p className="my-4 text-right text-xl font-semibold">Test:<span className="bg-[#00AECD] px-2 py-1 text-white font-semibold">{test.Test}</span></p>
                 )}
               </div>
                <p className=" text-justify"><strong>Test Includes: </strong>{test.TestInclude}</p>
                <div className="sm:flex block justify-between">
                    <div className="sm:my-6 my-2 w-full">                    
                        <p className="text-[#00B69D] font-medium text-lg sm:py-1 text-right  line-through"><strong>MRP:</strong> ₹{test.MRP}</p>
                        <p className="text-black font-medium text-lg sm:py-1 text-right"><strong>Offer Price:</strong> ₹{test.Price}</p>
                       <NavLink to='/payment'>
                         <p
                            
                            className='px-4 py-2 rounded bg-[#00AECD] font-semibold cursor-pointer text-white  text-center'
                        >
                            Book Now
                        </p>
                       </NavLink>
                    </div>
                </div>
      </div>
      <div className="mx-auto">
         {/* Cart Details 
            {getCartCount() > 0 && (
                <div className="bg-[#00AECD] justify-around w-80 z-10 px-5 py-10 shadow-2xl rounded">
                    <p className="text-white font-medium uppercase my-4">
                        Test in your cart: {getCartCount()}
                    </p>
                    <p
                        onClick={() => {
                            const token = localStorage.getItem('token'); // Check for the token in localStorage
                            if (token) {
                                navigate('/cart'); // Redirect to cart if token is present
                            } else {
                                navigate('/register'); // Redirect to register if token is not present
                            }
                        }}
                        className="cursor-pointer flex items-center justify-between bg-white p-2 rounded-full"
                    >
                        Place Order Now
                        <CiShoppingCart className="bg-[#00AECD] text-3xl p-1 rounded-full" />
                    </p>
                </div>
            )} */}
      </div>
    </div>
    </>
  )
}

export default TestDetails