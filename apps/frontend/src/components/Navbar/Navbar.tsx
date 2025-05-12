import { Hamburger, Logo } from "@/assets/svgs";
import styles from "./Navbar.module.css";
import { routes } from "@/constants";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { HamburgerMenu } from "@/components";

const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    function toggleMenu() {
        setIsMenuOpen((prev) => !prev);
    }

    return (
        <nav className={`container ${styles.navbar}`}>
            <img src={Logo} alt="logo" onClick={() => navigate(routes.HOME)} />
            <img src={Hamburger} alt="hamburger" onClick={() => toggleMenu()} />
            {isMenuOpen && <HamburgerMenu toggleMenu={toggleMenu} />}
        </nav>
    );
};

export default Navbar;
