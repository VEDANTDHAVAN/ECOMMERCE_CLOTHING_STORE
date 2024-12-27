/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import toast from 'react-hot-toast'
import React,{useEffect, useState} from 'react'
import Title from '../components/Title'
import Sidebar from '../components/Sidebar'
import { currency } from '../App'
import { useParams } from 'react-router-dom'
const List = ({token}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dbData, setDbData] = useState([]);
  const {productId} = useParams();
  console.log(productId)
  const [productData, setProductData] = useState(false);
     const [image, setImage] = useState('');
     const [name, setName] = useState('');

  const fetchList = async () =>{
    try {
      const response = await axios.get('/api/product/list')
      console.log(response.data)
      if(response.data.success){
        setDbData(response.data.products || []);
      } else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error("Error Fetching Data: ",error)
      setError("Failed to Fetch Product Data from MongoDB!!")
      toast.error(error.message)
    } finally{
      setLoading(false)
    }
  }
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this Product?');
    try {
      if(confirmDelete){
        const response = await axios.post('/api/product/remove', {id}, {headers: {token}})
        if(response.data.success) {
          toast.success(response.data.message)
          await fetchList();
        }else{
          toast.error(response.data.message)
        }
      }
    } catch (error) {
      console.error("Error Fetching Data: ",error)
      setError("Failed to Fetch Product Data from MongoDB!!")
      toast.error(error.message)
    }
  }
  useEffect(()=> {
    fetchList()
  }, [])

  if(loading) return <h2>Loading....</h2>;
  if(error) return <h2>{error}</h2>
  return (
    <>
    <p className='mb-2 text-3xl'><Title text1={'ALL PRODUCTS '} text2={'IN DATABASE'}/></p>
     <div className='flex flex-row'>
       <Sidebar/>
       <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>SubCategory</th>
              <th>Price</th>
              <th>IMAGE</th>
            </tr>
          </thead>
          <tbody>
            { 
              Array.isArray(dbData) && dbData.length > 0 ? (
                dbData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.subcategory}</td>
                    <td>{currency}{item.price}</td>
                    <td><img src={item.image[0]} alt="" /></td>
                    <td><button className="btn3 btn-edit" onClick={()=> handleDelete(item._id)}>Delete</button></td>  
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No Data Available</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
     </div>
    </>
  )
}

export default List