import { Hamburger, Logo } from "@/assets/svgs";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={`container ${styles.navbar}`}>
            <img src={Logo} alt="logo" />
            <img src={Hamburger} alt="hamburger" />
        </nav>
    );
};

export default Navbar;
