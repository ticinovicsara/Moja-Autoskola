import React from "react";
import styles from "./dashboard.module.css";

interface DashboardLayoutProps {
  top: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
  bottom: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  top,
  left,
  right,
  bottom,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>{top}</div>
      <div className={styles.middle}>
        <div className={styles.left}>{left}</div>
        <div className={styles.right}>{right}</div>
      </div>
      <div className={styles.bottom}>{bottom}</div>
    </div>
  );
};

export default DashboardLayout;
