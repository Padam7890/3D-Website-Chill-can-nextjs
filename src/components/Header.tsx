import Image from "next/image";
import React from "react";
import chillLogo from "../../public/logo/chillcanlogo.png";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="-mb-28 flex w-full justify-center py-4">
      <div className="z-10 h-20 cursor-pointer text-sky-800">
        <div className="navbar md:flex hidden items-center justify-between p-4 flex-wrap ">
          <div className="flex w-full items-center justify-between gap-12">
            <Image
              className=""
              alt="Chill Can Logo"
              src={chillLogo}
              height={50}
              width={140}
            />
            <nav>
              <ul className="flex items-center gap-8 text-xl font-medium text-gray-700">
                <li className="cursor-pointer hover:text-[#F97316]">
                  Our Company
                </li>
                <li className="cursor-pointer hover:text-[#F97316]">Brands</li>
                <li className="cursor-pointer hover:text-[#F97316]">
                  Sustainability
                </li>
                <li className="cursor-pointer hover:text-[#F97316]">Careers</li>
                <li className="cursor-pointer hover:text-[#F97316]">
                  Media Center
                </li>
                <li className="cursor-pointer hover:text-[#F97316]">
                  Investor
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* //mobile navbar  */}
        <div className="mobile-nav md:hidden w-full flex justify-between ">
          <div className="flex items-center justify-between gap-12">
            <Image
              className=""
              alt="Chill Can Logo"
              src={chillLogo}
              height={50}
              width={140}
            />
            <div className="flex items-center gap-2 text-xl font-medium text-gray-700">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            </div>
      
             
        </div>

        {/* //mobile drawarer menu */}
       
      </div>
    </header>
  );
}
