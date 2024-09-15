import { Metadata } from "next";
import { AlternatingText, BigText, CarouselPage, HeroPage, SkydivePage } from "@/dynamic Import/dynamicimport";

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
      <AlternatingText/>
      {/* <SliceZone slices={home.data.slices} components={components} /> */}
    </div>
  );
}
