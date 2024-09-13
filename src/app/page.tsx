import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import AlternatingText from "@/slices/AlternatingText";
import BigText from "@/slices/BigText";
import { CarouselPage, HeroPage, SkydivePage } from "@/dynamic Import/dynamicimport";

export const metadata: Metadata = {
  title: "Chill Can | TailAdmin - Soda Can",
  description: "This is Chill Can Soda Website",
};

export default async function Index() {
  return (
    <div>
      <HeroPage/>
      <SkydivePage/>
      <CarouselPage/>
      {/* <AlternatingText/>
      <BigText/> */}
      {/* <SliceZone slices={home.data.slices} components={components} /> */}
    </div>
  );
}
