type LessonHours = {
  firstAid: number;
  theory: number;
  driving: number;
};

type Test = { type: "Theory" | "Driving" | "FirstAid" };

export function calculateProgress(
  passedTests: Test[],
  lessonHours: LessonHours
): number {
  const passedTestsByType = passedTests.reduce(
    (acc, test) => {
      if (test.type === "Theory") acc.theory += 1;
      if (test.type === "Driving") acc.driving += 1;
      if (test.type === "FirstAid") acc.firstAid += 1;
      return acc;
    },
    { theory: 0, driving: 0, firstAid: 0 }
  );

  const totalTests = 3;
  const totalFirstAid = 9;
  const totalTheory = 30;
  const totalDriving = 35;

  const testProgress = passedTests.length / totalTests;
  const firstAidProgress = lessonHours.firstAid / totalFirstAid;
  const theoryProgress = lessonHours.theory / totalTheory;
  const drivingProgress = lessonHours.driving / totalDriving;

  console.log("PASSED: ", passedTests);

  const overallProgress =
    (testProgress + firstAidProgress + theoryProgress + drivingProgress) / 4;

  return Math.min(1, Math.max(0, overallProgress));
}
