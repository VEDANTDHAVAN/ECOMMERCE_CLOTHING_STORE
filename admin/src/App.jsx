/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className='bg-cyan-100 min-h-screen'>
      <>
      <Navbar />
      <hr/>
      <div className='flex w-full'>
       <Sidebar />
      </div>
      </>
    </div>
  )
}

export default App
