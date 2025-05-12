import { routes } from "@/constants";
import { AuthLayout, CandidateLayout, PublicLayout } from "@/layouts";
import {
  HomePage,
  CandidateDashboardPage,
  CandidateCalendarPage,
  BlogPage,
} from "@/pages";
import { Login, Register } from "@/pages/Auth";
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
          <Route path="/blog/:id" element={<BlogPage />} />
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
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
