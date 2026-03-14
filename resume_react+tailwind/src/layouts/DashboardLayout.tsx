import { Outlet } from "react-router-dom";
import { DashboardHeader, Sidebar } from "@/features/dashboard";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-app-bg">
      <DashboardHeader />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
