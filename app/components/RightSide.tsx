"use client";
import { motion } from "framer-motion";

function RightSide() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="w-full h-full flex flex-col items-center justify-end gap-6 text-white"
    >
      <a href="mailto:ozanocak@gmail.com">
        <p className="text-sm rotate-90 w-72 tracking-wide text-green-500">
          ozanocak@gmail.com
        </p>
      </a>
      <span className="w-[2px] h-32 bg-gray-500 inline-flex"></span>
    </motion.div>
  );
}

export default RightSide;
