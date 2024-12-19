/* eslint-disable no-unused-vars */
import React from 'react'

const NewsLetter = () => {

  const onSubmitHandle =(event)=> {
     event.preventDefault();
  }
  return (
    <div className='text-center'>
        <p className='text-4xl font-bold text-cyan-950'>Subscribe Now & get 30% Off</p>
        <br />
        <form onSubmit={onSubmitHandle}>
            <input className='w-1/2 h-16 text-black text-center bg-cyan-100 sm:flex-1 outline-none rounded-lg' type="email" placeholder='Enter your Email' />
            <br />
            <button type='submit' className='bg-blue-950 text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetter