import { useEffect, useState } from "react";
import { getCandidateProgress } from "@/api";

const calculateProgress = (
  passedTests: any[],
  passedLessons: any[],
  totalTests: number,
  totalLessons: number
) => {
  const completedTests = passedTests.length;
  const completedLessons = passedLessons.length;

  return Math.min(
    ((completedTests + completedLessons) / (totalTests + totalLessons)) * 100,
    100
  );
};

export const useCandidateProgress = (candidateId: string) => {
  const [progress, setProgress] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProgress = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getCandidateProgress(candidateId);
        if (data) {
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
      } catch (error) {
        setError("Došlo je do pogreške prilikom učitavanja napretka.");
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, [candidateId]);

  if (loading) {
    return { progress: null, message: "Učitavanje napretka..." };
  }

  if (error) {
    return { progress: null, message: error };
  }

  return { progress, message: null };
};
