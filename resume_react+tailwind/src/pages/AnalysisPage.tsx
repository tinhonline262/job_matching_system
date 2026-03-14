import { motion } from "framer-motion";

export default function AnalysisPage() {
  return (
    <motion.main
      className="p-8 flex flex-col gap-6 min-h-[calc(100vh-73px)] bg-app-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-primary leading-8">
          Start Analysis
        </h1>
        <p className="text-sm font-normal text-text-2ry leading-5">
          Upload a resume and paste a job description to start AI-powered
          analysis
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        <article className="bg-white border border-[#e2e8f0] rounded-[24px] p-6 flex flex-col">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-10 rounded-xl bg-[#f5f5f5] flex items-center justify-center">
              <svg
                className="w-5 h-5 text-primary"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 1H5a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V5l-4-4z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 1v4h4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <h2 className="text-base font-semibold text-primary leading-6">
                Resume Upload
              </h2>
              <p className="text-xs font-normal text-text-2ry leading-4">
                Upload your resume or CV document
              </p>
            </div>
          </div>
          <div
            className="flex-1 border-2 border-dashed border-[#e2e8f0] rounded-2xl flex flex-col items-center justify-center gap-3 py-10 px-6 text-center cursor-pointer hover:border-[#a0a0a0] hover:bg-[#fafafa] transition-all min-h-[200px]"
            role="button"
            tabIndex={0}
          >
            <span className="w-12 h-12 rounded-full bg-[#f5f5f5] flex items-center justify-center">
              <svg
                className="w-5 h-5 text-text-2ry"
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
            </span>
            <p className="text-sm font-medium text-primary leading-5">
              Click to upload{" "}
              <span className="text-text-2ry font-normal">
                or drag and drop
              </span>
            </p>
            <p className="text-xs text-text-soft leading-4">
              PDF, DOCX, or TXT (max 10MB)
            </p>
          </div>
        </article>

        <article className="bg-white border border-[#e2e8f0] rounded-[24px] p-6 flex flex-col">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-10 rounded-xl bg-[#f5f5f5] flex items-center justify-center">
              <svg
                className="w-5 h-5 text-primary"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="3"
                  width="14"
                  height="14"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M7 7h6M7 10h6M7 13h3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <div>
              <h2 className="text-base font-semibold text-primary leading-6">
                Job Description
              </h2>
              <p className="text-xs font-normal text-text-2ry leading-4">
                Paste the job listing to compare
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <textarea
              className="flex-1 min-h-[200px] bg-[#fafafa] border border-[#e2e8f0] rounded-2xl p-4 text-sm font-normal text-primary leading-5 resize-y focus:outline-none focus:border-[#a0a0a0] transition-colors placeholder:text-text-soft font-sans"
              placeholder="Paste the job description here..."
              aria-label="Job description"
            />
          </div>
        </article>
      </div>

      <aside className="bg-white border border-[#e2e8f0] rounded-[24px] p-6 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center gap-5 text-center py-4">
          <div className="w-[120px] h-[120px] rounded-full bg-[radial-gradient(circle,rgba(200,200,200,0.12)_0%,transparent_70%)] flex items-center justify-center">
            <span className="w-14 h-14 bg-white rounded-2xl shadow-[0px_10px_15px_-3px_rgba(10,10,10,0.25),0px_4px_6px_-4px_rgba(43,108,238,0.2)] flex items-center justify-center">
              <svg
                className="w-7 h-7 text-text-muted"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.66 15.66l-1.32-1.32a1 1 0 00-1.42 0 1 1 0 000 1.42l2 2a1 1 0 001.42 0l5-5a1 1 0 000-1.42 1 1 0 00-1.42 0L9.66 15.66z"
                  fill="currentColor"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
          </div>
          <h3 className="text-base font-semibold text-primary leading-6">
            Ready for Insights
          </h3>
          <p className="text-sm font-normal text-text-2ry leading-5 max-w-[300px]">
            Upload your resume and add a job description to get AI-powered
            career insights
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {["Match Score", "Skill Gap", "AI Feedback"].map((label) => (
              <span
                key={label}
                className="flex items-center gap-[6px] px-3 py-[6px] text-xs font-medium text-text-2ry bg-white border border-[#e2e8f0] rounded-full leading-4"
              >
                <svg
                  className="w-3 h-3 text-text-soft"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 1v10M1 6h10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                {label}
              </span>
            ))}
          </div>
        </div>
      </aside>

      <div className="flex items-center justify-between">
        <span className="text-xs font-normal text-text-soft leading-4">
          Both fields required for analysis
        </span>
        <button
          type="button"
          className="inline-flex items-center gap-2 h-12 px-6 bg-primary text-white text-sm font-medium rounded-2xl shadow-[0px_10px_15px_-3px_rgba(10,10,10,0.25),0px_4px_6px_-4px_rgba(43,108,238,0.2)] hover:opacity-90 transition-opacity leading-5"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 2l-6 6m6-6l-4 12-2-6-6-2 12-4z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Start AI Analysis
        </button>
      </div>
    </motion.main>
  );
}
