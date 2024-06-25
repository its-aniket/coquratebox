"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NavLinks, sociallinks } from "@/constants";

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
          {isMObileMenu ? (
            <button onClick={() => setMobileMenu(!isMObileMenu)}>
              <img
                className=" w-[20px] h-[20px] m-6"
                src="./assets/close.png"
                alt=""
              />
            </button>
          ) : (
            <button onClick={() => setMobileMenu(!isMObileMenu)}>
              <img
                className=" w-[17px] h-[26px] m-6"
                src="./mobile-menu.png"
                alt=""
              />
            </button>
          )}
          {/* <button onClick={() => setMobileMenu(!isMObileMenu)}>
            <img
              className=" w-[17px] h-[26px] m-6"
              src="./mobile-menu.png"
              alt=""
            />
          </button> */}
        </div>
      </div>
      {isMObileMenu && (
        <div className="fixed inset-y-0 right-0 w-[300px] bg-white z-50 shadow-lg lg:hidden">
          <div className="flex flex-col w-full h-full justify-between p-4">
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setMobileMenu(!isMObileMenu)}
                className="text-2xl"
              >
                &times;
              </button>
            </div>
            <div className="w-full flex items-center justify-center">
              <a href="/">
                <img
                  className="w-[130px] h-[46px] m-6 "
                  src="./logo (2).png"
                  alt="Logo"
                />
              </a>
            </div>
            {/* Navigation Links */}
            <div className="h-full items-start mt-5">
              <ul className="flex flex-col gap-4 text-lg w-full text-right">
                {NavLinks.map((link) => (
                  <div key={link.key} className="flex justify-between items-center border-b-[1px]">
                    <div>
                      <img
                        src="./arrow.png"
                        alt="down button"
                        className="w-[25px] h-[25px] -rotate-90"
                      />
                    </div>
                    <Link href={link.href} >
                      <div className="nav-title group transition duration-300  ">
                        {link.text}
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                      </div>
                    </Link>
                  </div>
                ))}
              </ul>
            </div>

            {/* Social Media Icons */}
            <div className="w-full h-auto flex flex-col justify-between items-center text-center p-5 lg:flex-row">
              <div className="w-full justify-center sm:w-[50%] h-auto flex gap-2 items-center sm:justify-start">
                {sociallinks.map((link, index) => (
                  <div key={index} className="w-[30px] h-[30px]">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={link.scr} alt={link.alt} />
                    </a>
                  </div>
                ))}
              </div>
              <div className="mt-2 w-full text-center ">
                @ 2024 coquratebox | all right reserved
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
