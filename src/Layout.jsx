import React from 'react'
import Filter from './components/Filter'
import Search from './components/Search'
import Products from './components/Products'

const Layout = () => {
  return (
    <>
    <div className='px-8 py-4'>
    <div className='container'>
        <div className='flex items-center flex-col lg:flex-row justify-between gap-[40px] lg:gap-0'>
          
            <div className='w-[100%] lg:w-1/2'>
              <Search />

            </div>
            <div className='w-[100%] lg:w-1/4'>
              <Filter />

            </div>
          
        </div>
        

    </div>
    <div className='mt-[40px] px-8 py-4'>
          <Products />

        </div>
    </div>
    </>
  )
}

export default Layout