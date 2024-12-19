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

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {
  return (
    <>
     <div className=' transition-all ease-in'>
     <Navbar/>
      <Toaster position='bottom-left' toastOptions={{duration: 2000}}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/employeeList" element={<EmployeeList/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/customize" element={<Model/>}/>
      </Routes>
     </div>
    </>
  )
}

export default App

