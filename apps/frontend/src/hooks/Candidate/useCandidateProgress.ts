import { useQuery } from "@tanstack/react-query";
import { getCandidateProgress } from "@/api";

export const useCandidateProgressData = (candidateId: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["candidateProgress", candidateId],
    queryFn: () => getCandidateProgress(candidateId),
    enabled: !!candidateId,
    staleTime: 0,
  });

  return {
    data,
    loading: isLoading,
    error,
  };
};
