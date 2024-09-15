"use client";

import { forwardRef, ReactNode } from "react";
import { Float } from "@react-three/drei";

import { SodaCan, SodaCanProps } from "@/components/SodaCan";
import { Group } from "three";

type FloatingCanProps = {
  flavor?: SodaCanProps["flavor"] | string | undefined;
  floatSpeed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
  children?: ReactNode;
  ThreeD?:boolean;
};

const FloatingCan = forwardRef<Group, FloatingCanProps>(
  (
    {
      flavor = "blackCherry" as any,
      floatSpeed = 1.5,
      rotationIntensity = 1,
      floatIntensity = 1,
      floatingRange = [-0.1, 0.1],
      ThreeD = false,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <>
      {
        ThreeD ? (<group ref={ref} {...props}>
          <Float
            speed={floatSpeed}
            rotationIntensity={rotationIntensity}
            floatIntensity={floatIntensity}
            floatingRange={floatingRange}
          >
            {children}
            <SodaCan flavor={flavor} />
          </Float>
        </group>):(
          <group ref={ref} {...props}>
          <Float
            speed={floatSpeed}
            rotationIntensity={rotationIntensity}
            floatIntensity={floatIntensity}
            floatingRange={floatingRange}
          >
            {children}
            <SodaCan flavor={flavor} />
          </Float>
        </group>
        )
      }
      
      </>
      
    );
  },
);

FloatingCan.displayName = "FloatingCan";

export default FloatingCan;
