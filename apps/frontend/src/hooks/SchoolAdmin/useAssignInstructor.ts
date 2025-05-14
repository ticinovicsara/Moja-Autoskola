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
    } catch (err: any) {
      console.error("Greška pri dodjeljivanju instruktora:", err);
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Greška prilikom dodjeljivanja instruktora.";
      setError(message);
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
