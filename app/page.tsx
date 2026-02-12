import {
  ArchitectureSection,
  CapabilitySection,
  DashboardSection,
  ContactSection,
  FaqSection,
  Footer,
  Header,
  HeroSection,
  TestimonialSection,
  TrustSection,
  WorkflowSection,
} from "@/components/marketing/sections";

export default function Home() {
  return (
    <div className="site-shell">
      <Header />
      <main id="main-content">
        <HeroSection />
        <TrustSection />
        <DashboardSection />
        <CapabilitySection />
        <WorkflowSection />
        <ArchitectureSection />
        <TestimonialSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
