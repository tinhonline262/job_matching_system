import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/layouts";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import DashboardEmpty from "@/pages/DashboardEmpty";
import AnalysisPage from "@/pages/AnalysisPage";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardEmpty />} />
          <Route path="analyze" element={<AnalysisPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
