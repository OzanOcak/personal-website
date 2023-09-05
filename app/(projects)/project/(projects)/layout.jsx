import Image from "next/image";
import Navbar2 from "../../../components/Navbar2";
import img from "../../../../public/images/google.png";
import bislingo from "../../../../public/images/bislingo.png";

export default function ProjectsLayout({ children }) {
  return (
    <div
      className="w-full h-screen font-bodyFont bg-white text-black dark:bg-black dark:text-white absolute top-0 z-100
    overflow-x-hidden no-scrollbar overflow-y-scroll md:scrollbar scrollbar-track-gray-700/20 scrollbar-thumb-gray-500/60"
    >
      <Navbar2 />

      <header class="w-full h-[34rem] bg-[url('../public/images/bislingo.png')] opacity-90 bg-cover bg-center flex justify-center items-center ">
        <div class="flex flex-col justify-center items-center ">
          <h1 class=" text-center text-5xl text-gray-700 font-bold drop-shadow-lg">
            BisLingo
          </h1>
          <p class="mt-5 text-center text-lg text-black opacity-90">
            Learn languages by playing games.
          </p>
          <a
            class="w-48 inline-block bg-green-500/70  hover:bg-green-400/80 transition-colors mt-10"
            href="https://play.google.com/store/apps/details?id=com.oocak.panelistmobilerevised"
          >
            <Image
              className="h-auto max-w-full"
              src={img}
              alt="image description"
            />
          </a>
        </div>
      </header>

      <div className="flex-grow mx-2 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-48">
        {children}
      </div>
    </div>
  );
}
