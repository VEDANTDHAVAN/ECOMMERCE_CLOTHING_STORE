import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Canvas from './canvas'
import Customizer from './pages/Customizer'
import Register from './pages/Register'
import axios from 'axios';
import { Toaster } from 'react-hot-toast'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {
  return (
    <>
     <main className='app transition-all ease-in'>
      <Canvas/>
      <Customizer/>
      <Navbar/>
      <Toaster position='bottom-left' toastOptions={{duration: 2000}}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
     </main>
    </>
  )
}

export default App

