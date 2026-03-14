import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "Match Scoring",
    description:
      "Get a real-time compatibility score for any job description by matching your core competencies.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Skill Gap Detection",
    description:
      "Identify exactly which technical or soft skills you need to add to your toolkit to stay competitive.",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9 0L11.47 5.56L17.5 6.47L13.25 10.62L14.18 16.63L9 13.88L3.82 16.63L4.75 10.62L0.5 6.47L6.53 5.56L9 0Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "AI Feedback",
    description:
      "Receive actionable, line-by-line suggestions to improve your resume's impact and readability.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H4V20L8 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H7.17L6 15.17V14H2V2H18V14Z"
          fill="currentColor"
        />
        <path d="M5 7H15V9H5V7Z" fill="currentColor" />
        <path d="M5 4H15V6H5V4Z" fill="currentColor" />
        <path d="M5 10H11V12H5V10Z" fill="currentColor" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Features() {
  return (
    <section
      className="bg-white border-t border-b border-[#e2e8f0] py-[97px]"
      id="features"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-40 flex flex-col gap-16">
        <header className="flex flex-col gap-4 max-w-[672px]">
          <h2 className="text-[30px] md:text-[36px] font-bold leading-10 tracking-[-0.9px] text-black">
            Smarter Career Insights
          </h2>
          <p className="text-lg font-normal leading-7 text-text-2ry">
            Our advanced AI helps you understand how you stack up against your
            dream jobs with deep technical analysis.
          </p>
        </header>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => (
            <motion.article
              key={feature.id}
              className="bg-white border border-[rgba(0,0,0,0.2)] rounded-2xl p-[33px] flex flex-col gap-4"
              variants={cardVariants}
            >
              <div className="w-12 h-12 bg-[rgba(0,0,0,0.1)] rounded-[24px] flex items-center justify-center">
                <span className="w-5 h-5 text-primary">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold leading-7 text-black">
                {feature.title}
              </h3>
              <p className="text-base font-normal leading-6 text-text-2ry">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
