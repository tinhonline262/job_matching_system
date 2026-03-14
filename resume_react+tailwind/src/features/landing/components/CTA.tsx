import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-white px-5 py-24 md:px-24 flex flex-col items-center justify-center gap-6 text-center">
      <span className="text-sm font-normal text-text-soft uppercase tracking-[0.28px] leading-[34px]">
        GET ANALYST
      </span>
      <h2 className="text-2xl md:text-[30px] font-semibold leading-[30px] tracking-[-1px] text-primary">
        Start analyzing resumes with AI today
      </h2>
      <Link
        to="/login"
        className="inline-flex items-center justify-center gap-2 min-h-10 px-6 py-[10px] bg-dark-bg text-primary-fg text-sm font-medium rounded-full hover:opacity-90 transition-opacity leading-5"
      >
        Analyzing
      </Link>
    </section>
  );
}
