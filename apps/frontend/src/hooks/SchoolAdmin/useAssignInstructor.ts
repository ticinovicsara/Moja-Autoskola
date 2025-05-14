import { assignInstructorToCandidate } from "@/api";
import { useState } from "react";

export const useAssignInstructor = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const assign = async (candidateId: string, instructorId: string) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await assignInstructorToCandidate(candidateId, instructorId);
      setSuccess(true);
    } catch (err) {
      console.error("Greška pri dodjeljivanju instruktora:", err);
      setError("Došlo je do greške. Pokušajte ponovo.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    assign,
    isLoading,
    error,
    success,
  };
};
