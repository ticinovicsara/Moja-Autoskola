import { FC } from "react";
import { Link } from "react-router-dom";
import { User } from "@/types";
import styles from "./menuItems.module.css";
import { menuItems } from "./menuItems";
import { routes } from "@/constants";

interface MenuLinksProps {
  user: User;
  toggleMenu: () => void;
  state?: string;
}

const MenuLinks: FC<MenuLinksProps> = ({ user, toggleMenu, state }) => {
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
          state={
            item.to === routes.PENDING_LIST ? { schoolId: state } : undefined
          }
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default MenuLinks;
