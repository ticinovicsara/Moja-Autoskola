import { Link } from "react-router-dom";
import styles from "./CardComponent.module.css";

export default function CardComponent({
    children,
    className,
    linkTo,
}: {
    children: React.ReactNode;
    className?: string;
    linkTo?: string;
}) {
    return (
        <Link to={linkTo ?? "#"} style={{ textDecoration: "none" }}>
            <div className={`${styles["card-container"]} ${className}`}>
                {children}
            </div>
        </Link>
    );
}
