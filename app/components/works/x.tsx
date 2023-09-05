"use client";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

function ReactBD1() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Web Developer
        <span className="text-green-500 font-medium text-sm mt-1">
          @Textr Team
        </span>
      </h3>
      <p className="text-em mt-1 font-medium text-xl font-titleFont">
        April 2022 - 2023
      </p>
      <ul>
        <li className="text-base flex gap-2 text-gray-500">
          <span>
            <TiArrowForward />
          </span>
          • Built applica_ons using React.js, React Na_ve, Context API, React
          Hooks and React Query. • Handed on experience using Redux and Redux
          Toolkit Query or Redux Thunk. • Developed custom APIs on top of
          Next.js and used React in the client side of the apps. • Experienced
          working with Git, Webpack, NPM, TypeScript, Netlify, Firebase, GraphQL
          and MongoDB Atlas. • Deployed with Docker and Kubernetes.
        </li>
      </ul>
    </motion.div>
  );
}

export default ReactBD1;
