import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Model from "../../Components/Model/Model";
import EmptyCart from "../../Components/EmptyCart/EmptyCart";

const Cart = ({
  cart,
  handleDec,
  handleInc,
  handleRemove,
  getTotalPrice,
  applyPromoCode,
  promoCode,
  SetPromoCode,
  invalid,
}) => {

  const navigate = useNavigate("");

  return (
    <>
      {
      cart.length == 0 ? <EmptyCart/>:(
        <div class=" w-[90%] mx-auto mt-5">
        <div class="container mx-auto mt-10">
          <div class="flex flex-col md:flex-row shadow-md my-10">
            <div class="w-full lg:w-3/4 bg-white px-10 py-10">
              <div class="flex justify-between border-b pb-8">
                <h1 class="font-semibold text-2xl">Shopping Cart</h1>
                <h2 class="font-semibold text-2xl">{cart.length} Items</h2>
              </div>
              <div class="flex mt-10 mb-5">
                <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                  Quantity
                </h3>
                <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                  Price
                </h3>
                <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                  Total
                </h3>
              </div>
              {/* cart section */}
  
              {cart.map((cartItem) => (
                <div
                  class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                  key={cartItem.id}
                >
                  <div class="flex w-2/5">
                    <div class="w-20">
                      <img class="h-24" src={cartItem.thumbnail} alt="" />
                    </div>
                    <div class="flex flex-col justify-between ml-4 flex-grow">
                      <span class="font-bold text-sm">{cartItem.title}</span>
                      <span class="text-red-500 text-xs">
                        {cartItem.category}
                      </span>
                      <a
                        href="#"
                        class="font-semibold hover:text-red-500 text-gray-500 text-xs"
                        onClick={() => handleRemove(cartItem.id)}
                      >
                        Remove
                      </a>
                    </div>
                  </div>
                  <div class="flex justify-center w-1/5">
                    <button
                      className="border px-2 py-1"
                      onClick={() => handleDec(cartItem.id)}
                    >
                      -
                    </button>
                    <button className="px-2">{cartItem.quantity}</button>
                    <button
                      className="border px-2 py-1"
                      onClick={() => handleInc(cartItem.id)}
                    >
                      +
                    </button>
                  </div>
                  <span class="text-center w-1/5 font-semibold text-sm">
                    {cartItem.price} Rs.
                  </span>
                  <span class="text-center w-1/5 font-semibold text-sm">
                    {cartItem.price * cartItem.quantity} Rs.
                  </span>
                </div>
              ))}
  
              <p
                class="flex font-semibold text-indigo-600 text-sm mt-10 cursor-pointer" onClick={()=>navigate("/allproducts")}
              >
                <svg
                  class="fill-current mr-2 text-indigo-600 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </p>
            </div>
  
            <div id="summary" class="w-full md:w-1/4 px-8 py-10 bg-[#f6f6f6]">
              <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
              <div class="flex justify-between mt-10 mb-5">
                <span class="font-semibold text-sm uppercase">
                  Items {cart.length}
                </span>
                <span class="font-semibold text-sm">₹ {getTotalPrice()}</span>
              </div>
              <div>
                <label class="font-medium inline-block mb-3 text-sm uppercase">
                  Shipping
                </label>
                <select class="block p-2 text-gray-600 w-full text-sm">
                  <option>Standard shipping - ₹ 10.00</option>
                </select>
              </div>
              {/* <div class="py-10">
                <label
                  for="promo"
                  class="font-semibold inline-block mb-3 text-sm uppercase"
                >
                  Promo Code
                </label>
                <input
                  type="text"
                  id="promo"
                  value={promoCode}
                  placeholder="Enter your code"
                  class="p-2 text-sm w-full"
                  onChange={(e) => SetPromoCode(e.target.value)}
                />
                {promoCode && promoCode !== "DISCOUNT10" ? (
                  <span className="text-[red] font-semibold">{invalid}</span>
                ) : (
                  <span>Use DISCOUNT10</span>
                )}
                <hr />
                {promoCode === "DISCOUNT10" && (
                  <span className="text-[green] text-1xl">
                    Promo code applied successfully!
                  </span>
                )}
              </div>
              <button
                class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase"
                onClick={applyPromoCode}
              >
                Apply
              </button> */}
              <div class="border-t mt-8">
                <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>₹ {getTotalPrice() + 10}</span>
                </div>
                {/* <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full" >
                  Checkout
                </button> */}
                <Model/>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
    </>
  );
};

export default Cart;
