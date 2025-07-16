import React, { useContext, useState, useEffect } from 'react';
import CartTotal from '../components/CartTotal';
import { AppContext } from '../context/AppContent';
import axios from 'axios';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
    const { navigate, cartItem, setCartItem, TestPrices, getCartAmount, backendUrl, token } = useContext(AppContext);
    const [loadingCOD, setLoadingCOD] = useState(false);
    const [loadingOnline, setLoadingOnline] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', address: '',
        city: '', state: '', zipcode: '', country: '', phone: '', package: ''
    });
    const onChangeHandler = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${backendUrl}/api/contact`, formData) // update if different backend URL
            if (res.data.success) {
                toast.success("Form submitted successfully!");
                setFormData({
                    firstName: '', lastName: '', email: '', address: '',
                    city: '', state: '', zipcode: '', country: '', phone: '', package: ''
                });
            } else {
                toast.error(res.data.message || "Submission failed.");
            }
        } catch (err) {
            toast.error("Something went wrong!");
            console.error(err);
        }
    };

    return (
        <div className='px-10 pt-5 sm:pt-14 min-h-[80vh] border-t mx-auto'>
            {/* Left: User Info */}
            <div className='gap-4 w-full sm:max-w-[480px] mx-auto'>
                <form onSubmit={handleSubmit} className='gap-4 w-full sm:max-w-[480px] mx-auto'>
                    <h1 className='text-xl sm:text-2xl my-3 text-center'>User Information</h1>

                    <div className='flex gap-3 py-2'>
                        <input required name='firstName' value={formData.firstName} onChange={onChangeHandler} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name' />
                        <input required name='lastName' value={formData.lastName} onChange={onChangeHandler} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name' />
                    </div>

                    <div className='py-2 flex gap-3'>
                        <input required name='email' value={formData.email} onChange={onChangeHandler} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email Address' />
                        <input required name='address' value={formData.address} onChange={onChangeHandler} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Address' />
                    </div>

                    <div className='flex gap-3 py-2'>
                        <input required name='city' value={formData.city} onChange={onChangeHandler} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
                        <input required name='state' value={formData.state} onChange={onChangeHandler} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
                    </div>

                    <div className='flex gap-3 py-2'>
                        <input required name='zipcode' value={formData.zipcode} onChange={onChangeHandler} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='ZipCode' />
                        <input required name='country' value={formData.country} onChange={onChangeHandler} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
                    </div>

                    <input required name='phone' value={formData.phone} onChange={onChangeHandler} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone Number' />

                    <div className='flex gap-3 py-2'>
                        <select required name="package" value={formData.package} onChange={onChangeHandler} className='border border-gray-300 rounded py-1.5 px-3.5 w-full'>
                            <option value="">Select Package</option>
                            <option value="Asian HealthFit Bronze">Asian HealthFit Bronze</option>
                            <option value="Asian HealthFit Silver">Asian HealthFit Silver</option>
                            <option value="Asian HealthFit Gold">Asian HealthFit Gold</option>
                            <option value="Asian HealthFit Platinum - Male">Asian HealthFit Platinum - Male</option>
                            <option value="Asian HealthFit Platinum - Female">Asian HealthFit Platinum - Female</option>
                            <option value="Asian HealthFit Sapphire - Male">Asian HealthFit Sapphire - Male</option>
                            <option value="Asian HealthFit Sapphire - Female">Asian HealthFit Sapphire - Female</option>
                            <option value="Antel-Natal Panel-1">Antel-Natal Panel-1</option>
                            <option value="Antel-Natal Panel-2">Antel-Natal Panel-2</option>
                            <option value="PCOD Panel">PCOD Panel</option>
                            <option value="Infertility Comprehensive Panel Female">Infertility Comprehensive Panel Female</option>
                            <option value="Fertility Panel Male">Fertility Panel Male</option>
                            <option value="Pre-Conceptional Panel">Pre-Conceptional Panel</option>
                            <option value="Pre-Operative Panel Minor">Pre-Operative Panel Minor</option>
                            <option value="Pre-Operative Panel Major">Pre-Operative Panel Major</option>
                        </select>
                    </div>

                    <center>
                        <button type="submit" className='bg-[#01ABCE] text-white rounded-md py-3 px-10 border my-10 text-center flex'>
                            Submit
                        </button>
                    </center>
                </form>
            </div>

            {/* Right: Cart Summary + Payment */}
            {/* <div className='mt-8'>
                <div className='mt-8 min-w-80'>
                    <CartTotal />
                </div>

                <div className='mt-12'>
                    <h1 className='text-lg font-semibold mb-3'>Select Payment Method</h1>
                    <div className='flex flex-col gap-4'>
                        <button
                            onClick={handleCashOnDelivery}
                            className='bg-[#01ABCE] text-white rounded-md p-3 border text-center'
                        >
                           {loadingCOD ? "Processing..." : "Pay Online"}
                        </button>
                        <button
                            onClick={handleOnlinePayment}
                            className='bg-[#01ABCE] text-white rounded-md p-3 border text-center'
                        >
                            {loadingOnline ? "Processing..." : "Pay Online"}
                        </button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default PlaceOrder;
