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
        BY_SCHOOL: "instructor/by-school",
    },

    CANDIDATE: {
        INSTRUCTOR: "/candidate/instructor",
        BY_SCHOOL: "/candidate/school",
        PROGRESS: "/candidate/progress",
        NO_INSTRUCTOR: "/candidate/no-instructor",
    },

    INSTRUCTOR_CANDIDATE: {
        CRUD: "/instructor-candidate",
    },

    SCHOOL: {
        CRUD: "/school",
        BY_USER: "/school/user",
    },

    ENROLLMENT: {
        CRUD: "/enrollment",
        SCHOOL: "/enrollment/school",
        CANDIDATE: "/enrollment/candidate",
    },
};
