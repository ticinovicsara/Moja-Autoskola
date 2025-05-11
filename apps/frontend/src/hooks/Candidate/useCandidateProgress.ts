import { useEffect, useState, useRef } from "react";
import { getCandidateProgress } from "@/api";

const calculateProgress = (
  passedTests: any[],
  passedLessons: any[],
  totalTests: number,
  totalLessons: number
): number => {
  const completedTests = passedTests.length;
  const completedLessons = passedLessons.length;

  const progress =
    ((completedTests + completedLessons) / (totalTests + totalLessons)) * 100;

  return parseFloat(Math.min(progress, 100).toFixed(2));
};

export const useCandidateProgress = (candidateId: string) => {
  const [progress, setProgress] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const prevCandidateIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (candidateId === prevCandidateIdRef.current) return;
    prevCandidateIdRef.current = candidateId;

    let isMounted = true;

    const fetchProgress = async () => {
      if (!candidateId) return;

      setLoading(true);
      setError(null);

      try {
        const data = await getCandidateProgress(candidateId);

        if (data && isMounted) {
          const { passedTests, passedLessons } = data;

          const totalTests = 10;
          const totalLessons = 20;

          const progressPercentage = calculateProgress(
            passedTests,
            passedLessons,
            totalTests,
            totalLessons
          );

          setProgress(progressPercentage);
        }
      } catch (err) {
        if (isMounted) {
          setError("Došlo je do pogreške prilikom učitavanja napretka.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProgress();

    return () => {
      isMounted = false;
    };
  }, [candidateId]);

  return {
    progress,
    loading,
    error,
  };
};
