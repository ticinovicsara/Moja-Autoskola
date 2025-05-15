import React from "react";
import CardComponent from "../CardComponent/CardComponent";
import styles from "./ArrowCard.module.css";
import { Arrow2 } from "@/assets/svgs";

export interface ArrowCardProps {
    title: string;
    onClick?: () => void;
    linkTo?: string;
    style?: React.CSSProperties;
    className?: string;
}

export const ArrowCard: React.FC<ArrowCardProps> = ({
    title,
    onClick,
    linkTo,
    style,
    className,
}) => {
    return (
        <CardComponent
            linkTo={linkTo}
            className={`${styles["arrow-card"]} ${className}`}
        >
            <div className={styles["arrow-card-content"]}>
                <div
                    onClick={onClick}
                    className={styles["arrow-card-title"]}
                    style={style}
                >
                    {title}
                </div>
                <img src={Arrow2} />
            </div>
        </CardComponent>
    );
};
