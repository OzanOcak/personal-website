"use client";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

function ReactBD() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Front End Web Developer
        <span className="text-green-500 font-medium text-sm mt-1">
          @March of Dimes Canada
        </span>
      </h3>
      <p className="text-em mt-1 font-medium text-xl font-titleFont">
        Sep 2015 - Dec 2021
      </p>
      <ul>
        <li className="text-base flex gap-2 text-gray-500">
          <span>
            <TiArrowForward />
          </span>
          Designed, developed, tested and deployed farm/sandbox solu_ons and web
          parts based on requirements using HTML/XML, CSS, SASS, JavaScript,
          JQuery. • Developed ASP.NET RESTful apps in C#, made Ajax javascript
          calls to retrieve data for interac_ve web pages and web applica_ons. •
          Experienced with malware analysis, vulnerability assessment and
          penetra_on tes_ng, used Jira Scrum board for project management. •
          Developed custom HTML websites in both SP and WordPress for the
          company based on requirements using JavaScript,React.js, D3.js CSS, C#
          and PHP. • Followed the best prac_ce of WCAG A to create accessible
          websites.
        </li>
      </ul>
    </motion.div>
  );
}

export default ReactBD;
