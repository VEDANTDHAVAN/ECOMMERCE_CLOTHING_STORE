/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-10 sm:gap-3 text-center py-20 text-xs sm:text-sm md:text-base text-cyan-950'>
     <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-4' alt='Policy'/>
      <p className='font-bold'>
        Easy Exchange Policy
      </p><br />
     <p className='text-cyan-900'>
     At, <b>Fabric Fusion</b> we prioritize your satisfaction above all else. Our Easy Exchange Policy ensures a hassle-free shopping experience for you. If you&apos;re not completely satisfied with your purchase, you can easily exchange the product within 7 days of delivery. Simply ensure the item is unused, unwashed, and in its original condition with all tags intact.
    Whether it&apos;s a size issue or a preference change, we&apos;ve got you covered. Explore worry-free fashion, knowing that your comfort and happiness are our top priorities.
     </p>
     </div>
     <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-4' alt='Policy'/>
      <p className='font-bold'>
        7 days Easy Return Policy
      </p><br />
     <p className='text-cyan-900'>
     At, <b>Fabric Fusion</b> your happiness is our priority. If you&apos;re not fully satisfied with your purchase, our 7 Days Return Policy has you covered. You can return any product within 7 days of delivery, provided it is unused, unwashed, and in its original condition with all tags and packaging intact. Once the returned item is inspected and approved, we&apos;ll initiate a refund or provide store credit, as per your preference. Shop confidently with Fabric Fusion, knowing we&apos;re here to make every experience seamless and satisfying.
     </p>
     </div>
     <div>
        <img src={assets.support_img} className='w-12 m-auto mb-4' alt='Policy'/>
      <p className='font-bold'>
        Best Customer Support
      </p><br />
     <p className='text-cyan-900'>
     At, <b>Fabric Fusion</b> we believe that exceptional customer support is the cornerstone of a great shopping experience. Our dedicated support team is here to assist you every step of the way, from answering your queries to resolving any concerns promptly. Whether you need help with product selection, order tracking, or exchanges and returns, we’re just a call or click away. Experience friendly, reliable, and round-the-clock service designed to ensure your satisfaction and make your journey with us truly seamless and enjoyable.
     </p>
     </div>
    </div>
  )
}

export default OurPolicy