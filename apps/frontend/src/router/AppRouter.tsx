import { routes } from "@/constants";
import {
  AuthLayout,
  CandidateLayout,
  InstructorLayout,
  PublicLayout,
} from "@/layouts";
import {
  HomePage,
  CandidateDashboardPage,
  InstructorDashboardPage,
  InstructorCandidateListPage,
  Login,
  Register,
  InstructorCalendarPage,
  CandidateCalendarPage,
  BlogPage,
} from "@/pages";
import { AuthPage } from "@/pages/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path={routes.LOGIN} element={<Login />} />
          <Route path={routes.REGISTER} element={<Register />} />
        </Route>

        <Route element={<PublicLayout />}>
          <Route path={routes.HOME} element={<HomePage />} />
        </Route>
        <Route element={<PublicLayout />}>
          <Route path={`${routes.BLOG}/:id`} element={<BlogPage />} />
          <Route path={routes.AUTH} element={<AuthPage />} />
        </Route>

        <Route element={<CandidateLayout />}>
          <Route path={routes.HOME} element={<HomePage />} />

          <Route
            path={routes.CANDIDATE_DASHBOARD}
            element={<CandidateDashboardPage />}
          />
          <Route
            path={routes.CANDIDATE_CALENDAR}
            element={<CandidateCalendarPage />}
          />
        </Route>

        <Route element={<CandidateLayout />}>
          <Route
            path={routes.INSTRUCTOR_CANDIDATE_LIST}
            element={<InstructorCandidateListPage />}
          />
          <Route
            path={routes.CANDIDATE_CALENDAR}
            element={<CandidateCalendarPage />}
          />
        </Route>
        <Route element={<InstructorLayout />}>
          <Route
            path={routes.INSTRUCTOR_DASHBOARD}
            element={<InstructorDashboardPage />}
          />{" "}
          <Route
            path={routes.INSTRUCTOR_CANDIDATE_LIST}
            element={<InstructorCandidateListPage />}
          />
          <Route
            path={routes.INSTRUCTOR_CALENDAR}
            element={<InstructorCalendarPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
