export const calculateProgress = (
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
