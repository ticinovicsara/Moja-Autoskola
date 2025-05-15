import React from "react";
import { useAuth } from "@/hooks";
import styles from "./greeting.module.css";

export const GreetingComponent: React.FC = () => {
  const { user } = useAuth();

  const name = user?.firstName;

  return (
    <div className={`${styles.wrapper} container `}>
      <p className={styles.greetingText}>Pozdrav,</p>
      <h2 className={styles.name}>{name?.toUpperCase()}</h2>
    </div>
  );
};
