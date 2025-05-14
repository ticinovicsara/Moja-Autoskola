import { Arrow } from "@/assets/svgs";
import c from "./arrowback.module.css";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

type ArrowBackProps = {
  rotate?: boolean;
};

export const ArrowBack = ({ rotate }: ArrowBackProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={clsx(c.arrowWrapper, rotate && c.rotateArrow)}
      onClick={() => navigate(-1)}
    >
      <img src={Arrow} alt="arrow" />
    </div>
  );
};
