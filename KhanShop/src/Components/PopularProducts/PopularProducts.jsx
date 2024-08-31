import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const PopularProducts = ({AddToCart}) => {

  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const popularProductFetch = async () => {
      try {
        const res = await axios('https://dummyjson.com/carts/1');
        setPopularProducts(res.data.products);
      } catch (error) {
        toast.error(err.message);
      }
      // console.log(res.data.products);
    };
    popularProductFetch();
  }, []);



  return (
    <>
      <div>
        <div className="mt-6 text-center ">
          <h2 className="text-4xl md:text-5xl text-gray-600 font-semibold underline">Popular Products</h2>
        </div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
              {
                popularProducts.filter((item, index)=> index!==5)
                .map((popularItems,index)=>(
                  <div class="lg:w-1/4 md:w-1/2 p-4 w-full" key={index}>
                <a class="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-cover object-center w-full h-full block"
                    src={popularItems.thumbnail}
                  />
                </a>
                <div class="mt-4">
                  <h2 class="text-gray-900 text-lg font-medium title-font">
                    {popularItems.title}
                  </h2>
                  <p class="mt-1 text-[20px] font-semibold">Price: {popularItems.price} Rs.</p>
                </div>
                <button class="text-white bg-indigo-500 border-0 py-1 px-1 md:px-3 focus:outline-none hover:bg-indigo-600 rounded mt-2" onClick={() => AddToCart(popularItems)}>
                    Add to Cart
                  </button>
              </div>
                ))
              }
              
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PopularProducts;
