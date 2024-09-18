"use client"

import React from 'react'
import { AlternatingText, BigText, CarouselPage, HeroPage, ProductShowCase, SkydivePage } from "@/dynamic Import/dynamicimport";
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

const HomePage = () => {
  return (
    <Provider store={store}>
      <HeroPage/>
      <SkydivePage/>
      <CarouselPage/>
      <AlternatingText/>
      <ProductShowCase/>
      {/* <SliceZone slices={home.data.slices} components={components} /> */}
    </Provider>
  )
}

export default HomePage