import { ArrowBack, BlogCard } from "@/components";
import { blogs } from "@/constants";
import { useParams } from "react-router-dom";

export const BlogPage = () => {
  const { id } = useParams<{ id: string }>();

  const blog = blogs.find((b) => b.id == id);

  if (!blog) {
    return (
      <div className="container">
        <ArrowBack /> <p>Blog with ID: {id} was not found.</p>
      </div>
    );
  }

  return <BlogCard blog={blog} />;
};
