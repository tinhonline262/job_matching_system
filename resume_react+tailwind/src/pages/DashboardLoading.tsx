import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function DashboardLoading() {
  return (
    <motion.main
      className="p-8 flex flex-col gap-6 min-h-[calc(100vh-73px)] bg-app-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Breadcrumbs */}
      <nav className="text-sm text-text-2ry leading-5">
        <Link to="/dashboard" className="text-text-2ry hover:text-primary no-underline">
          Dashboard
        </Link>
        <span className="mx-2">/</span>
        <span className="text-primary font-medium">Analysis View</span>
      </nav>

      {/* Title + status */}
      <header className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h1 className="text-2xl font-semibold text-primary leading-8">
            Analysis in Progress
          </h1>
          <span className="flex items-center gap-2 text-sm font-normal text-text-muted leading-5">
            <span className="w-2 h-2 rounded-full bg-[#a0a0a0]" aria-hidden />
            AI Agent Processing
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-normal text-text-2ry leading-5">
            Comparing skills and experience...
          </p>
          <div className="w-full max-w-md h-2 bg-[#e2e8f0] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#525252] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "65%" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
        </div>
      </header>

      {/* Two columns: left cards + right AI results skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
        {/* Left column: Uploaded Resume + Job Description */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Uploaded Resume card */}
          <article className="bg-white border border-[#e2e8f0] rounded-[24px] p-6 flex flex-col flex-shrink-0">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
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
                <h2 className="text-base font-semibold text-primary leading-6">
                  Uploaded Resume
                </h2>
              </div>
              <span className="text-[10px] font-medium text-text-muted uppercase tracking-wide bg-[#f5f5f5] px-2 py-1 rounded leading-3">
                Read-only
              </span>
            </div>
            <div className="text-sm font-normal text-primary leading-5 space-y-3">
              <p className="font-bold uppercase tracking-wide">Alexander D. Rivera</p>
              <p className="text-text-2ry">
                Senior Software Engineer with 8+ years of experience in building
                scalable web applications. Expert in React, Node.js, and Cloud
                Infrastructure.
              </p>
              <p className="font-semibold text-primary">Professional experience</p>
              <p className="text-text-2ry font-medium">TechFlow Systems (2019 – Present)</p>
              <ul className="list-disc list-inside text-text-2ry space-y-1">
                <li>
                  Led development of a microservices architecture that reduced
                  latency by 40%.
                </li>
                <li>
                  Managed a team of 12 engineers using Agile methodologies.
                </li>
              </ul>
              <p className="font-semibold text-primary">Skills</p>
              <p className="text-text-2ry">
                React, Node.js, TypeScript, AWS, Docker, Kubernetes, REST APIs
              </p>
            </div>
          </article>

          {/* Job Description card */}
          <article className="bg-white border border-[#e2e8f0] rounded-[24px] p-6 flex flex-col flex-shrink-0">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#f5f5f5] flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M10 6v4l2 2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <h2 className="text-base font-semibold text-primary leading-6">
                  Job Description
                </h2>
              </div>
              <span className="text-[10px] font-medium text-text-muted uppercase tracking-wide bg-[#f5f5f5] px-2 py-1 rounded leading-3">
                Read-only
              </span>
            </div>
            <div className="text-sm font-normal text-primary leading-5 space-y-3">
              <p className="font-bold">Staff Software Engineer (Cloud Platform)</p>
              <p className="text-text-2ry">
                We are seeking a high-impact engineer to join our infrastructure
                core team. You will be responsible for designing and deploying
                resilient systems that handle millions of requests per second.
              </p>
              <p className="font-semibold text-primary">Requirements</p>
              <ul className="list-disc list-inside text-text-2ry space-y-1">
                <li>Strong background in distributed systems.</li>
                <li>Proficiency in Go or Rust (preferred).</li>
                <li>Deep knowledge of Docker and orchestration platforms.</li>
              </ul>
            </div>
          </article>
        </div>

        {/* Right column: AI Analysis Results skeleton */}
        <article className="bg-white border border-[#e2e8f0] rounded-[24px] p-6 flex flex-col min-h-[320px]">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-10 rounded-xl bg-[#f5f5f5] flex items-center justify-center">
              <svg
                className="w-5 h-5 text-primary"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2H6a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V6l-4-4z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 2v4h4M7 7h6M7 10h4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h2 className="text-base font-semibold text-primary leading-6">
              AI Analysis Results
            </h2>
          </div>
          <div className="flex-1 flex flex-col gap-4 animate-pulse">
            <div className="w-16 h-16 rounded-full bg-[#e5e5e5] shrink-0" />
            <div className="space-y-2">
              <div className="h-3 bg-[#e5e5e5] rounded w-full max-w-[90%]" />
              <div className="h-3 bg-[#e5e5e5] rounded w-full max-w-[70%]" />
              <div className="h-3 bg-[#e5e5e5] rounded w-full max-w-[85%]" />
            </div>
            <div className="flex-1 flex gap-2 mt-2">
              <div className="flex-1 h-20 bg-[#e5e5e5] rounded-xl" />
              <div className="flex-1 h-20 bg-[#e5e5e5] rounded-xl" />
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-[#e5e5e5] rounded w-full" />
              <div className="h-3 bg-[#e5e5e5] rounded w-[80%]" />
            </div>
            <div className="w-10 h-10 rounded-full bg-[#e5e5e5] shrink-0" />
          </div>
        </article>
      </div>
    </motion.main>
  );
}
