/* eslint-disable no-unused-vars */
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Model from './pages/Model'
import Login from './pages/Login'
import Register from './pages/Register'
import EmployeeList from './pages/EmployeeList'
import axios from 'axios';
import { Toaster } from 'react-hot-toast'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import PlaceOrder from './pages/PlaceOrder'
import Order from './pages/Order'
import Product from './pages/Product'
import Home from './pages/Home'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css'
import Cart from './pages/Cart'
import Admin from './pages/Admin'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {
  
  return (
    <>
     <div className=' transition-all ease-in'>
     <ToastContainer />
     <Navbar/>
     <SearchBar/>
      <Toaster position='bottom-left' toastOptions={{duration: 2000}}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/employeeList" element={<EmployeeList/>}/>
        <Route path="/admin"  element={<Admin/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}/>
        <Route path="/orders" element={<Order/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/customize" element={<Model/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/orders" element={<Orders/>}/>
      </Routes>
      <Footer/>
     </div>
    </>
  )
}

export default App

