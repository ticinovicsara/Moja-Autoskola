import { Cross, Profile } from "@/assets/svgs";
import styles from "./HamburgerMenu.module.css";
import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "@/constants";
import { useAuth, useSchoolId } from "@/hooks";
import toast from "react-hot-toast";
import MenuLinks from "../MenuLinks/MenuLinks";

interface HamburgerMenuProps {
  toggleMenu: () => void;
}

const HamburgerMenu: FC<HamburgerMenuProps> = ({ toggleMenu }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const schoolId = useSchoolId();

  const handleLogout = () => {
    toggleMenu();
    logout();
    toast.success("Uspješno ste se odjavili");
    navigate(routes.HOME);
  };

  return (
    <div className={`${styles.menu} ${user ? styles.userMenu : ""} container`}>
      <div className={styles.header}>
        <h1>MENU</h1>
        <img src={Cross} alt="close menu" onClick={toggleMenu} />
      </div>

      {user ? (
        <>
          <div className={styles.user}>
            <img src={Profile} alt="profile" />
            <div className={styles.userInfo}>
              <p>
                {user.firstName} {user.lastName}
              </p>
              <p>{user.email}</p>
              <p>{user.phoneNumber}</p>
            </div>
          </div>

          <MenuLinks user={user} toggleMenu={toggleMenu} />

          <p className={styles.logout} onClick={handleLogout}>
            Odjava
          </p>
        </>
      ) : (
        <div className={styles.authLinks}>
          <Link to={routes.LOGIN} onClick={toggleMenu} className="authBtn">
            Prijavi se
          </Link>
          <Link to={routes.REGISTER} onClick={toggleMenu} className="authBtn">
            Registriraj se
          </Link>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
