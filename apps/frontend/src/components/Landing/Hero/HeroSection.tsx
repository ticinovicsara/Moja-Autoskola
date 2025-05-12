import c from "./hero.module.css";
import logo from "@/assets/svgs/Logo.svg";
export const HeroSection = () => {
  return (
    <div className={c.hero}>
      <div className={c.content}>
        <div className={c.contentWrapper}>
          <div className={c.logo}>
            <img src={logo} alt="logo" />
            <h1>Moja Autoškola</h1>
          </div>
          <p>Autoškola u tvom džepu!</p>
        </div>
      </div>
      <button className={c.startBtn}>ZAPOČNI</button>
    </div>
  );
};
