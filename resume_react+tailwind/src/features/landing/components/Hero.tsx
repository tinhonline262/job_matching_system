import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="px-5 md:px-40 max-w-7xl mx-auto pt-40">
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-[960px] mx-auto">
        <motion.div
          className="flex-1 flex flex-col gap-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center self-start px-3 py-1 bg-[rgba(10,10,10,0.05)] rounded-full text-xs font-bold text-[rgba(10,10,10,0.64)] uppercase tracking-[0.6px] leading-4">
              New: GPT-4o Integration
            </span>
            <h1 className="text-[36px] md:text-[60px] font-extrabold leading-none tracking-[-1.5px] text-primary">
              AI-Powered
              <br />
              Resume
              <br />
              Intelligence
            </h1>
            <p className="text-lg font-normal leading-7 text-text-2ry max-w-[456px]">
              Optimize your career path with instant resume analysis, skill gap
              detection, and personalized AI feedback. Land your dream job
              faster.
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 bg-primary text-white text-base font-bold rounded-2xl shadow-[0px_10px_15px_-3px_rgba(10,10,10,0.25),0px_4px_6px_-4px_rgba(43,108,238,0.2)] hover:opacity-90 transition-opacity leading-6"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"
                  fill="currentColor"
                />
              </svg>
              Analyze Resume
            </Link>
            <button className="inline-flex items-center justify-center h-12 px-[33px] bg-white text-black text-base font-bold rounded-2xl border border-[#e2e8f0] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[#f8f8f8] transition-colors leading-6">
              View Demo
            </button>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-[rgba(115,115,115,0.35)] to-[rgb(94,94,94)] min-h-[300px] lg:min-h-[456px] w-full"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div className="w-full h-[392px] bg-white rounded-[24px] border border-[#f1f5f9] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col p-8 gap-4">
            <span className="text-xs font-semibold uppercase tracking-[1.5px] text-text-muted">
              RESUME
            </span>
            <div className="w-12 h-12 rounded-full bg-[#b0d4c1] mb-2" />
            <div className="mt-3 flex flex-col gap-2">
              <div className="h-2 bg-[#e2e8f0] rounded w-full" />
              <div className="h-2 bg-[#e2e8f0] rounded w-4/5" />
              <div className="h-2 bg-[#e2e8f0] rounded w-3/5" />
            </div>
            <div className="mt-3 flex flex-col gap-2">
              <div className="h-2 bg-[#e2e8f0] rounded w-full" />
              <div className="h-2 bg-[#e2e8f0] rounded w-4/5" />
            </div>
            <div className="mt-3 flex flex-col gap-2">
              <div className="h-2 bg-[#e2e8f0] rounded w-full" />
              <div className="h-2 bg-[#e2e8f0] rounded w-3/5" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
