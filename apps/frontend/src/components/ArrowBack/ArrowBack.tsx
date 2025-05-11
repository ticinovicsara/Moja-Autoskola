import { ArrowIcon } from "@/assets/images";
import c from "./arrowback.module.css";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

type ArrowBackProps = {
  rotate?: boolean;
};

export const ArrowBack = ({ rotate }: ArrowBackProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <div
      className={clsx(c.arrowWrapper, rotate && c.rotateArrow)}
      onClick={handleNavigate}
    >
      <img src={ArrowIcon} alt="arrow" />
    </div>
  );
};
