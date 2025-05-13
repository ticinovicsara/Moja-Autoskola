import { routes } from "@/constants";
import {
  AuthLayout,
  CandidateLayout,
  GuestRoute,
  PublicLayout,
} from "@/layouts";
import {
  HomePage,
  CandidateDashboardPage,
  CandidateCalendarPage,
  BlogPage,
  GuestPage,
} from "@/pages";
import { AuthPage, Login, Register } from "@/pages/Auth";
import InstructorCandidateListPage from "@/pages/InstructorCandidateListPage/InstructorCandidateListPage";
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
          <Route path={`${routes.BLOG}/:id`} element={<BlogPage />} />
          <Route path={routes.AUTH} element={<AuthPage />} />
        </Route>

        <Route element={<CandidateLayout />}>
          <Route element={<GuestRoute />}>
            <Route path={routes.GUEST} element={<GuestPage />} />
          </Route>
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
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
