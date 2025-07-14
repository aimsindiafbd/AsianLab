import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContent";

const FullBodyCheckupList = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const { TestPrices } = useContext(AppContext)
  console.log(TestPrices.FullBody);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="my-6 rounded-xl py-6 px-4">
      {/* Heading & View All Button */}
        <h1 className="text-3xl text-black font-medium mb-4 sm:mb-0 text-center">
          Asian HealthFit Package
        </h1>
      <div className="grid grid-cols-3 ml-10 mt-10">
        {TestPrices.HealthPackage.map((item, index) => (
          <div onClick={() => navigate(`/testDetails/${item.id}`)} key={index}  style={{ backgroundColor: item.backgroundColor }} className='min-w-[250px] w-full sm:w-72 md:w-80 lg:w-[350px] p-4 rounded-lg shadow-lg flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 snap-start my-3'>
            <div className="grid grid-cols-2">
              <p className="text-black text-2xl font-bold sm:text-xl">{item.name}</p>
            <p className="text-black text-lg sm:text-xl text-right text-bold">Test: <span className="bg-[#00AECD] px-2 py-1 text-white font-semibold">{item.Test}</span></p>
            </div>
            <p className="text-black font-normal line-through text-xl sm:text-lg flex justify-end">MRP: ₹{item.MRP}</p>
            <p className="text-black font-medium text-xl sm:text-xl flex justify-end">Offer Price: ₹{item.Price}</p>
            <p onClick={() => navigate(`/testDetails/${item.id}`)} className="mt-4 bg-[#00AECD] text-white text-center py-2 px-6 font-medium hover:bg-transparent border border-white transition-all hover:text-black cursor-pointer"
            >
              View Details
            </p>
            <p className="text-center font-medium text-sm">{item.notice}*</p>
          </div>
        ))}
      </div>
      <p onClick={()=>navigate('/find-a-test')} className="text-white text-xl text-center bg-[#00AECD] w-1/5 mx-auto py-4 rounded-lg cursor-pointer">View All Package</p>
    </div>
  );
};

export default FullBodyCheckupList;
