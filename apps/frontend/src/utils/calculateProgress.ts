export type LessonHours = {
  theory: number;
  driving: number;
  firstAid: number;
};

export type PassedTests = {
  theory: number;
  driving: number;
  firstAid: number;
};

export function calculateProgress(
  passedTests: PassedTests,
  lessonHours: LessonHours
): number {
  const totalTests = 3;
  const totalFirstAid = 9;
  const totalTheory = 30;
  const totalDriving = 35;

  const testProgress =
    (passedTests.theory > 0 ? 1 : 0) +
    (passedTests.driving > 0 ? 1 : 0) +
    (passedTests.firstAid > 0 ? 1 : 0);

  const normalizedTestProgress = testProgress / totalTests;

  const firstAidProgress = lessonHours.firstAid / totalFirstAid;
  const theoryProgress = lessonHours.theory / totalTheory;
  const drivingProgress = lessonHours.driving / totalDriving;

  const overallProgress =
    (normalizedTestProgress +
      firstAidProgress +
      theoryProgress +
      drivingProgress) /
    4;

  return parseFloat(overallProgress.toFixed(2));
}
