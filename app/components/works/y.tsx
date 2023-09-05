"use client";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

function ReactBD2() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        React3
        <span className="text-green-500 font-medium text-sm mt-1">
          @March of Dimes Canada
        </span>
      </h3>
      <p className="text-em mt-1 font-medium text-xl font-titleFont">
        Jan 2023 - present
      </p>
      <ul>
        <li className="text-base flex gap-2 text-gray-500">
          <span>
            <TiArrowForward />
          </span>
          • Built android and ios mobile applications using React.js, React
          Native, Context API, React Hooks and React Query. •
        </li>
      </ul>
    </motion.div>
  );
}

export default ReactBD2;
