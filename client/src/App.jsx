import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'

import Customizer from './pages/Customizer'
import Register from './pages/Register'
import EmployeeList from './pages/EmployeeList'
import axios from 'axios';
import { Toaster } from 'react-hot-toast'
import CanvasModel from './canvas'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {
  return (
    <>
     <main className='app transition-all ease-in'>
     <Navbar/>
      <Customizer/>
      <Toaster position='bottom-left' toastOptions={{duration: 2000}}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/employeeList" element={<EmployeeList/>}/>
      </Routes>
      <CanvasModel/>
     </main>
    </>
  )
}

export default App

