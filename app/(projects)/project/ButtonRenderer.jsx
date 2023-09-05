import React from "react";

const ButtonRenderer = ({ buttonData, handleClickButton }) => {
  return (
    <div className="flex md:flex-col items-center md:items-start z-10 ">
      {buttonData.map((data) => {
        return (
          <button
            key={data.id}
            id={data.id}
            //  disabled={disabled}
            onClick={handleClickButton}
            selected={data.selected}
            className={`mr-4  hover:bg-green-400 active:bg-green-300 dark:text-green-600  active:text-white dark:active:text-white focus:bg-green-400  
            dark:hover:text-black px-0 sm:px-2 py-1 rounded-lg mb-4  dark:focus:text-black ${
              data.selected ? "bg-green-300 text-white" : null
            }`}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};
export default ButtonRenderer;
