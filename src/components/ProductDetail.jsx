import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {

  const {id} = useParams()

  const [singleProductData,setSingleProductData] = useState()

  const fetch = async()=>{
    const response = await axios.get(`https://dummyjson.com/products/${id}`)
    setSingleProductData(response.data)
    //console.log(singleProductData)
  }

  useEffect(()=>{

    fetch()
  },[])



  return (
    <>
    
<section class="text-gray-700 body-font overflow-hidden bg-white">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 h-[300px] lg:h-[500px] w-full object-cover object-center rounded border border-gray-200" src={singleProductData?.images[0]} />
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">{singleProductData?.brand}</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1 mt-4">{singleProductData?.title}</h1>
        
        <p class="leading-relaxed mt-4">{singleProductData?.description}</p>

        <div className='flex mt-4 justify-between items-center'>
         
        <span class="title-font font-medium text-2xl text-gray-900">STOCK:- {singleProductData?.stock}</span>
        <span class="title-font font-medium text-2xl text-gray-900">DISCOUNT:- {singleProductData?.discountPercentage}%</span>


        </div>
        
        <div class="flex mt-4 gap-4">
          <span class="title-font font-medium text-2xl text-gray-900">&#8377;{singleProductData?.price}</span>
          <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy Now</button>
          
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default ProductDetail