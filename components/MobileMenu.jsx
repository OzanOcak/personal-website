"use client";
import Link from "next/link";
import { useState } from "react";
import DarkModeButton from "./DarkModeButton";
import logo from "../public/images/logo.png";
import iconClose from "../public/images/icon-close.svg";
import iconHamburger from "../public/images/icon-hamburger.svg";
import Image from "next/image";

const Nav = () => {
  let [open, setopen] = useState(false);
  const menus = [
    { label: "Home", path: "/" },
    { label: "Blog", path: "/posts" },
    { label: "Projects", path: "/project" },
    // { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];
  return (
    <nav className="flex items-center justify-between pt-5 ">
      <Image
        src={open ? iconClose : iconHamburger}
        className="md:hidden h-8 w-8 fixed right-5 cursor-pointer z-50 top-8  bg-gray-100 dark:bg-black border-solid border-2 border-gray-100 "
        alt="icon"
        onClick={() => setopen(!open)}
      />
      <div className="relative h-10 w-10  ml-8 overflow-hidden object-cover rounded-lg grayscale-60 lg:left-4">
        <Link href="/">
          <Image src={logo} fill priority={true} alt="logo" sizes="" />
        </Link>
      </div>
      <div className="flex">
        <div className="nav-list ">
          <ul
            className={`flex flex-col md:flex-row backdrop-blur-md px-16 md:px-4 md:static fixed duration-500 ease-linear 
            top-0 md:h-auto h-screen z-40 rounded-3xl  ${
              !open ? "right-[-100%] " : "right-0"
            }`}
          >
            <div className="p-2 px-1 pr-0 md:pr-14  pt-3 ">
              <DarkModeButton />
            </div>
            {menus.map((menu, index) => (
              <li
                key={index}
                className="md:inline-block mt-4  md:my-0 my-2  border-b-2 border-transparent drop-shadow-2xl hover:border-black dark:hover:border-blue-500 duration-300 rounded-lg hover:bg-white/0"
              >
                <Link
                  href={menu.path}
                  className="text-black dark:text-blue-400  hover:dark:text-blue-500 cursor-pointer font-Barlow font-bold text-3xl md:text-xl inline-block md:py-3 py-3"
                >
                  <span className="font-bold tracking-wider  mx-8 md:mx-2">
                    {/*index*/} {menu.label}
                  </span>{" "}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/*<div className="p-2 px-1 pr-14 pt-3">
          <DarkModeButton />
            </div>*/}
      </div>
    </nav>
  );
};
export default Nav;
