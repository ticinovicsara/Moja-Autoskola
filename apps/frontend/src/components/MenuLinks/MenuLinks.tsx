import { FC } from "react";
import { Link } from "react-router-dom";
import { User } from "@/types";
import styles from "./menuItems.module.css";
import { menuItems } from "./menuItems";

interface MenuLinksProps {
  user: User;
  toggleMenu: () => void;
}

const MenuLinks: FC<MenuLinksProps> = ({ user, toggleMenu }) => {
  const filteredItems = menuItems.filter((item) =>
    item.roles.includes(user.role)
  );

  return (
    <div className={styles.links}>
      {filteredItems.map((item) => (
        <Link
          key={`${item.label}-${item.to}`}
          to={item.to}
          onClick={toggleMenu}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default MenuLinks;
