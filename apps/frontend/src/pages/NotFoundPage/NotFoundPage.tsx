import { ArrowBack } from "@/components";
import c from "./notFound.module.css";
export const NotFoundPage = () => {
  return (
    <div className={`container ${c.notFound}`}>
      <ArrowBack />
      <h1>Not found page: Error 404</h1>
    </div>
  );
};
