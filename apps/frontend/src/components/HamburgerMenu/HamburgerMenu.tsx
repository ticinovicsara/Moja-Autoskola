import { Cross, Profile } from "@/assets/svgs";
import styles from "./HamburgerMenu.module.css";
import { FC } from "react";
import { getUserFromToken } from "@/utils/decodeUser";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "@/constants";
import toast from "react-hot-toast";

interface HamburgerMenuProps {
    toggleMenu: () => void;
}

const HamburgerMenu: FC<HamburgerMenuProps> = ({ toggleMenu }) => {
    const navigate = useNavigate();
    const user = getUserFromToken(localStorage.getItem("token") || "");

    function logout() {
        localStorage.removeItem("token");
        navigate(routes.LOGIN);
        toast.success("Uspješno ste se odjavili");
    }

    return (
        <div className={`${styles.menu} container`}>
            <div className={styles.header}>
                <h1>MENU</h1>
                <img src={Cross} alt="cross" onClick={() => toggleMenu()} />
            </div>
            <div className={styles.user}>
                <img src={Profile} alt="profile" />
                <div className={styles.userInfo}>
                    <p>
                        {user?.firstName} {user?.lastName}
                    </p>
                    <p>{user?.email}</p>
                    <p>098 903 2571</p>
                </div>
            </div>
            <div className={styles.links}>
                <Link to={routes.HOME} onClick={() => toggleMenu()}>
                    Početna
                </Link>
                <Link to={routes.HOME} onClick={() => toggleMenu()}>
                    Kalendar
                </Link>
                <Link to={routes.HOME} onClick={() => toggleMenu()}>
                    Rezerviraj termin
                </Link>
                <Link to={routes.HOME} onClick={() => toggleMenu()}>
                    Tvoj napredak
                </Link>
                <Link to={routes.HOME} onClick={() => toggleMenu()}>
                    Postavke profila
                </Link>
            </div>
            <p className={styles.logout} onClick={logout}>
                Odjava
            </p>
        </div>
    );
};

export default HamburgerMenu;
