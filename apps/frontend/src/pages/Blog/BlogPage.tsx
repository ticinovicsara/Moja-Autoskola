import { useParams } from "react-router-dom";

export const BlogPage = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <p>{id}</p>
    </div>
  );
};
