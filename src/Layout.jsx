import React, { useState } from 'react'
import Filter from './components/Filter'
import Search from './components/Search'
import Products from './components/Products'
import Pagination from './components/Pagination'

const Layout = () => {
  const [searchQuery,setSearchQuery] = useState('')
  const [filteredData,setFilteredData] = useState('')
  return (
    <>
    <div className='px-8 py-4'>
    <div className='container'>
        <div className='flex items-center flex-col lg:flex-row justify-between gap-[40px] lg:gap-0'>
          
            <div className='w-[100%] lg:w-1/2'>
              <Search setSearchQuery={setSearchQuery}/>

            </div>
            <div className='w-[100%] lg:w-1/5'>
              <Filter setFilteredData={setFilteredData} />

            </div>

            <div>
              <button className='px-4 py-4 bg-indigo-100 hover:bg-indigo-300 border rounded-lg'><span className='text-[40px] leading-4 font-bold'>❤️</span></button>
            </div>
          
        </div>
        

    </div>
    <div className='mt-[40px] px-2 lg:px-8 py-4'>
          <Products searchQuery={searchQuery} filteredData={filteredData}/>

        </div>
    
    </div>
    </>
  )
}

export default Layout