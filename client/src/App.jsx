import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Home from "./pages/Home";
import ProtectedRoute from "./auth/ProtectedRoute";

/** Code-split everything except Home so first paint downloads less JS. */
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ReusableProgram = lazy(() => import("./pages/ReusableProgram"));
const GetInvolved = lazy(() => import("./pages/GetInvolved"));
const Programs = lazy(() => import("./pages/Programs"));
const ProgramsLayout = lazy(() => import("./pages/ProgramsLayout"));
const CareNavigation = lazy(() => import("./pages/CareNavigation"));
const CommunityHealthFairs = lazy(() => import("./pages/CommunityHealthFairs"));
const PreHealthWorkforceReadiness = lazy(() =>
  import("./pages/PreHealthWorkforceReadiness")
);
const FitClub = lazy(() => import("./pages/FitClub"));
const Board = lazy(() => import("./pages/Board"));
const Team = lazy(() => import("./pages/Team"));
const Admin = lazy(() => import("./pages/Admin"));
const Partners = lazy(() => import("./pages/Partners"));
const Approvals = lazy(() => import("./pages/Approvals"));
const Login = lazy(() => import("./pages/Login"));
const AdminDashboard = lazy(() => import("./components/admin/AdminDashboard"));
const AdminPrograms = lazy(() => import("./components/admin/AdminPrograms"));
const AdminTeam = lazy(() => import("./components/admin/AdminTeam"));
const AdminSettings = lazy(() => import("./components/admin/AdminSettings"));

/** Lightweight shell so route transitions do not flash a full-screen spinner. */
function RouteFallback() {
  return (
    <div
      style={{
        minHeight: "45vh",
        width: "100%",
        background: "rgb(241, 244, 248)",
      }}
    />
  );
}

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
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/reusable-program" element={<ReusableProgram />} />
          <Route path="/getInvolved" element={<GetInvolved />} />

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
      </Suspense>
    </BrowserRouter>
  );
}
