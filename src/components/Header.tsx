import Image from "next/image";
import React from "react";
import chillLogo from "../../public/logo/ChillCan.png"

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <div className="z-10 h-20 cursor-pointer text-sky-800" >
        <Image alt="chill Can Png" src={chillLogo}  height={300} width={140}/>
        </div>
    </header>
  );
}
