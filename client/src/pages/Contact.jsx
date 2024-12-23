/* eslint-disable no-unused-vars */
import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets/frontend_assets/assets'
import NewsLetter from '../components/NewsLetter'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
       <Title text1={'CONTACT'} text2={'US'}/>
       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-20'>
        <img src={assets.contact_img} alt="" className='w-full md:max-w-[480px]'/>
        <div className='flex flex-col items-start gap-6'>
          <p className='font-semibold text-xl text-cyan-800'>OUR STORE</p>
          <p className='text-cyan-600'> <b>Street: </b> 34, 1st Floor, Hanuman Bldg, Shamrao Vittal Marg, Chowpatty <br />
            <b>City:</b>   Mumbai, <b>State:</b> Maharashtra <br /> <b>Phone number:</b>  8850780964 <b>Zip code:</b>  400007 <br />
            <b>Country calling code:</b>  +91 Country:  India</p>
          <p className='text-cyan-600'><b>Email:</b> vedantadhavan11@gmail.com</p>
        </div>
       </div> 
       <NewsLetter />
      </div>
    </div>
  )
}

export default Contact