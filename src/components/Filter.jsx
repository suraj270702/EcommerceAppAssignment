import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import axios from "axios";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Filter({setFilteredData}) {
  const [isOpen, setIsOpen] = useState(false);
  const [productsData,setProductsData] = useState([])

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const fetch = async()=>{
    const response = await axios.get(`https://dummyjson.com/products`)
    //console.log(response.data.products)
    setProductsData(response.data.products)
  }

  useEffect(()=>{
fetch()
    

  },[])
  
  const uniqueCategories = [...new Set(productsData.map(product => product.category))];
  //console.log(uniqueCategories)
  uniqueCategories.push('reset')

  const handleFilter =(filter)=>{
    setFilteredData(filter)
    setIsOpen(false)
  }

  return (
    <>
      <div className="relative bg-indigo-600 rounded-md" data-te-dropdown-ref>
        <button
          className="flex items-center whitespace-nowrap  rounded-md bg-primary px-6 pb-2 pt-2.5 text-xl text-center font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          type="button"
          onClick={toggleDropdown}
          id="dropdownMenuButton1"
          data-te-dropdown-toggle-ref
          aria-expanded="false"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Filter By Category
        </button>
        <ul
        className={`absolute z-[1000] float-left m-0 ${
          isOpen ? 'block' : 'hidden'
        } min-w-max list-none overflow-hidden rounded-lg border-none bg-indigo-100 bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 w-[100%]`}
        aria-labelledby="dropdownMenuButton1"
        data-te-dropdown-menu-ref
      >
          {
            uniqueCategories.map((item,i)=>(
              <li key={i}>
            <button
             onClick={()=>handleFilter(item)}
              className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              
              data-te-dropdown-item-ref
            >
              {item}
            </button>
          </li>
            ))
          }
          
        </ul>
      </div>
    </>
  );
}
