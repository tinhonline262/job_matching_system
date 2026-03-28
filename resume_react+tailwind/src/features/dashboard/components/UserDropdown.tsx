import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

interface UserDropdownProps {
  name: string;
  email: string;
  avatarUrl?: string;
  onLogout: () => void;
}

export default function UserDropdown({
  name,
  email,
  avatarUrl,
  onLogout,
}: UserDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const initials = useMemo(() => {
    const chunks = name.trim().split(/\s+/).filter(Boolean);
    if (chunks.length === 0) {
      return "CN";
    }

    return chunks
      .slice(0, 2)
      .map((word) => word[0]?.toUpperCase() ?? "")
      .join("");
  }, [name]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current) {
        return;
      }

      if (!containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("mousedown", onPointerDown);
    window.addEventListener("keydown", onEscape);

    return () => {
      window.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("keydown", onEscape);
    };
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        className="w-10 h-10 rounded-full border border-[#e4e7ef] overflow-hidden bg-[#111111] text-white text-sm font-semibold"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        {avatarUrl ? (
          <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          initials
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute right-0 top-[52px] w-[248px] rounded-2xl border border-[#e3e6ee] bg-white shadow-[0px_20px_40px_rgba(14,24,42,0.14)] p-2 z-40"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            role="menu"
          >
            <div className="px-3 py-3 border-b border-[#eef1f6]">
              <p className="text-sm font-semibold text-[#171b25]">{name}</p>
              <p className="text-xs text-[#768196] mt-1 truncate">{email}</p>
            </div>

            <div className="py-1">
              <Link
                to="/dashboard/profile"
                className="h-10 px-3 rounded-xl text-sm text-[#1a202d] flex items-center gap-2 hover:bg-[#f3f5fa] transition-colors"
                role="menuitem"
                onClick={() => setOpen(false)}
              >
                <svg
                  className="w-4 h-4 text-[#606a7f]"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M3 17c0-3.5 3-6 7-6s7 2.5 7 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                Profile
              </Link>

              <button
                type="button"
                className="h-10 w-full px-3 rounded-xl text-sm text-[#b42318] flex items-center gap-2 hover:bg-[#fff1ef] transition-colors"
                role="menuitem"
                onClick={onLogout}
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 3H4a1 1 0 00-1 1v12a1 1 0 001 1h3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13 14l4-4-4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 10H8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                Logout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
