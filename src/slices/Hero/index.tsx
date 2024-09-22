"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { View } from "@react-three/drei";

import { Bounded } from "@/components/Bounded";
import Button from "@/components/Button";
import { TextSplitter } from "@/components/TextSplitter";
import Scene from "./Scene";
import { Bubbles } from "./Bubbles";
import { useStore } from "@/hooks/useStore";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";
import { useGetMainHeroSectionQuery } from "@/redux/api/hero-section/hero-section";
import { MainHeroTypes } from "@/utils/types";
import { useGetSecondHeroSectionQuery } from "@/redux/api/second-hero-section/second-hero-section";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = (): JSX.Element => {
  const ready = useStore((state) => state.ready);
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  const { data, isLoading, isError, error } = useGetMainHeroSectionQuery();
  const { data: secondHero } = useGetSecondHeroSectionQuery();

  const mainHero = data?.data[0];
  const secondHeroSection = secondHero?.data[0];
  useGSAP(
    () => {
      if (!ready && isDesktop && !mainHero && !secondHero) return;

      const introTl = gsap.timeline();

      introTl
        .set(".hero", { opacity: 1 })
        .from(".hero-header-word", {
          scale: 3,
          opacity: 0,
          ease: "power4.in",
          delay: 0.3,
          stagger: 1,
        })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 30,
          },
          "+=.8",
        )
        .from(".hero-body", {
          opacity: 0,
          y: 10,
        })
        .from(".hero-button", {
          opacity: 0,
          y: 10,
          duration: 0.6,
        });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      scrollTl
        .fromTo(
          "body",
          {
            backgroundColor: "#FDE047",
          },
          {
            backgroundColor: "#D9F99D",
            overwrite: "auto",
          },
          1,
        )
        .from(".text-side-heading .split-char", {
          scale: 1.3,
          y: 40,
          rotate: -25,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(3)",
          duration: 0.5,
        })
        .from(".text-side-body", {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.5,
        });
    },
    { dependencies: [ready, isDesktop, mainHero, secondHero] },
  );

  return (
    <Bounded className="hero opacity-0">
      {isDesktop && (
        <View className="hero-scene pointer-events-none sticky top-0 z-40 -mt-[100vh] hidden h-screen w-screen md:block">
          <Scene />
          <Bubbles count={300} speed={2} repeat={true} />
        </View>
      )}

      <div className="grid">
        <div className="grid h-screen place-items-center">
          {mainHero ? (
            <div className="grid auto-rows-min place-items-center text-center">
              <h1 className="hero-header text-7xl font-black uppercase text-orange-500 md:text-[9rem] lg:text-[13rem]">
                <TextSplitter
                  text={mainHero?.title as string}
                  wordDisplayStyle="block"
                  className="hero-header-word"
                  key={mainHero.title}
                />
              </h1>
              <div className="hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl">
                {mainHero?.subTitle}
              </div>
              <div className="hero-body text-2xl font-normal text-sky-950">
                {mainHero?.heroContent}
              </div>
              <Button
                buttonLink={"/"}
                buttonText="Shop Now"
                className="hero-button mt-12"
              />
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="text-side relative z-[45] grid h-screen items-center gap-4 md:grid-cols-2">
          {secondHeroSection && (
            <>
              <Image
                className="w-full md:hidden"
                src={"/Images/chillcangroup.png"}
                alt="can image "
                width={500}
                height={50}
              />
              <div>
                <h2 className="text-side-heading text-balance text-6xl font-black uppercase text-sky-950 lg:text-8xl">
                  <TextSplitter
                    key={secondHeroSection?.title}
                    text={secondHeroSection?.title as string}
                  />
                </h2>
                <div key={secondHeroSection.heroContent} className="text-side-body mt-4 max-w-xl text-balance text-xl font-normal text-sky-950">
                  <p>{secondHeroSection?.heroContent as string}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
