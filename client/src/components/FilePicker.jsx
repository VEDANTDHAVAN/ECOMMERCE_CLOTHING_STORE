/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import CustomButton from './CustomButton'

const FilePicker = ({file, setFile, readFile}) => {
  return (
    <div className="filepicker-container">
      <div className='flex-1 flex flex-col'>
        <input id="file-upload"
         type="file" accept="image/*" 
         onChange={(e)=> setFile(e.target.files[0])}
         />
         <label htmlFor="file-upload" className="filepicker-label backdrop-blur-md bg-lime-400">
          Upload File 
         </label>
         <p className="mt-3 text-cyan-800 text-xl truncate">
          {file === '' ? "No File Selected" : file.name}
         </p>
      </div>
      <div className="mt-4 flex-wrap gap-3">
       <CustomButton
         type="outline"
         title="logo"
         handleClick={()=> readFile('logo')}
         customStyles="text-xs"
       />
       <CustomButton
         type="filled"
         title="Full"
         handleClick={()=> readFile('full')}
         customStyles="text-xs"
       />
      </div>
    </div>
  )
}

export default FilePicker