import { Bounded } from "@/components/Bounded";
import Button from "@/components/Button";
import Soda3DViewr from "@/components/Soda3DView";
import React from "react";
import { FaCartArrowDown } from "react-icons/fa";


const ProductShowCase = () => {
  return (
    <Bounded className="h-auto md:h-screen w-full bg-red-100 text-sky-950 pb-7 ">
      <div className=" md:mt-0 w-full">
        <div className="container flex flex-col-reverse items-center justify-between gap-1 md:gap-8 lg:gap-12 md:flex-row ">
          <div className="leftside flex max-w-[500px] flex-col gap-8">
            <h1 className="text-6xl font-bold">Black Cherry</h1>
            <p className="leading-7">
              Experience the bold and irresistible taste of Chill Can Black Cherry Bliss. Each sip delivers a perfect balance of deep &apos;juicy&apos; black cherry flavor with just the right amount of sweetness and fizz. This refreshing soda brings the taste of ripe black cherries in a deliciously smooth and satisfying beverage &apos;perfect&apos; for quenching your thirst and satisfying your craving for something sweet and bold. Whether you&apos;re enjoying it on its own or pairing it with your favorite meal, Chill Can Black Cherry Bliss is the ultimate choice for cherry lovers.
            </p>
            <div className="buttons flex  items-center gap-8 mt-4 ">
              <button className="rounded-xl cursor-pointer bg-orange-600 hover:bg-orange-500 px-6 py-2 text-white text-xl font-medium">
                Buy Now
              </button>
              <FaCartArrowDown className=" cursor-pointer hover:text-orange-600" size={40} />

            </div>
          </div>

          <div className="rightside relative cursor-pointer">
            <Soda3DViewr flavor="blackCherry" />
            <div className="intro absolute bottom-32 right-0 w-full ">
             {"<"} Hover/Scroll the Can for 360 degrees View {">"}
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default ProductShowCase;
