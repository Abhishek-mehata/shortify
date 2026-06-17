import { Routes, Route } from "react-router-dom";
// import IntroPage from "../pages/IntroPage";
import Dashboard from "../pages/Dashboard";
import AnalyticsPage from "../pages/AnalyticsPage";
// import NotFound from "../pages/NotFound";
import IntroPage from "../pages/IntroPage"
import ShortenPage from "../pages/ShortenPage";
import Layout from "../layouts/Layout"

function AppRoutes() {
    return (
        <Routes>
            {/* Landing Page */}
            <Route path="/" element={<IntroPage />} />

            {/* App */}
            <Route element={<Layout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/shorten" element={<ShortenPage />} />
                <Route path="/analytics/:shortId" element={<AnalyticsPage />} />
            </Route>

            {/* Page Not Found */}
            <Route path="*" element={"<NotFound />"} />
        </Routes>
    );
}

export default AppRoutes;
