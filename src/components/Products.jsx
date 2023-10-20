import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Products = () => {
  const [productsData,setProductsData] = useState([])


  const fetch = async()=>{
    const response = await axios.get('https://dummyjson.com/products')
    //console.log(response.data.products)
    setProductsData(response.data.products)
  }

  useEffect(()=>{
fetch()
    

  },[])

  return (
    <>
    
<div>
  <div class="  grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2   gap-10">
    {
      productsData.map((item,i)=>(
        <div class="max-w-xs w-full  rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer" key={i}>
      <div>
        <img className='min-w-[320px] h-[200px]  object-cover' src={item.thumbnail} alt="" />
      </div>
      <div className='flex justify-between items-center px-4 py-4 bg-white'>
      <p class="mt-4 text-lg font-thin">  {item.brand}</p>
      <p class="mt-4 text-lg font-thin"> {item.category}</p>
        </div>
      <div class="py-4 px-4 bg-white">
        <h3 class="text-lg font-semibold text-gray-600">{item.description.substring(0,20)}...</h3>
        <p class="mt-4 text-lg font-thin">&#8377;  {item.price}</p>
      </div>
    </div>
      ))
    }
    
  </div>
</div>
    </>
  )
}

export default Products