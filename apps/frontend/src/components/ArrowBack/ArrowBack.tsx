import { Arrow } from "@/assets/svgs";
import c from "./arrowback.module.css";
import { useNavigate } from "react-router-dom";
export const ArrowBack = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(-1);
    };
    return (
        <div className={c.arrowWrapper} onClick={handleNavigate}>
            <img src={Arrow} alt="arrow" />
        </div>
    );
};
