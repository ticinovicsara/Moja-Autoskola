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

    console.log("IDS:", candidateId, instructorId);

    try {
      await assignInstructorToCandidate(candidateId, instructorId);
      setSuccess(true);
    } catch (err) {
      console.error("Greška pri dodjeljivanju instruktora:", err);
      setError(
        (err as any)?.response?.data?.message || "Greška prilikom dodjele."
      );
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
