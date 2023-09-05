interface Props {
  title: string;
}

function SectionTitle({ title }: Props) {
  return (
    <h2 className="font-titleFont text-2xl font-semibold flex items-center ">
      <span className="hidden md:inline-flex md:w-8 lg:w-12 h-[.5px] bg-gray-500  mr-6"></span>
      <span className="text-base md:text-lg text-green-500 mr-2 mt-2">
        {title}
      </span>
      <span className="hidden md:inline-flex md:w-36 lg:w-72 h-[.5px] bg-gray-500  ml-6"></span>
    </h2>
  );
}

export default SectionTitle;
