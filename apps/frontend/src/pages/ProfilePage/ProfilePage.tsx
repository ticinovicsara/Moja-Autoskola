import { useState, useEffect } from "react";
import styles from "./profile.module.css";
import { ArrowBack } from "@/components";

type UserRole = "candidate" | "instructor" | "admin";

interface User {
  id: string;
  name: string;
  role: UserRole;
  profileImage?: string;
}

const ProfilePage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const mockUser: User = {
          id: "1",
          name: "Ante Antić",
          role: "candidate",
          profileImage: undefined,
        };
        await new Promise((resolve) => setTimeout(resolve, 500));
        setUser(mockUser);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    console.log("Logging out...");
  };

  if (loading) {
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
          <h2 className={styles["profile-name"]}>{user.name}</h2>
          <p className={styles["profile-label"]}>Telefax</p>
        </div>
      </div>

      <div className={styles["profile-options"]}>
        <button className={styles["profile-button"]}>Tvoji podaci</button>
        <button className={styles["profile-button"]}>Promijeni lozinku</button>
        {user.role === "candidate" && (
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
