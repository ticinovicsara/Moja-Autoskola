import styles from "./footer.module.css";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { LogoHorizontal } from "@/assets/images";

const FooterComponent = () => {
  return (
    <footer className={styles["school-footer"]}>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-logo"]}>
          <img src={LogoHorizontal} className={styles["logo-image"]} />
        </div>
        <div className={styles["footer-section"]}>
          <h3 className={styles["footer-section-title"]}>ADRESA</h3>
          <p className={styles["footer-section-text"]}>
            Ul. Ruđer Boškovića 32
            <br />
            FESB, Split
          </p>
        </div>
        <div className={styles["footer-section"]}>
          <h3 className={styles["footer-section-title"]}>EMAIL</h3>
          <p className={styles["footer-section-text"]}>
            <a
              href="mailto:info@mojaautoskola.hr"
              className={styles["footer-email-link"]}
            >
              info@mojaautoskola.hr
            </a>
          </p>
        </div>

        <div className={styles["footer-social"]}>
          <a href="#instagram" className={styles["social-icon"]}>
            <FaInstagram color="#DC4848" />
          </a>
          <a href="#tiktok" className={styles["social-icon"]}>
            <FaTiktok color="#6C8C3E" />
          </a>
          <a href="#facebook" className={styles["social-icon"]}>
            <FaFacebookF color="#3E9AC4" />
          </a>
        </div>

        <div className={styles["footer-copyright"]}>
          © {new Date().getFullYear()} Moja Autoškola
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
