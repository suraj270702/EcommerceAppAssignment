import React, { useState } from "react";
import { Link } from "react-router-dom";
import Empty from "./Empty";

const Wishlist = () => {
  //const [check, setCheck] = useState(false);
  const wishListData = JSON.parse(localStorage.getItem("productDetails"));
  const [checks, setChecks] = useState(wishListData.map(() => false));

  const handleCheckClick = (index) => {
    const updatedChecks = [...checks];
    updatedChecks[index] = !updatedChecks[index];
    setChecks(updatedChecks);
  };
  //console.log( wishListData);

  const handleDelete = (id) => {
    const updatedWishListData = wishListData.filter((p) => p.id !== id);

    // Store the updated data in localStorage
    localStorage.setItem("productDetails", JSON.stringify(updatedWishListData));
    window.location.reload()
  };

  return (
    <>
      {
        wishListData.length === 0 ? <Empty /> : (
          <div class="mx-auto container px-4 md:px-6 2xl:px-0 py-12 flex justify-center items-center">
        <div class="flex flex-col justify-start items-start">
          <div>
            <Link
              to="/"
              class="text-xl font-bold leading-4 text-gray-600 dark:text-white"
            >
              Home
            </Link>
          </div>
          <div class="mt-3">
            <h1 class="text-3xl lg:text-4xl tracking-tight font-semibold leading-8 lg:leading-9 text-gray-800 dark:text-white dark:text-white">
              Favourites
            </h1>
          </div>
          <div class="mt-4">
            <p class="text-2xl tracking-tight leading-6 text-gray-600 dark:text-white">
              No of items :- {wishListData?.length}
            </p>
          </div>
          <div class="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-10 lg:gap-y-0">
            {wishListData.map((item, i) => (
              <div class="flex flex-col" key={i}>
                <div class="relative">
                  <img
                    class="hidden lg:block h-[300px] w-[400px]"
                    src={item.images[0]}
                    alt="bag"
                  />
                  <img
                    class="hidden sm:block lg:hidden h-[300px] w-[400px]"
                    src={item.images[1]}
                    alt="bag"
                  />
                  <img
                    class="sm:hidden h-[300px] w-[400px]"
                    src={item.images[2]}
                    alt="bag"
                  />
                  <button
                    onClick={() => handleDelete(item.id)}
                    aria-label="close"
                    class="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute p-1.5 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400"
                  >
                    <svg
                      class="fil-current"
                      strokeWidth="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 1L1 13"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1 1L13 13"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div class="mt-6 flex justify-between items-center">
                  <div class="flex justify-center items-center">
                    <p class="tracking-tight text-2xl font-semibold leading-6 text-gray-800 dark:text-white">
                      {item.title}
                    </p>
                  </div>
                  <div class="flex justify-center items-center">
                    <button
                      onClick={() => handleCheckClick(i)}
                      aria-label="show menu"
                      onclick="handleClick1(true)"
                      class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400 hover:bg-gray-200"
                    >
                      <svg
                        id="chevronUp1"
                        class="fill-stroke"
                        strokeWidth="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 5L5 1L1 5"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <svg
                        id="chevronDown1"
                        class="hidden fill-stroke"
                        strokeWidth="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                {checks[i] && (
                  <div
                    id="menu1"
                    class="flex flex-col justify-start items-start mt-12"
                  >
                    <div>
                      <p class="tracking-tight text-xs leading-3 text-gray-800 dark:text-white">
                        {item.brand}
                      </p>
                    </div>
                    <div class="mt-2">
                      <p class="tracking-tight text-base font-medium leading-4 text-gray-800 dark:text-white">
                        {item.category}
                      </p>
                    </div>
                    <div class="mt-6">
                      <p class="tracking-tight text-base font-medium leading-4 text-gray-800 dark:text-white">
                        {item.description}
                      </p>
                    </div>
                    <div class="mt-6">
                      <p class="tracking-tight text-base font-medium leading-4 text-gray-800 dark:text-white">
                        {item.price}
                      </p>
                    </div>
                    <div class="flex justify-between flex-col lg:flex-row items-center mt-10 w-full space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                      <div class="w-full">
                        <button class="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-gray-800 dark:text-white text-white w-full tracking-tight py-4 text-lg leading-4 hover:bg-gray-300 hover:text-gray-800 dark:text-white dark:bg-transparent dark:border-white dark:hover:bg-gray-800 bg-white border border-gray-800 dark:hover:text-white">
                          <Link to={`/detail/${item.id}`}>
                            More Information
                          </Link>
                        </button>
                      </div>
                      <div class="w-full">
                        <button class="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-white w-full tracking-tight py-4 text-lg leading-4 hover:bg-black bg-gray-800 border border-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
        )
      }
    </>
  );
};

export default Wishlist;
