import React from 'react'
import { FaShippingFast } from 'react-icons/fa';
import { MdOutlinePayment } from 'react-icons/md';
import { TbTruckReturn } from 'react-icons/tb';
import { MdProductionQuantityLimits } from 'react-icons/md';

const Service = () => {
  return (
    <>
      <div className='container mx-auto flex py-11 gap-10 items-center justify-center flex-wrap'>
        <div className='bg-red-500 py-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500'>
          <FaShippingFast/>
          <p>FREE SHIPPING</p>
        </div>
        <div className='bg-red-500 py-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500'>
          <MdProductionQuantityLimits/>
          <p>AUTHENTIC PRODUCT</p>
        </div>
        <div className='bg-red-500 py-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500'>
          <TbTruckReturn/>
          <p>EASY RETURN</p>
        </div>
        <div className='bg-red-500 py-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500'>
          <MdOutlinePayment/>
          <p>SECURE PAYMENT</p>
        </div>
      </div>
      </>
  )
}

export default Service