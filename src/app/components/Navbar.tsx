import React from "react";
import Link from "next/link";
import { NavLinks } from "@/constants";
const Navbar = () => {
  return (
    <nav className="w-full h-[96px] border-2 flex flex-1 justify-between items-center lg:h-[136px] lg:flex-col">
      <div>
        <img
          className="w-[130px] h-[46px] m-6 "
          src="./logo (2).png"
          alt="Logo"
        />
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
        <img
          className=" w-[17px] h-[26px] m-6"
          src="./mobile-menu.png"
          alt=""
        />
      </div>
    </nav>
  );
};

export default Navbar;
