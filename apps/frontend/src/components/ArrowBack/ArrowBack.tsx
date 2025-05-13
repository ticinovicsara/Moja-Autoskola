import { Arrow } from "@/assets/images";
import c from "./arrowback.module.css";
import { useNavigate } from "react-router-dom";
export const ArrowBack = () => {
  const navigate = useNavigate();

  return (
    <div className={c.arrowWrapper} onClick={() => navigate(-1)}>
      <img src={Arrow} alt="arrow" />
    </div>
  );
};
