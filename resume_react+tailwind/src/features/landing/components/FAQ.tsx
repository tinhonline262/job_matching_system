import { useState } from "react";
import { motion } from "framer-motion";

const faqItems = [
  "How does the AI analyze my resume?",
  "How is the match score calculated?",
  "Is my resume data secure?",
  "What file formats are supported?",
  "What roles does the system support?",
  "Does the AI feedback replace a real recruiter?",
];

function PlusCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 8V16M8 12H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="px-5 py-24 md:px-24 flex items-center justify-center"
      id="faq"
    >
      <div className="w-[720px] max-w-full flex flex-col items-center gap-[30px]">
        <h2 className="text-2xl font-semibold leading-[28.8px] tracking-[-1px] text-primary text-center">
          FAQ
        </h2>
        <div className="w-full flex flex-col gap-4 md:gap-[30px]">
          {faqItems.map((question, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 p-4 border border-[#e5e5e5] rounded-2xl cursor-pointer hover:bg-[#fafafa] transition-colors"
              role="button"
              tabIndex={0}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <span className="shrink-0 w-6 h-6 text-primary">
                <PlusCircleIcon />
              </span>
              <span className="text-base font-normal leading-6 text-primary">
                {question}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
