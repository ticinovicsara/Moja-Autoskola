import useSchool from "@/api/school/useSchool";
import { SchoolCard } from "@/components";

export const GuestPage = () => {
  const { schools, isLoading, error } = useSchool();

  if (isLoading) return <p>Učitavanje...</p>;
  if (error) return <p>Greška: {error.message}</p>;

  return (
    <div className={`container`}>
      {schools.map((school) => (
        <SchoolCard key={school.id} school={school} />
      ))}
    </div>
  );
};
