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
    CANDIDATES: "/instructor/candidates",
  },

  CANDIDATE: {
    INSTRUCTOR: "/candidate/instructor",
    PROGRESS: "/user/progress",
  },

  SCHOOL: {
    ALL: "/school",
  },
};
