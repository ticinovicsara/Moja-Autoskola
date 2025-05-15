import { ArrowBack } from "@/components/ArrowBack/ArrowBack";
import { Blog } from "@/types/blog";
import c from "./blogCard.module.css";

type BlogCardProps = {
  blog: Blog;
};

export const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <>
      <div className={`container ${c.blogContainer}`}>
        <ArrowBack />
        <div className={c.title}>
          <h2>{blog.title}</h2>
        </div>
      </div>
      <hr className={c.line} />
      <div className={`container `}>
        <p style={{ whiteSpace: "pre-line" }}>{blog.description}</p>
      </div>
    </>
  );
};
