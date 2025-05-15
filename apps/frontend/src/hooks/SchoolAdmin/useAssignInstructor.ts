import { assignInstructorToCandidate } from "@/api";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

export const useAssignInstructor = (schoolId: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const queryClient = useQueryClient();

  const assign = async (candidateId: string, instructorId: string) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await assignInstructorToCandidate(candidateId, instructorId);
      setSuccess(true);
      await queryClient.invalidateQueries({
        queryKey: ["candidates-no-instructor", schoolId],
      });
    } catch (err: any) {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Greška prilikom dodjeljivanja instruktora.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const refetchCandidates = () => {
    queryClient.invalidateQueries({
      queryKey: ["candidates-no-instructor", schoolId],
    });
  };

  return {
    assign,
    isLoading,
    error,
    success,
    refetchCandidates,
  };
};
