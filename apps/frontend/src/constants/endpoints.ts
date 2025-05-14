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
  },
  SCHOOL: {
    ALL: "/school",
  },

  GET_INSTRUCTOR_CANDIDATE: "/instructor-candidate",
};
