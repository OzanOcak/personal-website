import "../../styles/globals.css";
//import Footer from "../sections/Footer";
//import Providers from "../components/Providers";
//import LeftSide from "./components/LeftSide";
//import RightSide from "./components/RightSide";
//import Navbar from "./components/Navbar";
import Navbar2 from "../components/Navbar2";
//

export default function ProjectLayout({ children }) {
  return (
    <div
      className="w-full h-screen font-bodyFont bg-white text-black dark:bg-black dark:text-white absolute top-0 z-100
    overflow-x-hidden no-scrollbar overflow-y-scroll md:scrollbar scrollbar-track-gray-700/20 scrollbar-thumb-gray-500/60"
    >
      <Navbar2 />

      <div className="flex-grow">{children}</div>
    </div>
  );
}

//<Link href={`/`} onClick={() => (window.location.href = "/")}></Link>
