"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import Scene from "./Scene";
import { View } from "@react-three/drei";


const SkyDive = (): JSX.Element => {
  return (
    <Bounded
      className="skydive h-screen mt-0"
    >
      <h2 className="sr-only">Start Your Journey to Wellness</h2>
      <View className="h-screen w-screen">
        <Scene
          flavor={"grape"}
          sentence={"Start Your Journey to Wellness"}
        />
      </View>
    </Bounded>
  );
};

export default SkyDive;
