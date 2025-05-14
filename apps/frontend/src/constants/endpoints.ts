export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
  },

  SESSION: {
    CANDIDATE: "/session/candidate",
    INSTRUCTOR: "/session/instructor",
    DRIVING: "/session/driving",
  },
  INSTRUCTOR: {
    SLOT: "/instructor/slot",
  },
  CANDIDATE: {
    INSTRUCTOR: "/candidate/instructor",
    BY_SCHOOL: "/candidate/by-school",
  },
  SCHOOL: {
    ALL: "/school",
    BY_USER: "/school/by-user",
  },
  ENROLLMENT: {
    SCHOOL: "/enrollment/school",
    CRUD: "/enrollment",
    CANDIDATE: "/enrollment/candidate",
  },
  INSTRUCTOR_CANDIDATES: "/instructor/candidates",
};
