import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ReusableProgram from "./pages/ReusableProgram";
import GetInvolved from "./pages/GetInvolved";
import Programs from "./pages/Programs";
import ProgramsLayout from "./pages/ProgramsLayout";
import CareNavigation from "./pages/CareNavigation";
import CommunityHealthFairs from "./pages/CommunityHealthFairs";
import PreHealthWorkforceReadiness from "./pages/PreHealthWorkforceReadiness";
import FitClub from "./pages/FitClub";
import Board from "./pages/Board";
import Team from "./pages/Team";
import Admin from "./pages/Admin";
import Partners from "./pages/Partners";
import Approvals from "./pages/Approvals";
import Login from "./pages/Login";
import ProtectedRoute from "./auth/ProtectedRoute";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminPrograms from "./components/admin/AdminPrograms";
import AdminTeam from "./components/admin/AdminTeam";
import AdminSettings from "./components/admin/AdminSettings";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/reusable-program" element={<ReusableProgram />} />
        <Route path="/getInvolved" element={<GetInvolved />} />

        {/* Programs & Pages */}
        <Route path="/programs" element={<ProgramsLayout />}>
          <Route index element={<Programs />} />
          <Route path="carenavigation" element={<CareNavigation />} />
          <Route
            path="communityhealthfairs"
            element={<CommunityHealthFairs />}
          />
          <Route
            path="prehealthworkforcereadiness"
            element={<PreHealthWorkforceReadiness />}
          />
          <Route path="fitclub" element={<FitClub />} />
        </Route>

        {/* Admin */}
        <Route path="/board" element={<Board />} />
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="approvals" element={<Approvals />} />
          <Route path="programs" element={<AdminPrograms />} />
          <Route path="team" element={<AdminTeam />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
        <Route path="/partners" element={<Partners />} />
        <Route
          path="/approvals"
          element={<Navigate to="/admin/approvals" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}
