import { useState } from "react";
import useSchool from "@/api/school/useSchool";
import { FilterSchools, SchoolCard } from "@/components";
import c from "./guest.module.css";

export const GuestPage = () => {
  const { schools, isLoading, error } = useSchool();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
    null
  );

  const handleResetFilters = () => {
    setSearchTerm("");
    setSortDirection(null);
  };

  const filteredAndSortedSchools = schools
    .filter((school) =>
      school.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (!sortDirection) return 0;
      return sortDirection === "asc"
        ? a.rating - b.rating
        : b.rating - a.rating;
    });

  if (isLoading) return <p>Učitavanje...</p>;
  if (error) return <p>Greška: {error.message}</p>;

  return (
    <div className={`${c.guestWrapper} container`}>
      <FilterSchools
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        sortDirection={sortDirection}
        onSortChange={setSortDirection}
        onResetFilters={handleResetFilters}
      />

      <div className={c.cardsContainer}>
        {filteredAndSortedSchools.map((school) => (
          <SchoolCard key={school.id} school={school} />
        ))}
      </div>
    </div>
  );
};
