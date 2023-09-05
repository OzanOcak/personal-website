"use client";
import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";
import { projectConstant } from "../(projects)/project/constants/projectConstant";

interface Props {
  id: number;
  title: string;
  imgSrc: string;
  previewLink: string;
  technology: string;
  tags: string[];
  description: string;
}

function Archive() {
  const [showMore, setShowMore] = useState(false);
  const [prono, setProno] = useState(0);
  return (
    <div className="max-w-[98%] md:max-w-[80%] mx-auto py-10 lg-py-24 px-4 mt-32">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-green-500">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lg:px-10">
        {projectConstant.slice(0, 3).map((project) => (
          <ArchiveCard
            title={project.title}
            desc={project.description}
            listItems={project.tags}
            link={project.previewLink}
          />
        ))}
        {showMore &&
          projectConstant.slice(3, 6).map((project: any) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ArchiveCard
                title={project.title}
                desc={project.description}
                listItems={project.tags}
                link={project.previewLink}
              />
            </motion.div>
          ))}
      </div>
      <div className="flex justify-center my-10">
        {prono > 0 ? (
          <a
            href="/project"
            className="w-36 h-12 rounded-md text-green-500 flex justify-center items-center
         text-[13px] border border-green-500 hover:bg-gray-800 duration-300"
          >
            <span>Go to Projects</span>
          </a>
        ) : (
          <button
            onClick={() => {
              setShowMore(true);
              setProno((prono) => prono + 1);
            }}
            className="w-36 h-12 rounded-md text-green-500
         text-[13px] border border-green-500 hover:bg-gray-800 duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
}

export default Archive;
