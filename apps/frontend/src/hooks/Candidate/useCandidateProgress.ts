import { useQuery } from "@tanstack/react-query";
import { getCandidateProgress } from "@/api";
import { calculateProgress } from "@/utils";

export const useCandidateProgress = (candidateId: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["candidateProgress", candidateId],
    queryFn: () => getCandidateProgress(candidateId),
    enabled: !!candidateId,
  });

  const progress =
    data &&
    data.passedTests != null &&
    data.firstAidHours != null &&
    data.theoryHours != null &&
    data.drivingHours != null
      ? calculateProgress(
          data.passedTests,
          data.firstAidHours,
          data.theoryHours,
          data.drivingHours
        )
      : null;

  console.log("DATA: ", data);

  return {
    progress,
    loading: isLoading,
    error,
  };
};
