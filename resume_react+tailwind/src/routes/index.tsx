import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/layouts";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import DashboardEmpty from "@/pages/DashboardEmpty";
import DashboardArchive from "@/pages/DashboardArchive";
import AnalysisPage from "@/pages/AnalysisPage";
import DashboardLoading from "@/pages/DashboardLoading";
import SettingsPage from "@/pages/SettingsPage";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardEmpty />} />
          <Route path="archive" element={<DashboardArchive />} />
          <Route path="analyze" element={<AnalysisPage />} />
          <Route path="analyze/loading" element={<DashboardLoading />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
