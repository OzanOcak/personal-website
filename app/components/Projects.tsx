import SectionTitle from "./SectionTitle";
import img1 from "../../public/images/bislingo.png";
import img2 from "../../public/images/react05.png";
import Image from "next/image";
//import { AiOutlineYoute } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import { DiAndroid } from "react-icons/di";
import { RxOpenInNewWindow } from "react-icons/rx";
import { CgWebsite } from "react-icons/cg";

function Projects() {
  return (
    <section
      id="project"
      className="max-w-[98%] md:max-w-[80%] mx-auto pt-32 px-4"
    >
      <SectionTitle title="Some Projects I have built" />
      <div className="flex flex-col  items-center justify-center  w-full  gap-28 mt-10">
        <div
          className=" mx-auto py-10 lg-py-24 px-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:px-12 lg:px-16 xl:px-32   text-black
     dark:text-gray-300 dark:bg-gray-900 rounded-lg shadow-lg"
        >
          <a
            href="https://www.oocak.com/project/bislingo"
            target="_blank"
            className="w-full h-[16rem] sm:h-[20rem] items-center bg-green-500 relative group py-12"
          >
            <Image
              className="w-full h-full object-fit"
              src={img1}
              alt="project_img"
            />
          </a>
          <div
            className="w-full xl:w-full flex flex-col gap-6 lg:justify-between
            items-end text-right md:-ml-16 z-10"
          >
            <p className="font-titleFont text-green-500 text-sm tracking-wide">
              Featured Projects
            </p>
            <h3 className="text-2xl font-bold">Bislingo</h3>
            <p className="bg-gray-100 dark:bg-[#112240]  text-sm md:text-base p-2 md:p-6 rounded-md">
              I built an Android App with{" "}
              <span className="text-green-500">
                {" "}
                React Native, React.js, TailwindCSS,Redux and TypeScript{" "}
              </span>
              It allows user create her own dictionary and interact with them by
              playing games and taking computer generated{" "}
              <span className="text-green-500">quizzes</span>, The project use
              Redux and Redux persistence for state management .
            </p>
            <ul
              className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5
            justify-between text-gray-500"
            >
              <li>React Native</li>
              <li>TypeScript</li>
              <li>Redux</li>
              <li>Tailwindcss</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.oocak.panelistmobilerevised"
                className="hover:text-text-green-500 duration-300"
              >
                <DiAndroid />
              </a>
              <a
                href="https://www.oocak.com/project/bislingo"
                className="hover:text-text-green-500 duration-300"
              >
                <CgWebsite />
              </a>
            </div>
          </div>
        </div>
        {/** ------------------------ */}
        <div
          className="mx-auto py-10 lg-py-24 px-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:px-12 lg:px-16 xl:px-32   text-black
     dark:text-gray-300 dark:bg-gray-900 rounded-lg shadow-lg"
        >
          <a
            href="https://twitterfirebaseclone.vercel.app/"
            target="_blank"
            className="w-full xl:w-1/2 h-auto relative group"
          >
            <div className="min-w-[16rem] lg:w-full">
              <Image
                className="w-full h-full object-contain"
                src={img2}
                alt="project_img"
              />
            </div>
          </a>
          <div
            className="w-full xl:w-full flex flex-col gap-6 lg:justify-between
             items-start text-left md:-mr-16 z-10 "
          >
            <p className="font-titleFont text-green-500 text-sm tracking-wide">
              Featured Projects
            </p>
            <h3 className="text-2xl font-bold">Twitter Clone</h3>
            <p className="bg-gray-100 dark:bg-[#112240]  text-sm md:text-base p-2 md:p-6 rounded-md">
              I built a Medium.com clone using various technologies:{" "}
              <span className="text-green-500">
                Next.js, React.js, Firebase and Next-Auth
              </span>
              It is social networking app allows post{" "}
              <span className="text-green-500">twitter's tweets like</span>{" "}
              comments, and likes others' posts.
            </p>
            <ul
              className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5
            justify-between text-gray-500"
            >
              <li>Next.js</li>
              <li>FireBase</li>
              <li>Next-auth</li>
              <li>TailwindCSS</li>
              <li>React.js </li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                href="https://github.com/OzanOcak/twitterfirebaseclone"
                className="hover:text-text-green-500 duration-300"
              >
                <TbBrandGithub />
              </a>
              <a
                href="https://twitterfirebaseclone.vercel.app/"
                className="hover:text-text-green-500 duration-300"
              >
                <CgWebsite />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
