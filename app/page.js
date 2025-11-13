import Image from "next/image";
import HeroSection from "./compnents/HeroSection";
import ServicesSection from "./compnents/ServicesSection";
import AboutSection from "./compnents/AboutSection";
import ProcessSection from "./compnents/ProcessSection";
import PhilosophySection from "./compnents/PhilosophySection";
import VisualWellnessSection from "./compnents/VisualWellnessSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdf6f0] text-[#2b211c]">
      <div>
        <HeroSection />
        <PhilosophySection />
        <VisualWellnessSection />
        <ServicesSection />
        <AboutSection />
        <ProcessSection />
      </div>
    </main>
  );
}
