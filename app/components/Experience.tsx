"use client";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ReactBD from "./works/ReactBD";
import ReactBD1 from "./works/x";
import ReactBD2 from "./works/y";

function Experience() {
  const [work1, setWork1] = useState(true);
  const [work2, setWork2] = useState(false);
  const [work3, setWork3] = useState(false);

  const handleWork1 = () => {
    setWork1(true);
    setWork2(false);
    setWork3(false);
  };
  const handleWork2 = () => {
    setWork1(false);
    setWork2(true);
    setWork3(false);
  };
  const handleWork3 = () => {
    setWork1(false);
    setWork2(false);
    setWork3(true);
  };

  return (
    <section
      id="experience"
      className="max-w-[98%] md:max-w-[80%] mx-auto py-10 lg-py-24 px-4"
    >
      <SectionTitle title="Where I worked" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-64 flex flex-col">
          <li
            onClick={handleWork1}
            className="border-l-2 border-l-green-500 text-gray-500 bg-transparent
          hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium"
          >
            Web Developer
          </li>
          <li
            onClick={handleWork2}
            className="border-l-2 border-l-green-500 text-gray-500 bg-transparent
          hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium"
          >
            Web Developer
          </li>
          <li
            onClick={handleWork3}
            className="border-l-2 border-l-green-500 text-gray-500 bg-transparent
          hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium"
          >
            Mobile App Developer
          </li>
        </ul>
        {work1 && <ReactBD />}
        {work2 && <ReactBD1 />}
        {work3 && <ReactBD2 />}
      </div>
    </section>
  );
}

export default Experience;
