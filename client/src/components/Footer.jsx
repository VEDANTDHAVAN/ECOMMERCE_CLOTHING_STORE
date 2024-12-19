/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-xs'>
         <div>
            <img src="clothesLogo.png" className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-500'>
            <b>Fabric Fusion -</b> Redefining fashion with timeless elegance and modern flair. Explore our exclusive collections crafted with premium fabrics and innovative designs. Connect with us for updates, offers, and style inspiration.
            </p>
         </div>
         <div>
            <p className='text-xl font-bold mb-5 text-cyan-950'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-cyan-800'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delievery</li>
                <li>Privacy Policy</li>
            </ul>
         </div>
         <div>
           <p className='text-2xl font-bold mb-5 text-cyan-600'>
            GET IN TOUCH
           </p>
           <ul className='flex flex-col gap-2 text-cyan-950'>
            <li>+91-8850780964</li>
            <li>vedantadhavan11@gmail.com</li>
           </ul>
         </div>
        </div>
        <div>
            <hr />
            <p className='font-bold text-cyan-950'>Copyright 2024 @ fabricfusion.com - ALL RIGHTS RESERVED</p>
        </div>
    </div>
  )
}

export default Footer