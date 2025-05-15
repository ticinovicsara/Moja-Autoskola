export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
  },

  USER: {
    PROGRESS: "/user/progress",
  },

  SESSION: {
    CANDIDATE: "/session/candidate",
    INSTRUCTOR: "/session/instructor",
    DRIVING: "/session/driving",
  },

  INSTRUCTOR: {
    SLOT: "/instructor/slot",
    CANDIDATES: "/instructor/candidates",
    BY_SCHOOL: "instructor/by-school",
  },

  CANDIDATE: {
    INSTRUCTOR: "/candidate/instructor",
    BY_SCHOOL: "/candidate/school",
    PROGRESS: "/user/progress",
    NO_INSTRUCTOR: "/candidate/no-instructor",
  },

  SCHOOL: {
    ALL: "/school",
    BY_USER: "/school/user",
  },
  ENROLLMENT: {
    SCHOOL: "/enrollment/school",
    CRUD: "/enrollment",
    CANDIDATE: "/enrollment/candidate",
  },
};
