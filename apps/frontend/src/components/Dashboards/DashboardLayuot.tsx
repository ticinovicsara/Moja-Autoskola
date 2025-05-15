import React from "react";
import styles from "./Dashboard.module.css";

interface DashboardLayoutProps {
    top?: React.ReactNode;
    middle: React.ReactNode;
    bottom: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
    top,
    middle,
    bottom,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>{top}</div>
            <div className={styles.middle}>{middle}</div>
            <div className={styles.bottom}>{bottom}</div>
        </div>
    );
};

export default DashboardLayout;
