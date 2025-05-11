import { getInstructorById } from "@/api";
import { useState, useEffect } from "react";

export const useGetInstructor = (candidateId: string) => {
  const [instructor, setInstructor] = useState<{
    name: string;
    phone: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!candidateId) return;

    const fetchUser = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await getInstructorById(candidateId);

        const i = result?.instructor;

        if (i) {
          setInstructor({
            name: `${i.firstName} ${i.lastName}`,
            phone: i.phone,
          });
        }
      } catch (err: any) {
        setError(err.message || "Greška pri dohvaćanju korisnika.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [candidateId]);

  return { ...instructor, loading, error };
};
