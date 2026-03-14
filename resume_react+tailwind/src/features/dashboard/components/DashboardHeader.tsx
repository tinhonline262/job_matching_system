import { Link } from "react-router-dom";

export default function DashboardHeader() {
  return (
    <header className="h-[73px] bg-white border-b border-[#e2e8f0] flex items-center justify-between px-4 md:px-10">
      <Link
        to="/dashboard"
        className="flex items-center gap-[10px] no-underline"
      >
        <div className="w-8 h-8 bg-primary rounded-2xl flex items-center justify-center">
          <svg
            className="w-[18px] h-[18px] text-white"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 1.5L11.25 6.75L16.5 9L11.25 11.25L9 16.5L6.75 11.25L1.5 9L6.75 6.75L9 1.5Z"
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
        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
          AL
        </div>
      </div>
    </header>
  );
}
