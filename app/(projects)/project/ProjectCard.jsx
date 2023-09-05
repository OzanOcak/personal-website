const ProjectCard = ({
  imgSrc,
  title,
  previewLink,
  codeLink,
  tags,
  description,
}) => {
  return (
    <div className=" bg-sky-500">
      <a href={previewLink}>
        <li className="list-none pb-0 ">
          {/*<img className="project-img" src={imgSrc} alt="" />*/}
          <div className="group relative h-64 overflow-hidden border-2 border-black/80 dark:border-green-500/80  flex justify-center items-center bg-sky-500">
            <div className="flex justify-end  items-start my-0.5 absolute right-0.5 top-1 z-10">
              <p className="flex flex-wrap justify-end">
                {tags?.map((tag) => (
                  <span className="bg-green-500 max-h-[1.4rem]  text-white px-2 py-1 ml-1 text-xs rounded-xl">
                    {tag}
                  </span>
                ))}
              </p>
            </div>

            <div className="flex justify-center items-center group-hover:bg-black/50 w-full h-full absolute z-20 transition-all duration-300"></div>
            {/* img */}
            <div className="bg-gray-500">
              <img
                className="group-hover:scale-125 transition-all duration-500 bg-gray-500"
                src={imgSrc}
                alt=""
              />
            </div>

            {/* pretitle */}
            <p className="absolute -bottom-full left-12 group-hover:bottom-36 transition-all duration-500 z-30">
              <span className="text-gradient text-white">React UI/UX </span>
            </p>
            {/* title */}
            <p className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-30">
              <span className="text-xl text-white">{title}</span>
            </p>

            {/*<ul className="flex mb-2 justify-end absolute bottom-0 right-1 z-30">
            <li key="1">
              <a
                href={previewLink}
                className="bg-gray-200 hover:bg-gray-600 text-black hover:text-white px-2 py-1 mr-1 text-lg rounded border-4 border-green-500  shadow-"
              >
                Live
              </a>
            </li>
            <li key="2">
              <a
                href={codeLink}
                className="bg-gray-200 hover:bg-gray-600 text-black hover:text-white px-2 py-1 mr-1 text-lg rounded border-4 border-green-500 "
              >
                Code
              </a>
            </li>
              </ul>*/}
            <p className="absolute -bottom-full left-12 text-white group-hover:bottom-12 transition-all duration-1000 z-30 ">
              {description}
            </p>
          </div>
        </li>
      </a>
    </div>
  );
};

export default ProjectCard;
