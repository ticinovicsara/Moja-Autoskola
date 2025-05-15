import { useState } from "react";
import c from "./Filter.module.css";
import Filter from "@/assets/svgs/filter.svg";

type FilterSchoolsProps = {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    sortDirection: "asc" | "desc" | null;
    onSortChange: (direction: "asc" | "desc") => void;
    onResetFilters: () => void;
};

export const FilterSchools = ({
    searchTerm,
    onSearchChange,
    sortDirection,
    onSortChange,
    onResetFilters,
}: FilterSchoolsProps) => {
    const [showFilters, setShowFilters] = useState(false);

    return (
        <div className={c.filterContainer}>
            <input
                type="text"
                placeholder={`Pretraži autoškole`}
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className={c.searchInput}
            />

            <button
                onClick={() => setShowFilters((prev) => !prev)}
                className={c.filterBtn}
            >
                <img src={Filter} alt="filter icon" />
            </button>

            {showFilters && (
                <div className={c.popup}>
                    <p className={c.popupTitle}>Sortiraj po ocjeni:</p>
                    <button
                        onClick={() => onSortChange("asc")}
                        className={`${c.sortOption} ${sortDirection === "asc" ? c.active : ""}`}
                    >
                        Uzlazno ↑
                    </button>
                    <button
                        onClick={() => onSortChange("desc")}
                        className={`${c.sortOption} ${sortDirection === "desc" ? c.active : ""}`}
                    >
                        Silazno ↓
                    </button>

                    <button onClick={onResetFilters} className={c.resetBtn}>
                        Resetiraj filtere
                    </button>
                </div>
            )}
        </div>
    );
};
