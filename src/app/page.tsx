import { Metadata } from "next";
import { AlternatingText, BigText, CarouselPage, HeroPage, ProductShowCase, SkydivePage } from "@/dynamic Import/dynamicimport";
import Footer from "@/components/Footer";
import HomePage from "./home";

export const metadata: Metadata = {
  title: "Chill Can | Soda Can",
  description: "This is Chill Can Soda Website",
};

export default async function Index() {
  return (
    <HomePage/>
  );
}
