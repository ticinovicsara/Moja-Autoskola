const routes = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  BLOG: (id: string) => `/blog/${id}`,
  CANDIDATE_DASHBOARD: "/candidate/dashboard",
  CANDIDATE_CALENDAR: "/candidate/calendar",
};

export { routes };
