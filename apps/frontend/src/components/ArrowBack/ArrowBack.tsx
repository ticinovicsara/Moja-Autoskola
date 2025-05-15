import { ArrowBack as ArrowBackIcon } from "@/assets/svgs";
import c from "./Arrowback.module.css";
import { useNavigate } from "react-router-dom";

export const ArrowBack = () => {
    const navigate = useNavigate();

    return (
        <div className={c.arrowWrapper} onClick={() => navigate(-1)}>
            <img src={ArrowBackIcon} alt="arrow" />
        </div>
    );
};
