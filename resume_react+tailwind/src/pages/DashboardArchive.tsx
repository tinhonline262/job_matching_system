import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface ArchiveItem {
  id: string;
  candidateName: string;
  jobTitle: string;
  matchScore: number;
  date: string;
  status: "completed" | "pending" | "failed";
}

const mockArchiveData: ArchiveItem[] = [
  {
    id: "1",
    candidateName: "Alexander D. Rivera",
    jobTitle: "Staff Software Engineer (Cloud Platform)",
    matchScore: 87,
    date: "2024-01-15",
    status: "completed",
  },
  {
    id: "2",
    candidateName: "Sarah Chen",
    jobTitle: "Senior Product Manager",
    matchScore: 72,
    date: "2024-01-14",
    status: "completed",
  },
  {
    id: "3",
    candidateName: "Michael Thompson",
    jobTitle: "DevOps Engineer",
    matchScore: 91,
    date: "2024-01-12",
    status: "completed",
  },
  {
    id: "4",
    candidateName: "Emily Watson",
    jobTitle: "Frontend Developer",
    matchScore: 65,
    date: "2024-01-10",
    status: "completed",
  },
  {
    id: "5",
    candidateName: "James Park",
    jobTitle: "Data Scientist",
    matchScore: 78,
    date: "2024-01-08",
    status: "completed",
  },
  {
    id: "6",
    candidateName: "Lisa Anderson",
    jobTitle: "Engineering Manager",
    matchScore: 83,
    date: "2024-01-05",
    status: "completed",
  },
];

function NotificationModal() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed top-4 right-4 z-50 max-w-sm"
    >
      <div className="bg-white border border-[#e2e8f0] rounded-2xl shadow-lg p-4 flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
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
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-primary leading-5">
            Analysis Complete
          </h4>
          <p className="text-xs text-text-2ry leading-4 mt-1">
            Your resume analysis for "Staff Software Engineer" is ready. Match score: 87%
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
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

function MatchScoreBadge({ score }: { score: number }) {
  const getColor = (score: number) => {
    if (score >= 80) return "bg-green-100 text-green-700";
    if (score >= 60) return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700";
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold ${getColor(
        score
      )}`}
    >
      {score}%
    </span>
  );
}

function StatusBadge({ status }: { status: ArchiveItem["status"] }) {
  const config = {
    completed: { bg: "bg-green-100", text: "text-green-700", label: "Completed" },
    pending: { bg: "bg-yellow-100", text: "text-yellow-700", label: "Pending" },
    failed: { bg: "bg-red-100", text: "text-red-700", label: "Failed" },
  };

  const { bg, text, label } = config[status];

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium ${bg} ${text}`}
    >
      {label}
    </span>
  );
}

export default function DashboardArchive() {
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showNotification && <NotificationModal />}

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
          <span className="text-primary font-medium">Resume Archive</span>
        </nav>

        {/* Title + Description */}
        <header className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h1 className="text-2xl font-semibold text-primary leading-8">
              Resume Archive
            </h1>
            <span className="text-sm font-normal text-text-muted leading-5">
              {mockArchiveData.length} records found
            </span>
          </div>
          <p className="text-sm font-normal text-text-2ry leading-5">
            View and manage your previous resume analysis reports
          </p>
        </header>

        {/* Archive List */}
        <div className="flex flex-col gap-4">
          {mockArchiveData.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white border border-[#e2e8f0] rounded-[20px] p-5 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-4 min-w-0">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-xl bg-[#f5f5f5] flex items-center justify-center shrink-0">
                    <span className="text-lg font-semibold text-primary">
                      {item.candidateName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-primary leading-6 truncate">
                      {item.candidateName}
                    </h3>
                    <p className="text-sm text-text-2ry leading-5 truncate">
                      {item.jobTitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* Date */}
                  <span className="text-xs text-text-muted whitespace-nowrap">
                    {new Date(item.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>

                  {/* Match Score */}
                  <MatchScoreBadge score={item.matchScore} />

                  {/* Status */}
                  <StatusBadge status={item.status} />

                  {/* Actions */}
                  <button className="w-8 h-8 rounded-lg hover:bg-[#f5f5f5] flex items-center justify-center transition-colors">
                    <svg
                      className="w-4 h-4 text-text-muted"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 10l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center pt-4">
          <button className="px-6 py-3 text-sm font-medium text-primary bg-white border border-[#e2e8f0] rounded-xl hover:bg-[#f8f8f8] transition-colors">
            Load More Records
          </button>
        </div>
      </motion.main>
    </>
  );
}

export { NotificationModal };
