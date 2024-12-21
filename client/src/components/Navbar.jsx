/* eslint-disable no-unused-vars */
import "../styles/navbar.css";
import {useContext, useState} from 'react';
import {assets} from '../assets/assets/frontend_assets/assets'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ShopContext } from "../context/ShopContext";
function Navbar() {
    const navigate = useNavigate();
    const [iconActive, setIconActive] = useState(false);
    const logoutFunc = () => {
        //dispatch(setUserInfo({}));
        localStorage.removeItem("token");
        navigate("/login");
      }; 

    const [visible, setVisible] = useState(false); 
    const {setShowSearch, getCartCount} = useContext(ShopContext);

    return (
    <header>
      <nav className={iconActive ? "nav-active" : "flex"}>
       <h2 className="nav-logo flex gap-4 font-serif">
          <NavLink to={"/"}><img src="./clothesLogo.png" className='w-30 h-20 object-fill'/>Fabric Fusion</NavLink>
       </h2>
       <ul className="nav-links flex gap-6">
       <NavLink className="btn" to={"/"}>
            Home
          </NavLink>
          <NavLink className="btn" to={"/about"}>
            About
          </NavLink>
          <NavLink  className="btn" to={"/collection"}>
            Collection
          </NavLink>
          <NavLink className="btn" to={"/customize"}>
           Customize
          </NavLink>
          <NavLink  className="btn" to={"/contact"}>
            Contact
          </NavLink>
          <NavLink  className="btn " to={"/employeeList"}>
            Admin
          </NavLink>
          <NavLink  className="btn " to={"/login"}>
            Login
          </NavLink>
          <NavLink  className="btn " to={"/register"}>
            Register
          </NavLink>
       </ul>
      </nav>
      <div className="flex items-center gap-6">
          <img onClick={()=> setShowSearch(true)} src={assets.search_icon} className="w-5 gap-5 cursor-pointer" alt="search" />
       </div>
       <div className="group relative">
        <img src={assets.profile_icon} alt="profile" className="w-5 gap-2 cursor-pointer"/>
        <div className="group-hover:flex hidden absolute dropdown-menu right-0 pt-4">
         <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-cyan-300 rounded">
           <p className="cursor-pointer hover:text-black">My Profile</p>
           <p className="cursor-pointer hover:text-black">Orders</p>
           <p className="cursor-pointer hover:text-black" onClick={logoutFunc}>Logout</p>
         </div>
        </div>
       </div>
       <NavLink to={'/cart'} >
         <img src={assets.cart_icon} alt="cart" className="w-5 min-w-5" />
         <p className="absolute right-[-3px] bottom-[-7px] w-4 text-center leading-3 bg-black text-white aspect-square rounded-full text-[10px] p-1">{getCartCount()}</p>
        </NavLink>
    </header>
  )
}

export default Navbar
