import { Cross } from "@/assets/svgs";
import styles from "./candidateProgress.module.css";
import ProgressBar from "@/components/Cards/ProgressCard/ProgressBar/ProgressBar";
import { useAuth, useCandidateProgressData } from "@/hooks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CandidateProgressPage = () => {
  const { user } = useAuth();
  const [isVisible, setIsVisible] = useState(true);
  const { data, loading, error } = useCandidateProgressData(user?.id ?? "");

  const navigate = useNavigate();
  const closePage = () => {
    setIsVisible(false);
    navigate(-1);
  };

  if (!isVisible) {
    return null;
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading progress</div>;

  if (!data) {
    return <div>No data available.</div>;
  }

  const { passedTests, passedLessons } = data;

  const progressExams =
    passedTests.theory + passedTests.driving + passedTests.firstAid;

  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <h1 className={styles["title"]}>Tvoj Napredak</h1>
        <img src={Cross} alt="close" onClick={closePage} />
      </div>

      <div className={styles["progress-list"]}>
        <h3 className={styles["list-title"]}>Predavanja</h3>
        <ProgressBar
          progress={passedLessons.theory}
          total={30}
          colorClass={styles["yellow-fill"]}
          barClass={styles["yellow-bar"]}
        />
        <h3 className={styles["list-title"]}>Vožnja</h3>
        <ProgressBar
          progress={passedLessons.driving}
          total={35}
          colorClass={styles["blue-fill"]}
          barClass={styles["blue-bar"]}
        />
        <h3 className={styles["list-title"]}>Prva pomoć</h3>
        <ProgressBar
          progress={passedLessons.firstAid}
          total={9}
          colorClass={styles["green-fill"]}
          barClass={styles["green-bar"]}
        />
        <h3 className={styles["list-title"]}>Ispiti</h3>
        <ProgressBar
          progress={progressExams}
          total={3}
          colorClass={styles["red-fill"]}
          barClass={styles["red-bar"]}
        />{" "}
      </div>
    </div>
  );
};

export default CandidateProgressPage;
