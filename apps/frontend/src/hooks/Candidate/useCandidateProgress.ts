import { useQuery } from "@tanstack/react-query";
import { getCandidateProgress } from "@/api";
import { calculateProgress } from "@/utils";

export const useCandidateProgress = (candidateId: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["candidateProgress", candidateId],
    queryFn: () => getCandidateProgress(candidateId),
    enabled: !!candidateId,
  });

  const totalTests = 10;
  const totalLessons = 20;

  const progress =
    data && data.passedTests && data.passedLessons
      ? calculateProgress(
          data.passedTests,
          data.passedLessons,
          totalTests,
          totalLessons
        )
      : null;

  return {
    progress,
    loading: isLoading,
    error,
  };
};
