import { useContext } from "react";
import styles from "./profile.module.css";
import { ArrowBack } from "@/components";
import { AuthContext } from "@/contexts/AuthContext/authContext";
import { UserRole } from "@/enums";
import { routes } from "@/constants";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  if (!context) {
    return (
      <div className={styles["error-screen"]}>
        <p>Error loading user profile</p>
      </div>
    );
  }

  const { user, isLoading, logout } = context;

  const handleLogout = () => {
    logout();
    navigate(routes.HOME);
  };

  if (isLoading) {
    return (
      <div className={styles["loading-screen"]}>
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className={styles["error-screen"]}>
        <p>Error loading user profile</p>
      </div>
    );
  }

  return (
    <div className={styles["profile-container"]}>
      <ArrowBack />
      <div className={styles["profile-header"]}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className={styles["profile-image-wrapper"]}
        >
          <circle cx="12" cy="8" r="5" />
          <path d="M20 21a8 8 0 10-16 0" />
        </svg>

        <div className={styles["profile-name-group"]}>
          <h2 className={styles["profile-name"]}>
            {user.firstName} {user.lastName}
          </h2>
          <p className={styles["profile-label"]}>Telefax</p>
        </div>
      </div>

      <div className={styles["profile-options"]}>
        <button className={styles["profile-button"]}>Tvoji podaci</button>
        <button className={styles["profile-button"]}>Postavke profila</button>
        {user.role === UserRole.Candidate && (
          <button className={styles["profile-button"]}>Tvoj napredak</button>
        )}
      </div>

      <button onClick={handleLogout} className={styles["logout-button"]}>
        Odjava
      </button>
    </div>
  );
};

export default ProfilePage;
