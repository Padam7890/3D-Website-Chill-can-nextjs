import dynamic from "next/dynamic";

export const AlternatingText = dynamic(() => import("../slices/AlternatingText/index"));
export const BigText = dynamic(() => import("../slices/BigText/index"));
export const CarouselPage = dynamic(() => import("../slices/Carousel/index"));
export const HeroPage = dynamic(() => import("../slices/Hero/index"));
export const SkydivePage = dynamic(() => import("../slices/SkyDive/index"));
