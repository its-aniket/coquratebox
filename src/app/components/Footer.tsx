"use client";
import React, { useState } from "react";
import Link from "next/link";
import { footerLinks, sociallinks } from "@/constants";
import { Pompiere } from "next/font/google";
import useMedia from 'use-media';

const pompiere = Pompiere({
  subsets: ["latin"],
  weight: "400",
});

type VisibleSections = {
  [key: string]: boolean;
};

const Footer = () => {
  const isTabletOrLarger = useMedia({ minWidth: 1024 });
  const [visibleSections, setVisibleSections] = useState<VisibleSections>({});

  const toggleSection = (title: string) => {
    setVisibleSections((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  return (
    <div className="flex flex-col bg-[#E9DEF4] w-full transition lg:delay-500">
      <div className="flex flex-col border-t border-black lg:flex-row">
        <div className="w-[85%] self-center h-full flex justify-center items-center p-10 border-b border-black lg:border-none lg:justify-start lg:items-start">
          <a href="/">
            <img className="w-[130px] h-auto lg:w-[170px]" src="./logo (2).png" alt="Logo" />
          </a>
        </div>
        {footerLinks.map((section) => (
          <div className="flex flex-col self-center justify-center items-center w-[85%] h-auto p-5 border-b border-black lg:border-none" key={section.title}>
            <h3 className={`w-full text-center lg:text-left text-xl gap-7 cursor-pointer`} onClick={() => toggleSection(section.title)}>
              {section.title}
            </h3>
            {(isTabletOrLarger || visibleSections[section.title]) && (
              <ul className="text-xl w-full gap-7 text-center mt-4 lg:text-left">
                {section.links.map((link) => (
                  <li key={link.key} className="nav-title group transition duration-300">
                    <Link href={link.href} className="text-sm transition duration-300">
                      {link.text}
                    </Link>
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className="w-full h-auto flex flex-col justify-between items-center p-5 sm:flex-row">
        <div className="w-full justify-center sm:w-[50%] h-auto flex gap-2 items-center sm:justify-start">
          {sociallinks.map((link, index) => (
            <div key={index} className="w-[30px] h-[30px]">
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <img src={link.scr} alt={link.alt} />
              </a>
            </div>
          ))}
        </div>
        <div className="mt-2 w-full text-center sm:text-right">
          @ 2024 coquratebox | all right reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
