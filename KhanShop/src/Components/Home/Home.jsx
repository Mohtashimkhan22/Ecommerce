import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import Gallery from '../Gallery/Gallery'
import PopularProducts from "../PopularProducts/PopularProducts"
import Testimonial from '../Testimonial/Testimonial'
import Service from '../Services/Service'

const Home = ({AddToCart}) => {
  return (
    <>
    <HeroSection/>
    <Service/>
    <PopularProducts AddToCart={AddToCart} />
    <Gallery/>
    <Testimonial/>
    </>
  )
}

export default Home