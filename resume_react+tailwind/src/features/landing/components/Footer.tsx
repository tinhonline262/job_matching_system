import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e2e8f0] px-5 md:px-40 pt-[35px] pb-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 text-center md:text-left">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
            <svg
              className="w-[11px] h-[11px] text-white"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 0.5L7 4L10.5 5.5L7 7L5.5 10.5L4 7L0.5 5.5L4 4L5.5 0.5Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="text-sm font-bold text-black tracking-[-0.35px] leading-5">
            Resume Intelligence
          </span>
        </Link>

        <nav className="flex gap-4 md:gap-8">
          <a
            href="#"
            className="text-xs font-medium text-text-muted hover:text-primary transition-colors leading-4"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-xs font-medium text-text-muted hover:text-primary transition-colors leading-4"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-xs font-medium text-text-muted hover:text-primary transition-colors leading-4"
          >
            Contact
          </a>
        </nav>

        <p className="text-xs font-normal text-text-lighter leading-4">
          &copy; 2026 Resume Intelligence AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
