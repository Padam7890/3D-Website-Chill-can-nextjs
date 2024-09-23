"use client";

import { Bounded } from "@/components/Bounded";
import Scenes from "./Scene";
import { View } from "@react-three/drei";
import { useGetSkydiveQuery } from "@/redux/api/skydive/skydive";

const SkyDive = (): JSX.Element => {
  const { data, isLoading, isError, isSuccess } = useGetSkydiveQuery();

  // Extract SkydiveData after the query is successful
  const SkydiveData = data?.data[0];
  console.log(SkydiveData?.title);
  // Conditionally render based on API response
  return (
   
    <Bounded className="skydive mt-0 h-screen w-screen">
      <h2 className="sr-only">{SkydiveData?.title}</h2>
      <View className="h-screen w-screen">
        <Scenes
          flavor={SkydiveData?.flavor.flavorName  as string}
          sentence={SkydiveData?.title as string ?? ""}
        />
      </View>
    </Bounded>
  );
};

export default SkyDive;
