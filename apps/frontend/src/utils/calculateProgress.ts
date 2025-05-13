export function calculateProgress(
  passedTests: number,
  firstAidHours: number,
  theoryHours: number,
  drivingHours: number
): number {
  const totalTests = 3;
  const totalFirstAid = 9;
  const totalTheory = 30;
  const totalDriving = 35;

  const testProgress = passedTests / totalTests;
  const firstAidProgress = firstAidHours / totalFirstAid;
  const theoryProgress = theoryHours / totalTheory;
  const drivingProgress = drivingHours / totalDriving;

  const overallProgress =
    (testProgress + firstAidProgress + theoryProgress + drivingProgress) / 4;

  return Math.min(1, Math.max(0, overallProgress));
}
