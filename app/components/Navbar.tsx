"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import logo from "../../public/logo.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import DarkModeButton from "../../components/DarkModeButton";

function Navbar() {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
    //elem?.scrollTo({ top: 10, behavior: "smooth" });
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      setShowMenu(false);
    }
  }
  return (
    <div
      className="w-full shadow-[4rem] h-20 lg:h-[12vh] sticky top-0 z-50 bg-white
       dark:bg-black dark:text-white px-1 md:px-4 font-bodyFont"
    >
      <div
        className="max-w-[96%] h-full mx-auto py-1 font-titleFont
       flex items-center justify-between"
      >
        <Link href={`/`}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={logo}
              alt="logo"
              className=" w-10 md:w-14 rounded-[0.6rem] md:rounded-[1.2rem]"
            />
          </motion.div>
        </Link>
        <div className="hidden md:inline-flex items-center gap-5">
          <ul className="flex text-[1rem] gap-5 py-1">
            <Link href="#home" onClick={handleScroll}>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
                className="navlink"
              >
                Home
              </motion.li>
            </Link>
            <Link href="#about" onClick={handleScroll}>
              <motion.li
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className="navlink"
              >
                About <span></span>
              </motion.li>
            </Link>
            <Link href="#project" onClick={handleScroll}>
              <motion.li
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="navlink"
              >
                Projects
              </motion.li>
            </Link>
            <Link href="#blogs" onClick={handleScroll}>
              <motion.li
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="navlink"
              >
                Blogs
              </motion.li>
            </Link>
            {/*<Link href="#contact" onClick={handleScroll}>
              <motion.li
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="navlink"
              >
                Contact
              </motion.li>
  </Link>*/}
          </ul>
          <a href="/assets/resume.pdf" target="_blank">
            <motion.button
              className="text-green-500 rounded-md border border-green-600
            hover:text-green-700  duration-300 px-2 py-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Resume
            </motion.button>
          </a>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <DarkModeButton />
          </motion.button>
        </div>
        <div
          className="w-6 h-5 flex flex-col justify-between items-center md:hidden
        text-4xl text-green-500 cursor-pointer overflow-hidden group"
          onClick={() => setShowMenu(true)}
        >
          <span
            className="w-full h-[2px] bg-green-500 inline-flex transform group-hover:translate-x-2
          transition-all ease-in-out duration-300"
          ></span>
          <span
            className="w-full h-[2px] bg-green-500 inline-flex transform translate-x-3
          group-hover:translate-x-0 transition-all ease-in-out duration-300"
          ></span>
          <span
            className="w-full h-[2px] bg-green-500 inline-flex transform translate-x-1 group-hover:translate-x-3
          transition-all ease-in-out duration-300"
          ></span>
        </div>
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute md:hidden top-0 right-0 w-[84%] h-screen
             bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              className="w-[100%] h-full overflow-hidden md:overflow-scroll bg-gray-700
              flex flex-col items-center px-4 py-10 relative"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-green-500 cursor-pointer hover:tex-red-500 absolute
                top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    href="#home"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-gray-500
                   hover:text-green-500 cursor-pointer duration-300 nav-link text-2xl mb-2"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                      className="navlink"
                    >
                      Home
                    </motion.li>
                  </Link>
                  <Link
                    href="#about"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-gray-500
                   hover:text-green-500 cursor-pointer duration-300 nav-link text-2xl mb-2"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                      className="navlink"
                    >
                      About
                    </motion.li>
                  </Link>
                  <Link
                    href="#project"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-gray-500
                   hover:text-green-500 cursor-pointer duration-300 nav-link text-2xl mb-2"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                      className="navlink"
                    >
                      Projects
                    </motion.li>
                  </Link>
                  <Link
                    href="#blogs"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-gray-500
                   hover:text-green-500 cursor-pointer duration-300 nav-link text-2xl mb-2"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                      className="navlink"
                    >
                      Blog
                    </motion.li>
                  </Link>
                  {/*<Link
                    href="#contact"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-gray-500
                   hover:text-green-500 cursor-pointer duration-300 nav-link text-2xl mb-2"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}
                      className="navlink"
                    >
                      Contact
                    </motion.li>
        </Link>*/}
                </ul>
                <a href="/assets/resume.pdf" target="_blank">
                  <motion.button
                    className="text-green-500 rounded-md border border-green-600
            hover:text-green-700  duration-300 px-2 py-1 text-xl mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    Resume
                  </motion.button>
                </a>
                <motion.button
                  className=" duration-300 "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="text-center">
                    <DarkModeButton />
                  </div>
                </motion.button>
              </div>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, ease: "easeIn" }}
                className="text-sm w-72 tracking-widest text-white dark:text-green-500 hover:text-green-500 text-center mt-4"
                href=""
              >
                ozanocak@gmail.com
              </motion.a>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
