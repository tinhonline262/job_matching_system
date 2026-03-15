import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function DashboardEmpty() {
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-73px)] p-6">
      <motion.div
        className="max-w-[672px] text-center flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Illustration */}
        <div className="w-64 h-64 relative mb-10">
          <div className="w-full h-full rounded-full bg-[radial-gradient(circle,rgba(200,200,200,0.15)_0%,transparent_70%)] flex items-center justify-center">
            <div className="w-40 h-40 bg-white rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center gap-2 p-[25px] relative">
              <span className="block w-full h-[5px] bg-[#e5e5e5] rounded-[3px]" />
              <span className="block w-[80%] h-[5px] bg-[#e5e5e5] rounded-[3px]" />
              <span className="block w-full h-[5px] bg-[#e5e5e5] rounded-[3px]" />
              <span className="block w-[80%] h-[5px] bg-[#e5e5e5] rounded-[3px]" />
              <span className="mt-2 text-text-lighter">
                <svg
                  className="w-8 h-10"
                  viewBox="0 0 32 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 0H4C1.8 0 0 1.8 0 4v32c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V12L20 0z"
                    fill="currentColor"
                    opacity="0.15"
                  />
                  <path
                    d="M20 0v8c0 2.2 1.8 4 4 4h8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </span>
            </div>
          </div>
          {/* Floating nodes */}
          <span className="absolute w-12 h-12 top-0 left-0 rounded-full bg-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] flex items-center justify-center">
            <svg
              className="w-1/2 h-1/2 text-text-muted"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M12 2v4M12 18v4M2 12h4M18 12h4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="absolute w-10 h-10 top-5 -right-[10px] rounded-full bg-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] flex items-center justify-center">
            <svg
              className="w-1/2 h-1/2 text-text-muted"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3l9 4.5v9L12 21l-9-4.5v-9L12 3z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="absolute w-16 h-16 bottom-5 -right-5 rounded-full bg-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] flex items-center justify-center">
            <svg
              className="w-1/2 h-1/2 text-text-muted"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0019 4.77 5.07 5.07 0 0018.91 1S17.73.65 15 2.48a13.38 13.38 0 00-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 004 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 008 18.13V22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        {/* Title */}
        <h1 className="text-[30px] font-bold leading-10 text-primary mb-4">
          No active intelligence reports
        </h1>

        {/* Description */}
        <p className="text-base font-normal leading-6 text-text-2ry max-w-[404px] mb-10">
          Upload your resume to begin an AI-powered analysis of your
          professional profile and market alignment.
        </p>

        {/* Actions */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 w-full md:w-auto">
          <Link
            to="/dashboard/analyze"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-primary text-white text-base font-medium rounded-2xl shadow-[0px_10px_15px_-3px_rgba(10,10,10,0.25),0px_4px_6px_-4px_rgba(43,108,238,0.2)] hover:opacity-90 transition-opacity leading-6 no-underline w-full md:w-auto"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 14V3m0 0L6 7m4-4l4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 14v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Upload Resume
          </Link>
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center h-14 px-8 bg-white text-primary text-sm font-medium rounded-2xl border border-[#e2e8f0] hover:bg-[#f8f8f8] transition-colors leading-5 no-underline w-full md:w-auto"
          >
            View Samples
          </Link>
        </div>

        {/* Feature descriptions */}
        <div className="flex gap-6 flex-wrap justify-center">
          <span className="flex items-center gap-2 text-xs font-normal text-text-soft leading-4">
            <svg
              className="w-3 h-3 text-text-soft shrink-0"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 1L7.5 3.5L10.5 4L8.5 6L9 9L6 7.5L3 9L3.5 6L1.5 4L4.5 3.5L6 1z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              <path
                d="M4 6l2 2 4-4"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Privacy Guaranteed
          </span>
          <span className="flex items-center gap-2 text-xs font-normal text-text-soft leading-4">
            <svg
              className="w-3 h-3 text-text-soft shrink-0"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="6"
                cy="6"
                r="5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M6 3v3l2 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Results in seconds
          </span>
          <span className="flex items-center gap-2 text-xs font-normal text-text-soft leading-4">
            <svg
              className="w-3 h-3 text-text-soft shrink-0"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1H3a1 1 0 00-1 1v8a1 1 0 001 1h6a1 1 0 001-1V4L7 1z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              <path d="M7 1v3h4" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
            </svg>
            PDF, DOCX supported
          </span>
        </div>
      </motion.div>
    </section>
  );
}
