"use client";
import React, { useEffect, useState } from "react";
import ButtonRenderer from "./ButtonRenderer";
import ProjectCard from "./ProjectCard";
import { buttonConstant } from "./constants/buttonConstant";
import { projectConstant } from "./constants/projectConstant";

const Project = () => {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [buttonsData, setButtonsData] = useState(buttonConstant);

  useEffect(() => {
    filterProjects();
  }, [buttonsData]);

  // buttonConstants has selected key, and we change them true if they have target technology's name.
  function changeSelectedKeyOfButton(event) {
    let technologyName = event.target.id;
    let copyButtonData = [...buttonsData];
    copyButtonData.forEach((constant) => {
      if (constant.id === technologyName) {
        constant.selected = true;
      } else {
        constant.selected = false;
      }
    });
    // setButtonsData([]);
    setButtonsData(copyButtonData);
  }

  function filterProjects() {
    const selectedTech = buttonsData.find((data) => data.selected === true);

    console.log(selectedTech);

    if (selectedTech) {
      let filteredProjects = projectConstant.filter(
        (project) => project.technology === selectedTech.id
      );

      setFilteredProjects([...filteredProjects]);
    } else {
      setFilteredProjects(projectConstant);
    }
  }

  return (
    <div className="flex w-full flex-col min-h-screen items-center md:items-start md:flex-row px-8  relative">
      <div className=" md:w-2/6  lg:w-1/6 flex flex-col mb-4">
        <h1 className="font-bold text-xl mb-8 dark:text-sky-500">
          My Projects
        </h1>

        <div>
          <ButtonRenderer
            buttonData={buttonConstant}
            handleClickButton={changeSelectedKeyOfButton}
          />
        </div>
      </div>

      <div className=" md:w-4/6 lg:w-5/6  z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  ">
          {filteredProjects.map((object) => (
            <ProjectCard key={object.name} {...object} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="notice-message">{`Loading ...`}</p>
        )}
      </div>
    </div>
  );
};
export default Project;
