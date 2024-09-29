"use client"

import React from 'react'
import { AlternatingText, BigText, CarouselPage, HeroPage, ProductShowCase, SkydivePage } from "@/dynamic Import/dynamicimport";
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <Provider store={store}>
      <HeroPage/>
      <CarouselPage/>
      <AlternatingText/>
      <SkydivePage/>
      <ProductShowCase/>
      <Footer/>


      {/* <SliceZone slices={home.data.slices} components={components} /> */}
    </Provider>
  )
}

export default HomePage