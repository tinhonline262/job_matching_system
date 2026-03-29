import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="border-b border-[#e2e8f0] bg-white"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="max-w-[1180px] mx-auto h-[60px] flex items-center justify-between px-5 md:px-8">
        <Link to="/" className="flex items-center gap-[10px]">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
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

        <button
          className="flex md:hidden flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="block w-6 h-0.5 bg-primary rounded-sm transition-transform duration-300" />
          <span className="block w-6 h-0.5 bg-primary rounded-sm transition-transform duration-300" />
          <span className="block w-6 h-0.5 bg-primary rounded-sm transition-transform duration-300" />
        </button>

        <nav
          className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent p-6 md:p-0 border-b md:border-none border-[#e2e8f0] shadow-[0_4px_12px_rgba(0,0,0,0.1)] md:shadow-none z-50`}
        >
          <a
            href="#features"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-text-muted hover:text-primary transition-colors leading-5"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-text-muted hover:text-primary transition-colors leading-5"
          >
            How it Works
          </a>
          <a
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-text-muted hover:text-primary transition-colors leading-5"
          >
            Pricing
          </a>
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="bg-primary text-white text-sm font-semibold px-5 py-2 rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:opacity-90 transition-opacity leading-5"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
