import { routes } from "@/constants";
import {
  AuthLayout,
  CandidateLayout,
  GuestRoute,
  PublicLayout,
  SchoolAdminRoute,
  WaitingForApprove,
  CandidateRoute,
  InstructorRoute,
} from "@/layouts";
import {
  HomePage,
  InstructorDashboardPage,
  Login,
  Register,
  InstructorCalendarPage,
  CandidateCalendarPage,
  BlogPage,
  InstructorCandidateListPage,
  GuestPage,
  WaitingForApprovePage,
  SchoolAdminDashboard,
  PendingListPage,
  PaymentPage,
  CandidateDashboardPage,
  CandidateProgressPage,
  NotFoundPage,
} from "@/pages";
import { AuthPage } from "@/pages/Auth";
import SchoolAdminAssignInstructorPage from "@/pages/SchoolAdminAssignInstructorPage/SchoolAdminAssignInstructorPage";
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
          <Route path={routes.HOME} element={<HomePage />} />

          <Route element={<GuestRoute />}>
            <Route path={routes.PAYMENT} element={<PaymentPage />} />

            <Route path={routes.GUEST} element={<GuestPage />} />
          </Route>
          <Route element={<WaitingForApprove />}>
            <Route
              path={routes.WAITING_FOR_APPROVE}
              element={<WaitingForApprovePage />}
            />
          </Route>

          <Route element={<CandidateRoute />}>
            <Route
              path={routes.CANDIDATE_DASHBOARD}
              element={<CandidateDashboardPage />}
            />
            <Route
              path={routes.CANDIDATE_CALENDAR}
              element={<CandidateCalendarPage />}
            />
            <Route
              path={routes.CANDIDATE_PROGRESS}
              element={<CandidateProgressPage />}
            />
          </Route>

          <Route element={<SchoolAdminRoute />}>
            <Route
              path={routes.SCHOOL_ADMIN_DASHBOARD}
              element={<SchoolAdminDashboard />}
            />
            <Route
              path={routes.SCHOOL_ADMIN_ASSIGN_INSTRUCTOR}
              element={<SchoolAdminAssignInstructorPage />}
            />
            <Route path={routes.PENDING_LIST} element={<PendingListPage />} />
          </Route>

          <Route element={<InstructorRoute />}>
            <Route
              path={routes.INSTRUCTOR_DASHBOARD}
              element={<InstructorDashboardPage />}
            />
            <Route
              path={routes.INSTRUCTOR_CANDIDATE_LIST}
              element={<InstructorCandidateListPage />}
            />
            <Route
              path={routes.INSTRUCTOR_CALENDAR}
              element={<InstructorCalendarPage />}
            />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
