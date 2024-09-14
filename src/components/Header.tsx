
"use client"
import Image from "next/image";
import React, { useState } from "react";
import chillLogo from "../../public/logo/chillcanlogo.png";

type Props = {};

export default function Header({}: Props) {
  // State to handle mobile menu toggle
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="flex w-full justify-center py-4">
      <div className="z-50 h-20 cursor-pointer text-sky-800">
        {/* Desktop Navbar */}
        <div className="navbar md:flex hidden items-center justify-between p-4 flex-wrap ">
          <div className="flex w-full items-center justify-between gap-12">
            <Image
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
                <li className="cursor-pointer hover:text-[#F97316]">Sunita</li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="mobile-nav md:hidden w-full flex justify-between p-4 gap-4">
          <Image alt="Chill Can Logo" src={chillLogo} height={50} width={140} />
          <button onClick={toggleDrawer} className="text-xl font-medium text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Drawer Menu */}
        <div
          className={`fixed top-0 md:hidden left-0  h-full w-64 bg-white shadow-lg transform ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <button
            onClick={toggleDrawer}
            className="absolute top-4 right-4 text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav className="flex flex-col gap-6 p-6 text-xl font-medium text-gray-700">
            <a href="#" className="hover:text-[#F97316]">Our Company</a>
            <a href="#" className="hover:text-[#F97316]">Brands</a>
            <a href="#" className="hover:text-[#F97316]">Sustainability</a>
            <a href="#" className="hover:text-[#F97316]">Careers</a>
            <a href="#" className="hover:text-[#F97316]">Media Center</a>
            <a href="#" className="hover:text-[#F97316]">
              
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
