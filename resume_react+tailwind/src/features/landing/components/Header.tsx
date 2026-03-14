import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-[6px] bg-white/80 border-b border-[#e2e8f0]"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-5 md:px-40">
        <Link to="/" className="flex items-center gap-[10px]">
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

        <button
          className="flex md:hidden flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="block w-6 h-0.5 bg-primary rounded-sm transition-transform duration-300" />
          <span className="block w-6 h-0.5 bg-primary rounded-sm transition-transform duration-300" />
          <span className="block w-6 h-0.5 bg-primary rounded-sm transition-transform duration-300" />
        </button>

        <AnimatePresence>
          {(menuOpen || typeof window !== "undefined") && (
            <nav
              className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent p-6 md:p-0 border-b md:border-none border-[#e2e8f0] shadow-[0_4px_12px_rgba(0,0,0,0.1)] md:shadow-none z-50`}
            >
              <a
                href="#features"
                className="text-sm font-medium text-text-muted hover:text-primary transition-colors leading-5"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium text-text-muted hover:text-primary transition-colors leading-5"
              >
                How it Works
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium text-text-muted hover:text-primary transition-colors leading-5"
              >
                Pricing
              </a>
              <Link
                to="/login"
                className="bg-primary text-white text-sm font-semibold px-5 py-2 rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:opacity-90 transition-opacity leading-5"
              >
                Get Started
              </Link>
            </nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
