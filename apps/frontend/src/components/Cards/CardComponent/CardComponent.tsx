import { Link } from "react-router-dom";
import styles from "./cardComponent.module.css";
import { CustomCardProps } from "./CustomCardProps";

export default function CardComponent({
  headerBgColor,
  bodyBgColor,
  headerTextColor,
  bodyTextColor,
  width,
  height,
  headerTitle,
  titlePosition,
  children,
  className,
  bodyPadding,
  linkTo,
}: CustomCardProps) {
  const headerStyle = {
    backgroundColor: headerBgColor,
    color: headerTextColor,
    titlePosition: titlePosition,
  };

  const bodyStyle = {
    backgroundColor: bodyBgColor,
    color: bodyTextColor,
    padding: bodyPadding,
  };

  const cardStyle = {
    width: width,
    height: height,
  };

  const titleClass = titlePosition === "center" ? styles["center-title"] : "";

  return (
    <Link to={linkTo ?? "#"} style={{ textDecoration: "none" }}>
      <div className={`${styles["card-container"]} ${className}`}>
        <div className={styles["custom-card"]} style={cardStyle}>
          {headerTitle && (
            <div className={styles["card-header"]} style={headerStyle}>
              <div className={`${styles["card-title"]} ${titleClass}`}>
                {headerTitle}
              </div>
            </div>
          )}
          <div
            className={
              headerTitle ? styles["card-body"] : styles["card-body-noHeader"]
            }
            style={bodyStyle}
          >
            {children}
          </div>
        </div>
      </div>
    </Link>
  );
}
