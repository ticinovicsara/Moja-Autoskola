import { routes } from "@/constants";
import { PublicLayout } from "@/layouts";
import { HomePage } from "@/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicLayout />}>
                    <Route path={routes.HOME} element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
