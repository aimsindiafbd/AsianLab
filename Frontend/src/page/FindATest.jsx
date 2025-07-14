import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContent";

const FindATest = () => {
    const navigate = useNavigate();
    const { TestPrices } = useContext(AppContext);

    return (
        <div>
            <h1 className="text-3xl text-black font-medium text-center my-6">Obs & Gynae</h1>
            <div className="grid grid-cols-3 ml-10 mt-10">
                {TestPrices?.ObsGynae?.map((item, index) => (
                    <div onClick={() => navigate(`/testDetails/${item.id}`)} key={index} style={{ backgroundColor: item.backgroundColor }} className='min-w-[250px] w-full sm:w-72 md:w-80 lg:w-[350px] p-4 rounded-lg shadow-lg hover:translate-y-[-10px] transition-all duration-500 my-3'>
                        <p className="text-black text-2xl font-bold sm:text-xl">{item.name}</p>
                        <p className="text-black font-normal line-through text-xl sm:text-lg flex justify-end">MRP: ₹{item.MRP}</p>
                        <p className="text-black font-medium text-xl sm:text-xl flex justify-end">Offer Price: ₹{item.Price}</p>
                        <p className="mt-4 bg-[#00AECD] text-white text-center py-2 px-6 font-medium hover:bg-transparent border border-white transition-all hover:text-black cursor-pointer"
                        >
                            View Details
                        </p>
                    </div>
                ))}
            </div>

            <h1 className="text-3xl text-black font-medium text-center my-6">Operative Packages</h1>
            <div className="grid grid-cols-3 ml-10 mt-10">
                {TestPrices?.OperativePackage?.map((item, index) => (
                    <div onClick={() => navigate(`/testDetails/${item.id}`)} key={index} style={{ backgroundColor: item.backgroundColor }} className='min-w-[250px] w-full sm:w-72 md:w-80 lg:w-[350px] p-4 rounded-lg shadow-lg hover:translate-y-[-10px] transition-all duration-500 my-3'>
                        <p className="text-black text-2xl font-bold sm:text-xl">{item.name}</p>
                        <p className="text-black font-normal line-through text-xl sm:text-lg flex justify-end">MRP: ₹{item.MRP}</p>
                        <p className="text-black font-medium text-xl sm:text-xl flex justify-end">Offer Price: ₹{item.Price}</p>
                        <p className="mt-4 bg-[#00AECD] text-white text-center py-2 px-6 font-medium hover:bg-transparent border border-white transition-all hover:text-black cursor-pointer"
                        >
                            View Details
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FindATest;
