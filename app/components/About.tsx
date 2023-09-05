"use client";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Me from "../../public/images/me.jpeg";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="max-w-[98%] md:max-w-[80%] mx-auto pt-32 flex flex-col gap-4 lg:gap-8 px-4 md:px-10 xl:px-12 mb-32"
    >
      <SectionTitle title="About Me" />
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg-w-2/3 text-base text-gray-500 font-medium flex flex-col gap-4">
          <p>
            I'm a front-end web developer with over 5 years of experience in the
            field. I'm passionate about creating beautiful, user-friendly
            websites that provide a seamless user experience. I specialize in
            HTML, CSS, JavaScript and React and I'm always looking for ways to
            stay up-to-date with the latest web development trends and
            technologies. I love the challenge of taking a design concept and
            turning it into a fully functional website that exceeds my clients'
            expectations.
          </p>
          <p>
            My approach to web development is centered around collaboration and
            communication. I believe that a successful project is built on a
            foundation of{" "}
            <span className="text-green-500">
              strong relationships with my clients and a deep understanding of
              their needs and goals.
            </span>
          </p>
          <p>
            When I'm not coding, you can usually find me exploring new hiking
            trails. If you're interested in working together on your next web
            development project, please don't hesitate to get in touch.
            <span className="text-green-500">I'd love to hear from you!</span>
          </p>
          <p>Here are a few technologies I have been working with</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-3 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <motion.span
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-lg font-titleFont tracking-wide text-green-500"
              >
                <AiFillThunderbolt />
              </motion.span>
              JavaScript
            </li>
            <li className="flex items-center gap-2">
              <motion.span
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-lg font-titleFont tracking-wide text-green-500"
              >
                <AiFillThunderbolt />
              </motion.span>
              React.js
            </li>
            <li className="flex items-center gap-2">
              <motion.span
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-lg font-titleFont tracking-wide text-green-500"
              >
                <AiFillThunderbolt />
              </motion.span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <motion.span
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-lg font-titleFont tracking-wide text-green-500"
              >
                <AiFillThunderbolt />
              </motion.span>
              React Native
            </li>
            <li className="flex items-center gap-2">
              <motion.span
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-lg font-titleFont tracking-wide text-green-500"
              >
                <AiFillThunderbolt />
              </motion.span>
              CSS
            </li>
            <li className="flex items-center gap-2">
              <motion.span
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-lg font-titleFont tracking-wide text-green-500"
              >
                <AiFillThunderbolt />
              </motion.span>
              C Language
            </li>
            <li className="flex items-center gap-2">
              <motion.span
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-lg font-titleFont tracking-wide text-green-500"
              >
                <AiFillThunderbolt />
              </motion.span>
              HTML
            </li>
            <li className="flex items-center gap-2">
              <motion.span
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-lg font-titleFont tracking-wide text-green-500"
              >
                <AiFillThunderbolt />
              </motion.span>
              TailwindCSS
            </li>
            <li className="flex items-center gap-2">
              <motion.span
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-lg font-titleFont tracking-wide text-green-500"
              >
                <AiFillThunderbolt />
              </motion.span>
              Next.js
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3  h-80 relative group">
          <div className="absolute w-80 h-80 -left-4 -top-6 rounded-lg ">
            <div className=" h-full relative z-20 flex pl-6 lg:pl-0 justify-center md:justify-start">
              <Image
                src={Me}
                alt="profile_img"
                className="rounded-lg h-full object-cover"
              />
              <div
                className="hidden lg:inline-block absolute w-[14.5rem] h-[22rem] bg-green-700/20 rounded-md
              top-0 left-0 group-hover:bg-transparent duration-300"
              ></div>
            </div>
          </div>
          <div
            className="hidden  lg:inline-flex w-52 h-80 border-2 border-green-500 rounded-md 
            group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"
          ></div>
        </div>
      </div>
    </section>
  );
}

export default About;
