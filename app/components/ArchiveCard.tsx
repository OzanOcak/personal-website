import { GoProject } from "react-icons/go";
import { RxOpenInNewWindow } from "react-icons/rx";

interface Props {
  title: string;
  desc: string;
  listItems: string[];
  link: string;
}

function ArchiveCard({ title, desc, listItems, link }: Props) {
  return (
    <a href={link} target="_blank">
      <div
        className="w-full h-60 rounded-lg bg-gray-100 dark:bg-[#112240] p-1 lg:p-4 2xl:p-7 flex flex-col justify-center gap-3 
    hover:-translate-y-2 transition-transform duration-300 group"
      >
        <div className="flex justify-between items-center">
          <GoProject className="text-lg lg:text-xl xl:text-4xl text-green-500" />
          {/*<RxOpenInNewWindow className="text-sm xl:text-xl 2xl:text-2xl hover:text-green-500" />*/}
        </div>
        <div>
          <h2
            className="text-xl font-titleFont font-semibold tracking-wide 
        group-hover:text-text-green-500"
          >
            {title}
          </h2>
          <p className="text-sm mt-3">{desc}</p>
        </div>
        <ul
          className="text-xs md:text-sm text-gray-500 flex items-end gap-2 justify-end 
        flex-wrap"
        >
          {listItems.map((item, i) => (
            <li key={i} className="border border-green-500 px-1 rounded-md">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}

export default ArchiveCard;
