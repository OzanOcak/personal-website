import "../styles/globals.css";
import Footer from "../sections/Footer";
import Providers from "../components/Providers";
import RightSide from "./components/RightSide";
import Navbar from "./components/Navbar";
import Social from "./components/Social";

const path = require("path");

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-white dark:bg-gray-800">
        <Providers>
          <div
            className="w-full h-screen font-bodyFont bg-white text-black dark:bg-black dark:text-white 
    overflow-x-hidden no-scrollbar overflow-y-scroll md:scrollbar scrollbar-track-gray-700/20 scrollbar-thumb-gray-500/60"
          >
            <Navbar />
            <div className=" hidden md:inline-flex  sm:w-8 md:w-12 h-full fixed left-0 bottom-0">
              <Social />
            </div>
            <div className="flex-grow">{children}</div>
            {/*            <div className="hidden md:inline-flex w-32  bottom-0">
              <RightSide />
  </div>*/}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
