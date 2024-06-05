"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NavLinks } from "@/constants";

const Navbar = () => {
  const [isMObileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="w-full h-auto border-2 flex flex-1 flex-col justify-between items-center lg:h-[136px] lg:flex-col">
      <div className="w-full h-[96px] m-0 p-0 flex flex-1 justify-between items-center lg:h-[136px] lg:flex-col">
        <div>
          <a href="/">
          <img
            className="w-[130px] h-[46px] m-6 "
            src="./logo (2).png"
            alt="Logo"
          
          />
          </a>
        </div>
        <div className="justify-self-center h-[50px]">
          <ul className="lg:flex hidden text-small gap-7">
            {NavLinks.map((link) => (
              <Link href={link.href} key={link.key}>
                <div className="nav-title group transition duration-300 ">
                  {link.text}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#000000]"></span>
                </div>
              </Link>
            ))}
          </ul>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setMobileMenu(!isMObileMenu)}>
            <img
              className=" w-[17px] h-[26px] m-6"
              src="./mobile-menu.png"
              alt=""
            />
          </button>
        </div>
      </div>

      {isMObileMenu &&(

        <div className="flex flex-col  justify-center items-center h-auto w-full p-4 shadow-2xl">
          <ul className="lg:flex text-small gap-7">
            {NavLinks.map((link) => (
              <Link href={link.href} key={link.key}>
                <div className="nav-title group transition duration-300 ">
                  {link.text}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#00000]"></span>
                </div>
              </Link>
            ))}
          </ul>
        </div>
      )}
      
    </nav>
  );
};

export default Navbar;
