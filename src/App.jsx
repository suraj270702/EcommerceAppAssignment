import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Products from './components/Products';
import Layout from './Layout';
import ProductDetail from './components/ProductDetail';
import Wishlist from './components/Wishlist';

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children : [
        {
          path : "/",
          element : <Products />
        },
        

      ]
    },{
      path : 'detail/:id',
      element : <ProductDetail />
    },
    {
      path : 'wishlist',
      element : <Wishlist/>
    }
    
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
