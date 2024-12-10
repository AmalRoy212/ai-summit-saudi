"use client";

import HoverButton from "@/ui/sub/hoverButton/HoverButton";
import Image from "next/image";
import React, { useState } from "react";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import MobileNav from "../mobileNav/MobileNav";
import { IoCloseCircleSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Navbar() {
  const [popup, setPopup] = useState(false);
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className="w-[100%] h-[65px] fixed top-0 bg-[#03001417] backdrop-blur-md z-[50] px-2 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="https://saudi.idasummit.com/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            data-aos="flip-right"
            data-aos-duration={600}
            src="/logo.png"
            alt="logo"
            width={90}
            height={90}
            className="cursor-pointer hover:animate-slowspin"
          />

          {/* <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            GENFINITY GLOBAL
          </span> */}
        </a>

        <div className="w-[800px] h-full hidden md:flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a
              href={pathname === "/" ? "#about-us" : "/"}
              className="cursor-pointer text-sm"
            >
              ABOUT
            </a>
            <a
              href={pathname === "/" ? "#happening" : "/"}
              className="cursor-pointer text-sm"
            >
              HAPPENINGS
            </a>
            <a
              href={pathname === "/" ? "#speakers" : "/"}
              className="cursor-pointer text-sm"
            >
              SPEAKERS
            </a>
            <a href="/agendas" className="cursor-pointer text-sm">
              AGENDA
            </a>
            <a
              href={pathname === "/" ? "#" : "/#"}
              className="cursor-pointer text-sm"
            >
              SPONSORS & PARTNERS
            </a>
          </div>
        </div>
        {popup ? (
          <button
            data-aos="flip-up"
            onClick={() => setPopup(false)}
            className="text-white md:hidden flex"
          >
            <IoCloseCircleSharp size={30} />
          </button>
        ) : (
          <button
            data-aos="flip-down"
            data-aos-duration={900}
            onClick={() => setPopup(true)}
            className="text-white md:hidden flex"
          >
            <BsFillMenuButtonWideFill size={30} />
          </button>
        )}
      </div>
      {popup && <MobileNav setPopup={setPopup} />}
    </div>
  );
}

export default Navbar;
