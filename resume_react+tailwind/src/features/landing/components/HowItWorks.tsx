import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Upload Resume",
    description:
      "Drag and drop your PDF or Word document into our secure portal.",
    icon: (
      <svg viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14 0H2C0.9 0 0 0.9 0 2V28C0 29.1 0.9 30 2 30H22C23.1 30 24 29.1 24 28V10L14 0ZM22 28H2V2H13V11H22V28ZM8 18L10.59 20.59L13 18.17V26H15V18.17L17.41 20.59L20 18L14 12L8 18Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "AI Analysis",
    description:
      "Our neural networks scan for over 50,000 distinct professional keywords.",
    icon: (
      <svg viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.5 0C6.04 0 0 6.04 0 13.5C0 20.96 6.04 27 13.5 27C20.96 27 27 20.96 27 13.5C27 6.04 20.96 0 13.5 0ZM13.5 24.3C7.533 24.3 2.7 19.467 2.7 13.5C2.7 7.533 7.533 2.7 13.5 2.7C19.467 2.7 24.3 7.533 24.3 13.5C24.3 19.467 19.467 24.3 13.5 24.3Z"
          fill="currentColor"
        />
        <path d="M14.85 6.75H12.15V14.85H14.85V6.75Z" fill="currentColor" />
        <path d="M14.85 17.55H12.15V20.25H14.85V17.55Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Get Insights",
    description:
      "Receive a detailed report with match scores and improvement tips.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5 20H8V10H5V20ZM10.5 20H13.5V4H10.5V20ZM16 20H19V14H16V20Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function HowItWorks() {
  return (
    <section
      className="px-5 md:px-40 max-w-7xl mx-auto text-center"
      id="how-it-works"
    >
      <header className="flex flex-col items-center gap-4 mb-10 md:mb-16">
        <h2 className="text-[30px] md:text-[36px] font-bold leading-10 tracking-[-0.9px] text-primary">
          How it works
        </h2>
        <p className="text-base font-normal leading-6 text-text-2ry">
          Three simple steps to a world-class professional profile.
        </p>
      </header>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 max-w-[960px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {steps.map((step) => (
          <motion.article
            key={step.id}
            className="flex flex-col items-center gap-6"
            variants={stepVariants}
          >
            <div className="w-24 h-24 rounded-full bg-white border-2 border-[rgba(10,10,10,0.23)] flex items-center justify-center shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
              <span className="w-7 h-7 text-primary">{step.icon}</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <h3 className="text-xl font-bold leading-7 text-primary">
                {step.title}
              </h3>
              <p className="text-base font-normal leading-6 text-text-2ry max-w-[260px]">
                {step.description}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
