import { Navbar } from "@/components";
import { Outlet } from "react-router-dom";

const CandidateLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default CandidateLayout;
