"use client";
import { useEffect, useState } from "react";
import { Bounded } from "@/components/Bounded";
import { View } from "@react-three/drei";
import clsx from "clsx";
import Scene from "./Scene";

const sliceText = [
  {
    heading: "Chill Can Cherry Bliss",
    flavor: "blackCherry",
    body: "A bold burst of juicy black cherries in every sip. This refreshing soda delivers the perfect balance of sweetness and fizz to satisfy your cravings",
  },
  {
    heading: "Chill Can Lemon Lime",
    flavor: "lemonLime",
    body: "Zesty lemon meets crisp lime in this tangy soda sensation. Ideal for cooling off on a hot day, it packs a citrus punch that keeps you coming back for more",
  },
  {
    heading: "Chill Can Watermelon",
    flavor: "watermelon",
    body: "Dive into the deliciously sweet taste of summer with every can. The Chill Can Watermelon Wave delivers a smooth, refreshing blend of ripe watermelon and bubbles",
  },
];

const AlternatingText = (): JSX.Element => {
  const [sliceFlavor, setSliceFlavor] = useState<any>([]);

  useEffect(() => {
    const flavors = sliceText.map((item) => item.flavor);
    setSliceFlavor(flavors);
  }, []);

  return (
    <Bounded
      data-slice-type={"alternating-text-container"}
      data-slice-variation={"default"}
      className="alternating-text-container relative bg-yellow-300 text-sky-950"
    >
      <div>
        <div className="relative z-[30] grid">
          <View className="alternating-text-view absolute left-0 top-0 h-screen w-full">
            <Scene flavors={sliceFlavor}/>
          </View>

          {/* Text Sections */}
          {sliceText.map((item, index) => (
            <div
              key={item?.heading }
              className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2"
            >
              <div
                className={clsx(
                  index % 2 === 0 ? "col-start-1" : "md:col-start-2",
                  "rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30",
                )}
              >
                <h2 className="text-balance text-6xl font-bold">
                  {item.heading}
                </h2>
                <div className="mt-4 text-xl">{item.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default AlternatingText;
