import styles from "./inputField.module.css";
import { Filter, Search } from "@/assets/svgs";

interface Props {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  searchTitle: string;
}

export const InputFieldWithFilter = ({
  searchTerm,
  onSearchChange,
  searchTitle,
}: Props) => {
  return (
    <div className={styles["search-container"]}>
      <img src={Search} className={styles["search-icon"]} alt="search" />
      <div className={styles["search-box"]}>
        <input
          type="text"
          placeholder={searchTitle}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className={styles["search-input"]}
        />
        <button className={styles["filter-button"]}>
          <img src={Filter} alt="filter" />
        </button>
      </div>
    </div>
  );
};
