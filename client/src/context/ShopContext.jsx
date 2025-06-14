/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets.js";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '₹';
    const delivery_fee = 50;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [dbProducts, setDbProducts] = useState([]);
    const [token , setToken] = useState('');
    const navigate = useNavigate();
    
    const addToCart = async (itemId, size)=>{

     if(!size){  
        toast.error('Select Product Size!!');
        return
      }
      let cartData = structuredClone(cartItems);
      if(cartData[itemId]){
        if(cartData[itemId][size]){
          cartData[itemId][size] += 1;
        } else {
          cartData[itemId][size] = 1;
        }
      } else {
        cartData[itemId] = {};
        cartData[itemId][size] = 1;
      }
      setCartItems(cartData);
    };
    
    const getCartCount = ()=> {
      let totalCount = 0;
      for(const items in cartItems){
        for(const item in cartItems[items]){
          try {
            if(cartItems[items][item] > 0){
              totalCount += cartItems[items][item];
            }
          } catch (error) {
            toast.error('Could not get Cart count!!')
          }
        }
      }
      return totalCount
    }

    const updateQuantity = async (itemId, size, quantity) => {
      let cartData = structuredClone(cartItems);
      cartData[itemId][size] = quantity;
      setCartItems(cartData);
    }

    const getCartAmount = ()=> {
      let totalAmount = 0;
      for(const items in cartItems){
        let itemInfo = products.find((product)=> product._id === items);
        for(const item in cartItems[items]){
          try {
            if (cartItems[items][item] > 0) {
              totalAmount += itemInfo.price * cartItems[items][item];
            }
          } catch (error) {
            toast.error('Error Occured in calculating the Total Amount!!') 
          }
        }
      }
      return totalAmount;
    }

    const getProductsData = async ()=> {
      try {
        const response = await axios.get('/api/product/list')
        console.log(response.data) 
        if(response.data.success){
          setDbProducts(response.data.products)
         } else{
          toast.error(response.data.message)
         }
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }

    useEffect(()=> {
      getProductsData()
    },[])
    const value = {
      products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, 
      cartItems, addToCart, getCartCount, updateQuantity, getCartAmount, navigate,
      token, setToken
    }
    return (
        <ShopContext.Provider value={value}>
         {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider

/*import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '₹';
  const delivery_fee = 50;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [dbProducts, setDbProducts] = useState([]);
  const [token , setToken] = useState('');
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error('Select Product Size!!');
      return;
    }
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          toast.error('Could not get Cart count!!')
        }
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      const itemInfo = dbProducts.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0 && itemInfo) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          toast.error('Error Occurred in calculating the Total Amount!!') 
        }
      }
    }
    return totalAmount;
  };

  const getProductsData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products');
      if (response.data) {
        setDbProducts(response.data);
      } else {
        toast.error('No product data received');
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to fetch product data');
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  const value = {
    products: dbProducts,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    token,
    setToken
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;*/
