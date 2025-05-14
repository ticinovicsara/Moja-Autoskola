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
  },

  CANDIDATE: {
    INSTRUCTOR: "/candidate/instructor",
    BY_SCHOOL: "/candidate/by-school",
    PROGRESS: "/user/progress",
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
};
