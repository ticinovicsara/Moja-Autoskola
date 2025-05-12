import { Cross, Profile } from "@/assets/svgs";
import styles from "./HamburgerMenu.module.css";
import { FC } from "react";
import { Link } from "react-router-dom";
import { routes } from "@/constants";
import { useAuth } from "@/hooks";

interface HamburgerMenuProps {
  toggleMenu: () => void;
}

const HamburgerMenu: FC<HamburgerMenuProps> = ({ toggleMenu }) => {
  const { user, logout } = useAuth();

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

          <div className={styles.links}>
            <Link to={routes.HOME} onClick={toggleMenu}>
              Početna
            </Link>
            <Link to={routes.CANDIDATE_CALENDAR} onClick={toggleMenu}>
              Kalendar
            </Link>
            <Link to={routes.HOME} onClick={toggleMenu}>
              Rezerviraj termin
            </Link>
            <Link to={routes.HOME} onClick={toggleMenu}>
              Tvoj napredak
            </Link>
            <Link to={routes.HOME} onClick={toggleMenu}>
              Postavke profila
            </Link>
          </div>

          <p className={styles.logout} onClick={logout}>
            Odjava
          </p>
        </>
      ) : (
        <div className={styles.authLinks}>
          <Link to={routes.LOGIN} onClick={toggleMenu}>
            Prijavi se
          </Link>
          <Link to={routes.REGISTER} onClick={toggleMenu}>
            Registruj se
          </Link>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
