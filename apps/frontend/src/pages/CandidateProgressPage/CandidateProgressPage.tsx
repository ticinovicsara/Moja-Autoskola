// src/pages/CandidateProgressPage.tsx
import { Cross } from "@/assets/svgs";
import styles from "./candidateProgress.module.css";
import ProgressBar from "@/components/Cards/ProgressCard/ProgressBar/ProgressBar";

const CandidateProgressPage = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <h1 className={styles["title"]}>Tvoj Napredak</h1>
        <img src={Cross} alt="" />
      </div>

      <div className={styles["progress-list"]}>
        <h3 className={styles["list-title"]}>Predavanja</h3>
        <ProgressBar
          progress={10}
          total={30}
          colorClass={styles["yellow-fill"]}
          barClass={styles["yellow-bar"]}
        />

        <h3 className={styles["list-title"]}>Vožnja</h3>
        <ProgressBar
          progress={20}
          total={35}
          colorClass={styles["blue-fill"]}
          barClass={styles["blue-bar"]}
        />

        <h3 className={styles["list-title"]}>Prva pomoć</h3>
        <ProgressBar
          progress={1}
          total={9}
          colorClass={styles["green-fill"]}
          barClass={styles["green-bar"]}
        />

        <h3 className={styles["list-title"]}>Ispiti</h3>
        <ProgressBar
          progress={2}
          total={3}
          colorClass={styles["red-fill"]}
          barClass={styles["red-bar"]}
        />
      </div>
    </div>
  );
};

export default CandidateProgressPage;
