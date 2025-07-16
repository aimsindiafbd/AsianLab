import { createContext, useEffect, useState } from "react";
import { TestPrices } from '../assets/assets.js';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from 'axios';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState({});
    const navigate = useNavigate();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [token, setToken] = useState('');

    // add to cart
    // const addToCart = async (itemId, name) => {
    //     let cartData = { ...cartItem };
    //     if (cartData[itemId]) {
    //         if (cartData[itemId][name]) {
    //             cartData[itemId][name] += 1;
    //         }
    //     } else {
    //         cartData[itemId] = {};
    //         cartData[itemId][name] = 1;
    //     }
    //     setCartItem(cartData);

    //     if (token) {
    //         try {
    //             await axios.post(backendUrl + '/api/cart/add', { itemId, name }, { headers: { token } });
    //         } catch (error) {
    //             console.log(error);
    //             toast.error(error.message);
    //         }
    //     }
    // };

    // // get cart count
    // const getCartCount = () => {
    //     let totalCount = 0;
    //     for (const items in cartItem) {
    //         for (const item in cartItem[items]) {
    //             try {
    //                 if (cartItem[items][item] > 0) {
    //                     totalCount += cartItem[items][item];
    //                 }
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         }
    //     }
    //     return totalCount;
    // };

    // const updateQuantity = async (itemId, name, quantity) => {
    //     let cartData = { ...cartItem };

    //     if (cartData[itemId] && cartData[itemId][name]) {
    //         delete cartData[itemId][name];
    //         if (Object.keys(cartData[itemId]).length === 0) {
    //             delete cartData[itemId];
    //         }

    //         setCartItem(cartData);
    //         if (token) {
    //             try {
    //                 await axios.post(backendUrl + '/api/cart/update', { itemId, name, quantity }, { headers: { token } });
    //             } catch (error) {
    //                 console.log(error);
    //                 toast.error(error.message);
    //             }
    //         }
    //     }
    // };

    // const getCartAmount = () => {
    //     let totalAmount = 0;
    //     for (const items in cartItem) {
    //         const allTests = [
    //             ...TestPrices.HealthPackage,
    //             ...TestPrices.ObsGynae,
    //             ...TestPrices.OperativePackage,
    //         ];
    //         let itemInfo = allTests.find((test) => test.id === items);
    //         for (const item in cartItem[items]) {
    //             try {
    //                 if (cartItem[items][item] > 0) {
    //                     totalAmount += itemInfo.Price;
    //                 }
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         }
    //     }
    //     return totalAmount;
    // };

    // const getUserCart = async (token) => {
    //     try {
    //         const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } });
    //         if (response.data.success) {
    //             setCartItem(response.data.cartData);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         toast.error(error.message);
    //     }
    // };

    // // fetch token and cart from local storage on mount
    // useEffect(() => {
    //     if (!token && localStorage.getItem('token')) {
    //         const savedToken = localStorage.getItem('token');
    //         setToken(savedToken);
    //         getUserCart(savedToken);
    //     }
    // }, []);

    // // debug log cart
    // useEffect(() => {
    //     console.log("Add To Cart", cartItem);
    // }, [cartItem]);

    const value = {
        TestPrices,
        // cartItem,
        // addToCart,
        // getCartCount,
        // updateQuantity,
        // getCartAmount,
        navigate,
        backendUrl,
        // setToken,
        // token,
        // setCartItem,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
