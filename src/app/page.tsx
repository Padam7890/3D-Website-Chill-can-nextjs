import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import AlternatingText from "@/slices/AlternatingText";
import BigText from "@/slices/BigText";
import Hero from "@/slices/Hero";

export const metadata: Metadata = {
  title: "Chill Can | TailAdmin - Soda Can",
  description: "This is Chill Can Soda Website",
};

export default async function Index() {
  return (
    <div>
      <Hero/>
      {/* <AlternatingText/>
      <BigText/> */}
      {/* <SliceZone slices={home.data.slices} components={components} /> */}
    </div>
  );
}
