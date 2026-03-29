export default function HistoryPage() {
  return (
    <section className="p-6 md:p-8 bg-app-bg min-h-[calc(100vh-73px)]">
      <div className="max-w-[1080px] mx-auto bg-white border border-[#e1e4eb] rounded-[24px] p-8">
        <h1 className="text-[32px] leading-[1.15] tracking-[-0.02em] font-semibold text-[#121827]">
          Analysis History
        </h1>
        <p className="mt-3 text-[15px] leading-6 text-[#748094] max-w-[620px]">
          Your previous report versions will appear here for quick review and
          comparison.
        </p>
      </div>
    </section>
  );
}
