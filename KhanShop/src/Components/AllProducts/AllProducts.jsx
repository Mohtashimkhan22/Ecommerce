import React, { useEffect, useState } from "react";
import axios from "axios";
import bg from "../../assets/bg_shop.png";
import { Link } from "react-router-dom";
import AllProductShimmer from "../AllProductsShimmer/AllProductShimmer";

const AllProducts = ({ AddToCart }) => {
  // https://dummyjson.com/products/categories

  const [allProducts, setallProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [selectProducts, setSelectProducts] = useState("");
  const [searchItem, setSearchItem] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // allproducts
  useEffect(() => {
    const AllProducts = async () => {
      const res = await axios("https://dummyjson.com/products");
      setallProducts(res.data.products);
      setOriginalProducts(res.data.products);
      console.log(res.data.products);
    };
    AllProducts();
  }, []);

  // product category
  useEffect(() => {
    const getAllProductsCategory = async () => {
      try {
        const res = await axios("https://dummyjson.com/products/category-list");
        // console.log(res.data);
        setAllCategory(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllProductsCategory();
  }, []);

  const filterProducts = (selectcategory) => {
    // console.log(allProducts);
    setSelectProducts(selectcategory);

    const data = selectcategory
      ? originalProducts.filter(
          (filterItem) => filterItem.category === selectcategory
        )
      : originalProducts;
    setallProducts(data);
  };

  const handleSearchItem = (e) => {
    const query = e.target.value;
    setSearchItem(query);
  };

  const handleSearchByButton = () => {
    const searchProducts = originalProducts.filter((searchFilterItem) =>
      searchFilterItem.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setallProducts(searchProducts);
  };

  const handlePrice = () => {
    let min = parseFloat(minPrice);
    let max = parseFloat(maxPrice);

    const filterPrice = originalProducts.filter(
      (priceItem) =>
        (!min || priceItem.price >= min) && (!max || priceItem.price <= max)
    );
    setallProducts(filterPrice);
  };

  // useEffect(() => {
  //   const getAllProducts = async () => {
  //     try {
  //       if (selectProducts) {
  //         const res = await axios(
  //           `https://dummyjson.com/products/category/${selectProducts}`
  //         );
  //         // console.log(res.data.products);
  //         setProducts(res.data.products);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getAllProducts();
  // }, [selectProducts]);

  return (
    <>
      <div>
        <div className="relative">
          <img
            src={bg}
            alt=""
            className="object-cover w-full object-center h-[200px] mt-5"
          />
          <div className="w-full h-[200px] bg-black absolute top-0 left-0 opacity-[0.4]"></div>
          <h2 className="absolute top-[40%] left-[10%] text-white font-semibold text-3xl md:text-5xl">
            All Products
          </h2>
        </div>
        {/* products category section */}
        <div className="bg-[#e2e0e0] container mx-auto rounded-md py-3 mt-4">
          {/* products category section */}
          <div className="text-center mt-4">
            <select
              onChange={(e) => filterProducts(e.target.value)}
              className="border py-2 px-4 rounded-md"
            >
              <option>Filter by Category</option>
              {allCategory.slice(0, 4).map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className=" text-center mt-3 text-2xl flex items-center justify-center md:flex-row flex-col gap-3">
            <input
              placeholder="search item"
              className="block w-[80%] md:w-[50%] p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-50 dark:focus:border-blue-500"
              onChange={handleSearchItem}
              value={searchItem}
            />
            <button
              className="py-2.5 px-5 ml-4 text-sm font-medium focus:outline-none transition-all bg-red-500 text-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-50 dark:focus:bg-gray-700 dark:text-gray-800 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={handleSearchByButton}
            >
              Search Product
            </button>
          </div>
          <div className="text-center mt-4 mb-2 flex justify-center items-center md:flex-row flex-col gap-3">
            <input
              placeholder="min price"
              className=" px-2 py-2 rounded-md"
              onChange={(e) => setMinPrice(e.target.value)}
              value={minPrice}
            />
            <input
              placeholder="max price"
              className="rounded-md px-2 py-2"
              onChange={(e) => setMaxPrice(e.target.value)}
              value={maxPrice}
            />
            <button
              className="py-2.5 px-5 me-2 mb-2 ml-4 text-sm font-medium focus:outline-none transition-all bg-red-500 text-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-50 dark:focus:bg-gray-700 dark:text-gray-800 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={handlePrice}
            >
              Filter by price
            </button>
          </div>
        </div>

        {/* all products */}
        {/* <div className="flex gap-4 flex-wrap justify-center mt-3 mb-3">
          {allProducts.map((item, index) => (
            <div
              key={index}
              className="bg-[#ffffff] shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700"
            >
              <div>
                <img
                  src={item.thumbnail}
                  alt=""
                  className="rounded-t-lg p-8 object-cover object-center w-full h-full block"
                />
              </div>
              <div className="px-5 pb-5">
                <h3 className="text-gray-800 font-semibold text-xl tracking-tight dark:text-white">
                  Title: {item.title}
                </h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                  {item.rating}
                </span>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    Price: {item.price} Rs.
                  </p>
                  <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => AddToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        {
          allProducts.length === 0 ? <AllProductShimmer/> : (
            <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allProducts.map((AllItems) => (
                <div
                  className="w-[90%] px-4 py-4 shadow-lg rounded-md"
                  key={AllItems.id}
                >
                  <Link
                    className="block relative h-48 rounded overflow-hidden"
                    to={`/singleproduct/${AllItems.id}`}
                  >
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block rounded-t-lg"
                      src={AllItems.thumbnail}
                    />
                  </Link>
                  <div className="mt-4">
                    <h2 className="text-gray-500 text-lg font-medium title-font mb-2 mt-2">
                      {AllItems.title}
                    </h2>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      {AllItems.rating}
                    </span>
                    <div className="flex justify-between mt-3 flex-col sm:flex-row">
                      <p className="mt-1 mb-2 sm:mb-0 text-[15px] sm:text-[20px] font-bold text-gray-900">
                        {AllItems.price} Rs.
                      </p>
                      <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => AddToCart(AllItems)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
          )
        }
        
      </div>
    </>
  );
};

export default AllProducts;
