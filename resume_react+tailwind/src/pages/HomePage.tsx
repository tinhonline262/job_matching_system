import {
  Header,
  Hero,
  Features,
  HowItWorks,
  FAQ,
  CTA,
  Footer,
} from "@/features/landing";

export default function HomePage() {
  return (
    <div className="bg-app-bg min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col gap-[59px]">
        <Hero />
        <Features />
        <HowItWorks />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
