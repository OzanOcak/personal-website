import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../../components/getPostMetadata";

const getPostContent = (slug) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props) => {
  const slug = props.params.slug;
  console.log(slug);
  const post = getPostContent(slug);
  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 dark:text-gray-300">
          {post.data.title}
        </h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>

      <article className="prose max-w-[50rem] mx-auto">
        <Markdown className="dark:text-white">{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
