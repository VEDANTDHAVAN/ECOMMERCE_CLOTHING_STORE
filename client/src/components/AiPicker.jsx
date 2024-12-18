/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import CustomButton from './CustomButton';


const AiPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className='aipicker-container'>
      <textarea 
        placeholder='Ask OpenAI..'
        rows={5}
        className='aipicker-textarea'
        value={prompt}
        onChange={(e)=> setPrompt(e.target.value)}
      />
      <div className='flex flex-wrap gap-3'>
       {generatingImg ? (
        <CustomButton
         type="outline"
         title="Generating Image.."
         customStyles="text-xs"
        />
       ): (
        <>
         <CustomButton
          type="outline"
          title="AI Logo"
          handleClick={()=> handleSubmit('logo')}
          customStyles="text-sm"
         />
         <CustomButton
          type="filled"
          title="AI Full"
          handleClick={()=> handleSubmit('full')}
          customStyles="text-sm"
         />
        </>
       )}
      </div>
    </div>
  )
}

export default AiPicker