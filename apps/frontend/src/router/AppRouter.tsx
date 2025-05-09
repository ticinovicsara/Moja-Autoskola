import { routes } from "@/constants";
import { CandidateLayout, PublicLayout } from "@/layouts";
import { HomePage, CandidateDashboardPage } from "@/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicLayout />}>
                    <Route path={routes.HOME} element={<HomePage />} />
                </Route>

                <Route element={<CandidateLayout />}>
                    <Route
                        path={routes.CANDIDATE_DASHBOARD}
                        element={<CandidateDashboardPage />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
