"use client";
import { useState } from "react";
import { FaLinkedin, FaShare, FaGithub, FaMicroblog } from "react-icons/fa";
import { PiCodesandboxLogoDuotone } from "react-icons/pi";
import { GrClose } from "react-icons/gr";
import { SiGmail } from "react-icons/si";

function Social() {
  const [open, setOpen] = useState(true);
  function handleClick() {
    setOpen(!open);
  }
  {
    /* useEffect(() => {
    urls.forEach((url) => icons.push(url.replace(/.+\/\/|www.|\..+/g, "")));
  },[]);*/
  }
  return (
    <div className="relative flex items-center">
      <div
        className={`absolute rounded-xl z-10  ${
          open ? "ml-[3rem] top-[37%]" : "ml-4 top-[53%]"
        } transition-all hover:scale-125`}
        onClick={handleClick}
      >
        {!open ? (
          <FaShare />
        ) : (
          <div className="dark:bg-green-500 dark:rounded-2xl">
            <GrClose />
          </div>
        )}
      </div>
      <div
        className={`absolute  top-[40%] flex-1 ${
          open
            ? "w-[4rem] ml-0 dark:border dark:border-white"
            : "w-[.20rem] ml-2 h-[30%] dark:border dark:border-green-500"
        } backdrop-blur-xl bg-black/10 rounded-r-xl transition-all`}
      >
        {open && (
          <div className="flex-1">
            <div className=" text-2xl m-3 my-5 p-2 py-.5 bg-gray-200 dark:bg-black rounded-full border border-gray-400 dark:border-white flex justify-center hover:scale-125 transition duration-500 ease-in-out ">
              <a href="https://www.linkedin.com/in/ozanocak/">
                <FaLinkedin />
              </a>
            </div>
            <div className=" text-2xl m-3 my-5 p-2 py-.5 bg-gray-200 dark:bg-black rounded-full border border-gray-400 dark:border-whiteflex justify-center hover:scale-125 transition duration-500 ease-in-out">
              <a href="https://github.com/OzanOcak">
                <FaGithub />
              </a>
            </div>
            <div className=" text-2xl m-3 my-5 p-2 py-.5 bg-gray-200 dark:bg-black rounded-full border border-gray-400 dark:border-white flex justify-center hover:scale-125 transition duration-500 ease-in-out">
              <a href="https://codesandbox.io/u/OzanOcak">
                <PiCodesandboxLogoDuotone />
              </a>
            </div>
            <div className=" text-2xl m-3 my-5 p-2 py-.5 bg-gray-200 dark:bg-black rounded-full border border-gray-400 dark:border-white flex justify-center hover:scale-125 transition duration-500 ease-in-out">
              <a href="https://ozanocak.github.io/">
                <FaMicroblog />
              </a>
            </div>
            <div className=" text-2xl m-3 my-5 p-2 py-.5 bg-gray-200 dark:bg-black rounded-full border border-gray-400 dark:border-white flex justify-center hover:scale-125 transition duration-500 ease-in-out">
              <div
                onClick={() =>
                  (window.location.href = "mailto:yourmail@domain.com")
                }
              >
                <SiGmail />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Social;
