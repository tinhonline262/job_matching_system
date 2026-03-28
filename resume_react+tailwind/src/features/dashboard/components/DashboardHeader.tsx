import { Link, useNavigate } from "react-router-dom";
import UserDropdown from "./UserDropdown";

export default function DashboardHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <header className="h-[73px] bg-white border-b border-[#dfe4eb] flex items-center justify-between px-4 md:px-8">
      <Link
        to="/dashboard"
        className="flex items-center gap-[10px] no-underline"
      >
        <div className="w-8 h-8 bg-[#0c0d10] rounded-full flex items-center justify-center">
          <svg
            className="w-[15px] h-[15px] text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L14.2 7.8L20 10L14.2 12.2L12 18L9.8 12.2L4 10L9.8 7.8L12 2Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <span className="text-lg font-bold text-[#0f172a] tracking-[-0.45px] leading-7">
          Resume Intelligence
        </span>
      </Link>

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="text-text-muted flex items-center justify-center"
          aria-label="Notifications"
        >
          <svg
            className="w-[18px] h-[18px]"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 16.5C9.825 16.5 10.5 15.825 10.5 15H7.5C7.5 15.825 8.175 16.5 9 16.5ZM14.25 11.25V7.5C14.25 5.0175 12.9375 2.9325 10.6875 2.3925V1.875C10.6875 1.1475 10.1025 0.5625 9.375 0.5625C9.375 0.5625 9 0.5625 9 0.5625C8.2725 0.5625 7.6875 1.1475 7.6875 1.875V2.3925C5.445 2.9325 4.125 5.01 4.125 7.5V11.25L2.625 12.75V13.5H15.75V12.75L14.25 11.25Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <UserDropdown
          name="Cong Nguyen"
          email="cong.nguyen@example.com"
          onLogout={handleLogout}
        />
      </div>
    </header>
  );
}
