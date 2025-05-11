import { Hamburger, Logo, Profile } from "@/assets/svgs";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={`container ${styles.navbar}`}>
            <img src={Hamburger} alt="hamburger" />
            <img src={Logo} alt="logo" />
            <img src={Profile} alt="profile" className={styles.profile} />
        </nav>
    );
};

export default Navbar;
