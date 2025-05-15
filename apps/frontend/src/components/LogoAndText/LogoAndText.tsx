import c from "./LogoAndText.module.css";
import logo from "@/assets/svgs/Logo.svg";

export const LogoAndText = () => {
    return (
        <div className={c.content}>
            <div className={c.contentWrapper}>
                <div className={c.logo}>
                    <img src={logo} alt="logo" />
                    <h1>Moja Autoškola</h1>
                </div>
                <p className={c.text}>Autoškola u tvom džepu!</p>
            </div>
        </div>
    );
};
