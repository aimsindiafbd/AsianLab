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
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        address: '',
        state: '',
        zipcode: '',
        country: '',
        phone: ''
    });

    // Load cart from localStorage if empty
    useEffect(() => {
        if (!Object.keys(cartItem).length) {
            const storedCart = localStorage.getItem("cartItem");
            if (storedCart) {
                setCartItem(JSON.parse(storedCart));
            }
        }
    }, []);

    const onChangeHandler = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const buildOrderItems = () => {
        const orderItems = [];

        for (const testId in cartItem) {
            for (const itemName in cartItem[testId]) {
                if (cartItem[testId][itemName] > 0) {
                    const itemInfo =
                        TestPrices.HealthPackage.find(test => test.id === testId) ||
                        TestPrices.ObsGynae.find(test => test.id === testId) ||
                        TestPrices.OperativePackage.find(test => test.id === testId);

                    if (itemInfo) {
                        orderItems.push({
                            id: testId,
                            name: itemName,
                            quantity: cartItem[testId][itemName],
                            price: itemInfo.Price,
                        });
                    }
                }
            }
        }

        return orderItems;
    };

    const handleCashOnDelivery = async () => {
        setLoadingCOD(true);
        try {
            const orderData = {
                address: formData,
                items: buildOrderItems(),
                amount: getCartAmount(),
            };

            const response = await axios.post(`${backendUrl}/api/order/cash`, orderData, { headers: { token } });
            if (response.data.success) {
                setCartItem({});
                localStorage.removeItem("cartItem");
                toast.success("Order placed successfully!");
                navigate("/orders");
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("COD Error:", error);
            toast.error("Failed to place Cash on Delivery order.");
        }finally{
            setLoadingCOD(false)
        }
    };

    const handleOnlinePayment = async () => {
        setLoadingOnline(true);
        try {
            const orderData = {
                address: formData,
                items: buildOrderItems(),
                amount: getCartAmount(),
            };

            const res = await axios.post(`${backendUrl}/api/order/place-order`, orderData, { headers: { token } });

            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                amount: res.data.order.amount,
                currency: res.data.order.currency,
                name: 'Order Payment',
                description: 'Payment for test packages',
                order_id: res.data.order.id,
                handler: async (response) => {
                    try {
                        const verifyRes = await axios.post(`${backendUrl}/api/order/verifyRazorpay`, response, {
                            headers: { token },
                        });

                        if (verifyRes.data.success) {
                            setCartItem({});
                            localStorage.removeItem("cartItem");
                            toast.success("Payment successful!");
                            navigate("/orders");
                        } else {
                            toast.error("Payment verification failed.");
                        }
                    } catch (err) {
                        toast.error("Verification error. Try again.");
                    }finally{
                        setLoadingOnline(false);
                    }
                },
                prefill: {
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    contact: formData.phone,
                },
                theme: {
                    color: "#01ABCE",
                },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (error) {
            console.error("Online Payment Error:", error);
            toast.error("Failed to initialize online payment.");
            setLoadingOnline(false)
        }
    };

    return (
        <div className='px-10 flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
            {/* Left: User Info */}
            <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
                <h1 className='text-xl sm:text-2xl my-3'>User Information</h1>
                <div className='flex gap-3'>
                    <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name' />
                    <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name' />
                </div>
                <input required onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email Address' />
                <input required onChange={onChangeHandler} name='address' value={formData.address} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Address' />
                <div className='flex gap-3'>
                    <input required onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
                    <input required onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
                </div>
                <div className='flex gap-3'>
                    <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='ZipCode' />
                    <input required onChange={onChangeHandler} name='country' value={formData.country} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
                </div>
                <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone Number' />
            </div>

            {/* Right: Cart Summary + Payment */}
            <div className='mt-8'>
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
                           {loadingCOD ? "Processing..." : "Cash on Delivery"}
                        </button>
                        <button
                            onClick={handleOnlinePayment}
                            className='bg-[#01ABCE] text-white rounded-md p-3 border text-center'
                        >
                            {loadingOnline ? "Processing..." : "Pay Online"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
