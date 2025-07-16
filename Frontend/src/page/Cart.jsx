// import React, { useContext, useEffect, useState } from "react";
// import { MdDelete } from "react-icons/md";
// import CartTotal from "../components/CartTotal";
// import { AppContext } from "../context/AppContent";

// const Cart = () => {
//   const { TestPrices, cartItem, updateQuantity, navigate } = useContext(AppContext);
//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {
//     const tempData = [];
//     for (const items in cartItem) {
//       for (const item in cartItem[items]) {
//         if (cartItem[items][item] > 0) {
//           tempData.push({
//             _id: items,
//             name: item,
//           });
//         }
//       }
//     }
//     setCartData(tempData);
//     console.log("Cart Data:", tempData);
//   }, [cartItem]);

//   return (
//     <div className="border-t pt-14 px-10">
//       <div className="text-2xl mb-3">
//         <h1>Your Cart</h1>
//       </div>

//       <div>
//         {cartData.map((item, index) => {
//           const allTests = [
//             ...TestPrices.HealthPackage,
//             ...TestPrices.ObsGynae,
//             ...TestPrices.OperativePackage,
//           ];

//           const TestData = allTests.find((test) => test.id === item._id);

//           return (
//             <div
//               key={index}
//               className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
//             >
//               <div className="flex items-start gap-6">
//                 <div>
//                   <p className="text-xs sm:text-lg font-medium text-[#00AECD]">
//                     {TestData?.name || "Unknown Item"}
//                   </p>
//                   <div className="flex items-center gap-5 mt-2">
//                     <p>{TestData?.Package}</p>
//                   </div>
//                 </div>
//               </div>
//               <p className="font-semibold text-black text-2xl">
//                 ₹ {TestData?.Price || 0}
//               </p>
//               <p className="text-black text-2xl cursor-pointer">
//                 <MdDelete onClick={() => updateQuantity(item._id, item.name, 0)} />
//               </p>
//             </div>
//           );
//         })}
//       </div>

//       <div className="flex justify-end my-20">
//         <div className="w-full sm:w-[450px]">
//           <CartTotal />
//           <div className="w-full text-end">
//             <button
//               onClick={() => navigate('/place-order')}
//               className="mt-4 bg-[#00AECD] text-white py-2 px-6 rounded-lg w-full"
//             >
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Cart;

import React from 'react'

const Cart = () => {
  return (
    <div className='center bg-[#00AECD] text-white py-20'>
      <center>
        <h1 className='text-4xl font-semibold py-6'>For Book An Appointment:-</h1>
      <p className='text-2xl font-semibold'>Call Us: <a href="tel:+0129 - 4253000" className='font-normal'>0129 - 4253000</a></p>
      <p className='text-xl font-bold py-4'>or</p>
      <p className='text-2xl '><b>Email us:</b><a href='emailto:asianlabs@aimsindia.com' className='font-normal'> asianlabs@aimsindia.com</a></p>
      </center>
    </div>
  )
}

export default Cart
