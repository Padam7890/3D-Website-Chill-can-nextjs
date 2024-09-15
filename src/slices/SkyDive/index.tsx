"use client";

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
          flavor={"lemonLime"}
          sentence={"Start Your Journey to Wellness"}
        />
      </View>
    </Bounded>
  );
};

export default SkyDive;
