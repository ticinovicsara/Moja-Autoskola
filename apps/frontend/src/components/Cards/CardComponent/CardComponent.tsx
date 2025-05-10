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
  children,
  className,
  bodyPadding,
}: CustomCardProps) {
  const headerStyle = {
    backgroundColor: headerBgColor,
    color: headerTextColor,
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

  return (
    <div className={`${styles["card-container"]} ${className}`}>
      <div className={styles["custom-card"]} style={cardStyle}>
        {headerTitle && (
          <div className={styles["card-header"]} style={headerStyle}>
            <div className={styles["card-title"]}>{headerTitle}</div>
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
  );
}
