import { Link, useLocation } from "react-router-dom";

const navItems = [
  {
    label: "My Reports",
    path: "/dashboard",
    icon: (
      <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.5 1.5H6.5V6.5H1.5V1.5ZM8.5 1.5H13.5V6.5H8.5V1.5ZM1.5 8.5H6.5V13.5H1.5V8.5ZM8.5 8.5H13.5V13.5H8.5V8.5Z"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    ),
  },
  {
    label: "Analyze Folder",
    path: "/dashboard/analyze",
    icon: (
      <svg viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1H8L13 6V16H1V1Z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M8 1V6H13" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    label: "Resume Archive",
    path: "/dashboard/archive",
    icon: (
      <svg viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 3H17V13H1V3Z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M1 1H17V3H1V1Z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M7 7H11" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    label: "Settings",
    path: "/dashboard/settings",
    icon: (
      <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.5 1H10.5L11 3L13 4L15 3.5L16.5 6.5L15 8V9L16.5 10.5L15 13L13 12.5L11 14L10.5 16H6.5L6 14L4 12.5L2 13L0.5 10.5L2 9V8L0.5 6.5L2 3.5L4 4L6 3L6.5 1Z"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle
          cx="8.5"
          cy="8.5"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex w-64 min-h-full bg-white border-r border-[#e2e8f0] flex-col justify-between p-4">
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 p-3 rounded-lg text-sm text-primary no-underline leading-5 transition-colors ${
              location.pathname === item.path
                ? "bg-app-bg font-medium shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                : "font-normal hover:bg-[#f5f5f5]"
            }`}
          >
            <span className="w-4 h-4 shrink-0 text-primary">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-[17px] border border-[#e2e8f0] rounded-lg">
        <p className="text-xs font-normal text-primary leading-4 mb-2">
          Current Token Usage
        </p>
        <div className="w-full h-[6px] bg-[#e2e8f0] rounded-[3px] overflow-hidden mb-2">
          <div className="h-full w-[64%] bg-primary rounded-[3px]" />
        </div>
        <p className="text-[11px] font-normal text-text-soft leading-[15px]">
          6,400 / 10,000 monthly
        </p>
      </div>
    </aside>
  );
}
