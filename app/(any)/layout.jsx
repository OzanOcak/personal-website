import Navbar2 from "../components/Navbar2";

export default function AnyLayout({ children }) {
  return (
    <div
      className="w-full h-screen font-bodyFont bg-white text-black dark:bg-black dark:text-white absolute top-0 z-100
    overflow-x-hidden no-scrollbar overflow-y-scroll md:scrollbar scrollbar-track-gray-700/20 scrollbar-thumb-gray-500/60"
    >
      <Navbar2 />

      <div className="flex-grow mx-2 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-48">
        {children}
      </div>
    </div>
  );
}
