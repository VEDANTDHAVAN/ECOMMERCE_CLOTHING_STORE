/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Title from '../components/Title'
import { assets } from '../assets/assets/frontend_assets/assets'
import toast from 'react-hot-toast'
import axios from 'axios'
axios.defaults.baseURL = null;
const Add = () => {

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName]  = useState("");
  const [description, setDescription]  = useState("");
  const [price, setPrice]  = useState("");
  const [category, setCategory]  = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
       const formData = new FormData()
       
       formData.append("name", name)
       formData.append("description", description)
       formData.append("price", price)
       formData.append("category", category)
       formData.append("subcategory", subCategory)
       formData.append("bestseller", bestSeller)
       formData.append("sizes", JSON.stringify(sizes))
       if(image1) formData.append("image1", image1)
       if(image2) formData.append("image2", image2)
       if(image3) formData.append("image3", image3)
       if(image4) formData.append("image4", image4)

       const response = await axios.post('/api/product/add', formData, {
        headers: {'Content-Type': 'multipart/form-data'},
       });
       toast.success("Product Uploaded Successfully!!")
       console.log(response.data);
       if(response.data.success){
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
        setBestSeller(false)
       } else{
        toast.error('Product Could not be Uploaded!!')
       }

    } catch (error) {
        toast.error("An Error Occured while Uploading the Product!!")
        console.error(error);
    }
  }

  return (
    <>
     <div className='flex flex-row'>
     <Sidebar/>
       <div className='flex flex-col px-10'>
        <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
          <div>
            <p className='mb-3'><Title text1={"Upload"} text2={"Image"}/></p>
            <div className='flex gap-4'>
              <label htmlFor="image1">
                <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
                <input type="file" onChange={(e)=> setImage1(e.target.files[0])} id="image1" hidden/>
              </label>
              <label htmlFor="image2">
                <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
                <input type="file" onChange={(e)=> setImage2(e.target.files[0])} id="image2" hidden/>
              </label>
              <label htmlFor="image3">
                <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
                <input type="file" onChange={(e)=> setImage3(e.target.files[0])} id="image3" hidden/>
              </label>
              <label htmlFor="image4">
                <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
                <input type="file" onChange={(e)=> setImage4(e.target.files[0])} id="image4" hidden/>
              </label>
            </div>
          </div>
          <div className='w-full'>
            <p><Title text1={"Product"} text2={"Name"}/></p>
            <input type="text" onChange={(e)=> setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2 border-black' placeholder='Type Here' required/>
          </div>
          <div className='w-full'>
            <p><Title text1={"Product"} text2={"Description"}/></p>
            <input type="text" onChange={(e)=> setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2 border-black' placeholder='Describe Product Here' required/>
          </div>
          <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
            <div>
                <p><Title text1={"Product"} text2={"Category"}/></p>
                <select onChange={(e)=> setCategory(e.target.value)} className='w-full px-3 py-2'>
                    <option value="Men">MEN</option>
                    <option value="Women">WOMEN</option>
                    <option value="Kids">KIDS</option>
                </select>
            </div>
            <div>
                <p><Title text1={"SUB"} text2={"Category"}/></p>
                <select onChange={(e)=> setSubCategory(e.target.value)} className='w-full px-3 py-2'>
                    <option value="Topwear">Topwear</option>
                    <option value="Bottomwear">Bottomwear</option>
                    <option value="Winterwear">Winterwear</option>
                </select>
            </div>
            <div>
                <p><Title text1={"Product"} text2={"Price"}/></p>
                <input type="number" onChange={(e)=> setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' placeholder='100' />
            </div>
          </div>
          <div>
             <p className='mb-2 mt-1'><Title text1={"Product"} text2={"Sizes"}/></p>
            <div className='flex gap-3'>
                <div onClick={()=> setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev, "S"])}>
                    <p className={`${sizes.includes("S") ? "bg-yellow-200" : "bg-cyan-200"} text-black px-3 py-1 cursor-pointer`}>S</p>
                </div>
                <div onClick={()=> setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev, "M"])}>
                    <p className={`${sizes.includes("M") ? "bg-yellow-200" : "bg-cyan-200"} text-black px-3 py-1 cursor-pointer`}>M</p>
                </div>
                <div onClick={()=> setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev, "L"])}>
                    <p className={`${sizes.includes("L") ? "bg-yellow-200" : "bg-cyan-200"} text-black px-3 py-1 cursor-pointer`}>L</p>
                </div>
                <div onClick={()=> setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL") : [...prev, "XL"])}>
                    <p className={`${sizes.includes("XL") ? "bg-yellow-200" : "bg-cyan-200"} text-black px-3 py-1 cursor-pointer`}>XL</p>
                </div>
                <div onClick={()=> setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev, "XXL"])}>
                    <p className={`${sizes.includes("XXL") ? "bg-yellow-200" : "bg-cyan-200"} text-black px-3 py-1 cursor-pointer`}>XXL</p>
                </div>
            </div>
          </div>
          <div className='flex gap-2 mt-2'>
            <input onChange={()=> setBestSeller(prev => !prev)} checked={bestSeller} type="checkbox" id='bestseller' />
           <label className='cursor-pointer' htmlFor="bestseller">Add to BestSeller</label>
          </div>
          <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>
        </form>
      </div>
     </div>
    </>
  )
}

export default Add