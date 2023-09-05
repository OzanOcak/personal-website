import getPostMetadata from "../../components/getPostMetadata";
import BlogCard from "./BlogCard";
const postMetadata = getPostMetadata();

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
  return (
    <section
      id="blogs"
      className="max-w-[98%] md:max-w-[80%] mx-auto pt-32 px-4"
    >
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Last Blog Posts
        </h2>
        <p className="text-sm font-titleFont text-green-500">
          My blogs about web
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lg:px-10">
        {postMetadata
          .slice(-3)
          .reverse()
          .map((project) => (
            <BlogCard
              title={project.title}
              desc={project.subtitle}
              listItems={project.tags}
              slug={project.slug}
            />
          ))}
      </div>
      <div className="flex justify-center my-10">
        <a
          href="/posts"
          className="w-36 h-12 rounded-md text-green-500 flex justify-center items-center
         text-[13px] border border-green-500 hover:bg-gray-800 duration-300"
        >
          <span>Go to Blogs</span>
        </a>
      </div>
    </section>
  );
}

export default Archive;
