import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const Products = ({ searchQuery, filteredData }) => {
  const [productsData, setProductsData] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [check, setCheck] = useState(false);

  //console.log(searchQuery)
  const fetch = async () => {
    let link = `https://dummyjson.com/products?limit=10&skip=${
      (page - 1) * 10
    }`;

    if (filteredData === "reset") {
      link = `https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`;
    } else if (filteredData) {
      link = `https://dummyjson.com/products/category/${filteredData}`;
    }
    const response = await axios.get(link);
    //console.log(response.data.products)
    setProductsData(response.data.products);
  };

  const isProductSelected = (product) => {
    return selectedProducts.some((p) => p.id === product.id);
  };

  const toggleProduct = (product) => {
    setSelectedProducts((prevSelectedProducts) => {
      if (isProductSelected(product)) {
        // Remove the product from selectedProducts
        const updatedSelectedProducts = prevSelectedProducts.filter(
          (p) => p.id !== product.id
        );
        localStorage.setItem(
          "productDetails",
          JSON.stringify(updatedSelectedProducts)
        );
        return updatedSelectedProducts;
      } else {
        // Add the product to selectedProducts
        const updatedSelectedProducts = [...prevSelectedProducts, product];
        localStorage.setItem(
          "productDetails",
          JSON.stringify(updatedSelectedProducts)
        );
        return updatedSelectedProducts;
      }
    });
  };

  useEffect(() => {
    fetch();
    const storedSelectedProducts = JSON.parse(localStorage.getItem("productDetails"));

  if (storedSelectedProducts) {
    setSelectedProducts(storedSelectedProducts);
  }
  }, [page, searchQuery, filteredData]);

  const filteredProducts = productsData.filter((product) =>
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div>
        <div className="  grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2    gap-10">
          {!productsData.length ? (
            <Loader />
          ) : (
            (searchQuery ? filteredProducts : productsData).map((item, i) => (
              <Link
                to={`/detail/${item.id}`}
                className="max-w-xs w-full  rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer"
                key={i}
              >
                <div>
                  <img
                    className="min-w-[320px] h-[200px]  object-cover"
                    src={item.thumbnail}
                    alt=""
                  />
                </div>
                <div className="flex justify-between items-center px-4 py-4 bg-white">
                  <p className="mt-4 text-lg font-thin"> {item.brand}</p>
                  <p className="mt-4 text-lg font-thin"> {item.category}</p>
                </div>
                <div className="py-4 px-4 bg-white">
                  <h3 className="text-lg font-semibold text-gray-600">
                    {item.description.substring(0, 20)}...
                  </h3>
                </div>
                <div className="flex justify-between items-center px-4 py-4 bg-white">
                  <p className="mt-4 text-lg font-thin">&#8377; {item.price}</p>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleProduct(item);
                    }}
                    class="rounded-full w-10 h-10 p-0 border-0 inline-flex items-center justify-center ml-4"
                    
                  >
                    {selectedProducts.some((p) => p.id === item.id)
                      ? "❤️"
                      : "🩶"}
                  </button>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>

      {productsData.length > 0 && (
        <div className="flex items-center justify-center mt-[40px]">
          <Pagination page={page} setPage={setPage} />
        </div>
      )}
    </>
  );
};

export default Products;
