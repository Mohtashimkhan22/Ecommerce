import React from 'react'
import banner from "../../assets/banner.png"

const HeroSection = () => {
  return (
    <>
    <div className='relative mt-5'>
      <div>
        <img src={banner} alt="" className='w-full object-cover object-center'/>
      </div>
      <div className='absolute top-[30%] w-full text-end right-5'>
        <h1 className='text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-red-500'>
          Discover Your Next Adventure!
        </h1>
        <p className='text-[10px] lg:text-2xl mt-2 lg:mt-5 font-semibold'>
          Shop Our Latest Arrival & Unleash Your Style
        </p>
      </div>
    </div>
    </>
  )
}

export default HeroSection