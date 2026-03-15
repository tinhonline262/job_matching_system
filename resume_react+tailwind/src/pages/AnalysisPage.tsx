import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type AnalysisState = "idle" | "analyzing" | "completed";

interface Notification {
  id: string;
  type: "info" | "success" | "error";
  title: string;
  message: string;
}

function AnalysisNotification({
  notification,
  onClose,
}: {
  notification: Notification;
  onClose: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const icons = {
    info: (
      <svg
        className="w-5 h-5 text-blue-600"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 9v5M10 6v1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    success: (
      <svg
        className="w-5 h-5 text-green-600"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          fill="currentColor"
        />
      </svg>
    ),
    error: (
      <svg
        className="w-5 h-5 text-red-600"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M7 7l6 6M13 7l-6 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  };

  const bgColors = {
    info: "bg-blue-50",
    success: "bg-green-50",
    error: "bg-red-50",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      className="fixed top-4 right-4 z-50 max-w-sm"
    >
      <div
        className={`border border-[#e2e8f0] rounded-2xl shadow-lg p-4 flex items-start gap-3 ${bgColors[notification.type]}`}
      >
        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0">
          {icons[notification.type]}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-primary leading-5">
            {notification.title}
          </h4>
          <p className="text-xs text-text-2ry leading-4 mt-1">
            {notification.message}
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-text-muted hover:text-primary transition-colors p-1"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4l12 12M4 16L16 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}

export default function AnalysisPage() {
  const navigate = useNavigate();
  const [analysisState, setAnalysisState] = useState<AnalysisState>("idle");
  const [notification, setNotification] = useState<Notification | null>(null);

  const handleStartAnalysis = () => {
    setAnalysisState("analyzing");
    setNotification({
      id: "analyzing",
      type: "info",
      title: "Analyzing Resume...",
      message: "AI is comparing your resume with the job description. This may take a few seconds.",
    });

    setTimeout(() => {
      setAnalysisState("completed");
      setNotification({
        id: "completed",
        type: "success",
        title: "Analysis Complete",
        message: "Your resume analysis is ready. Match score: 87%",
      });
    }, 3000);
  };

  const handleNotificationClose = () => {
    setNotification(null);
  };

  return (
    <>
      {notification && (
        <AnalysisNotification
          notification={notification}
          onClose={handleNotificationClose}
        />
      )}

      <motion.main
        className="p-8 flex flex-col gap-6 min-h-[calc(100vh-73px)] bg-app-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <header className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold text-primary leading-8">
            Analysis Dashboard
          </h1>
          <p className="text-sm font-normal text-text-2ry leading-5">
            Get AI-powered insights on how well your resume matches a specific
            job description.
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
                PDF, DOCX, or TXT (Max 5MB)
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
                placeholder="Paste the target job description here to analyze the match..."
                aria-label="Job description"
              />
            </div>
          </article>
        </div>

        <aside className="bg-white border border-[#e2e8f0] rounded-[24px] p-6 flex flex-col">
          {analysisState === "completed" ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 flex flex-col"
            >
              {/* Results Section */}
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-600"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <div>
                  <h2 className="text-base font-semibold text-primary leading-6">
                    Analysis Results
                  </h2>
                  <p className="text-xs font-normal text-text-2ry leading-4">
                    Your AI-powered match report is ready
                  </p>
                </div>
              </div>

              {/* Match Score */}
              <div className="flex items-center justify-center gap-8 mb-6">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-green-700">87%</span>
                  </div>
                  <p className="text-xs font-medium text-text-2ry">Match Score</p>
                </div>
                <div className="h-12 w-px bg-[#e2e8f0]" />
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-blue-700">12</span>
                  </div>
                  <p className="text-xs font-medium text-text-2ry">Skills Matched</p>
                </div>
                <div className="h-12 w-px bg-[#e2e8f0]" />
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-yellow-700">5</span>
                  </div>
                  <p className="text-xs font-medium text-text-2ry">Gap Skills</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => navigate("/dashboard/archive")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:opacity-90 transition-opacity"
                >
                  View Full Report
                </button>
                <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary text-sm font-medium rounded-xl border border-[#e2e8f0] hover:bg-[#f8f8f8] transition-colors">
                  Download PDF
                </button>
              </div>
            </motion.div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center gap-5 text-center py-4">
              {analysisState === "analyzing" ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="w-[120px] h-[120px] relative flex items-center justify-center">
                    <motion.div
                      className="w-24 h-24 rounded-full border-4 border-[#e2e8f0]"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-primary"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-primary leading-6">
                    Analyzing Your Resume
                  </h3>
                  <p className="text-sm font-normal text-text-2ry leading-5 max-w-[300px]">
                    Our AI is comparing your resume against the job description.
                    This typically takes 2-5 seconds.
                  </p>
                </motion.div>
              ) : (
                <>
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
                    Once you upload your resume and provide a job description, our AI
                    will generate a detailed match report, skill gap analysis, and
                    optimization suggestions here.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {[
                      "ATS Compatibility",
                      "Keyword Optimization",
                      "Skill Match Scoring",
                    ].map((label) => (
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
                </>
              )}
            </div>
          )}
        </aside>

        <div className="flex items-center justify-between">
          <span className="text-xs font-normal text-text-soft leading-4">
            {analysisState === "completed"
              ? "Analysis saved to archive"
              : "Both fields required for analysis"}
          </span>
          <button
            type="button"
            onClick={handleStartAnalysis}
            disabled={analysisState === "analyzing"}
            className={`inline-flex items-center gap-2 h-12 px-6 text-sm font-medium rounded-2xl transition-all leading-5 ${
              analysisState === "analyzing"
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-primary text-white shadow-[0px_10px_15px_-3px_rgba(10,10,10,0.25),0px_4px_6px_-4px_rgba(43,108,238,0.2)] hover:opacity-90"
            }`}
          >
            {analysisState === "analyzing" ? (
              <>
                <svg
                  className="w-4 h-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="opacity-25"
                  />
                  <path
                    d="M12 2a10 10 0 019.95 9"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                Analyzing...
              </>
            ) : analysisState === "completed" ? (
              <>
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
                Re-analyze
              </>
            ) : (
              <>
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
              </>
            )}
          </button>
        </div>
      </motion.main>
    </>
  );
}
