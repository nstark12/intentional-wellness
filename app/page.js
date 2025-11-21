import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ProcessSection from "./components/ProcessSection";
import PhilosophySection from "./components/PhilosophySection";
import VisualWellnessSection from "./components/VisualWellnessSection";
import FullscriptStrip from "./components/FullscriptStrip";
import TestimonialSection from "./components/TestimonialSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdf6f0] text-[#2b211c] mx-auto max-w-7xl px-4 sm:px-12 pt-0 pb-8">
      <div>
        <HeroSection />
        <PhilosophySection />
        <VisualWellnessSection />
        <ServicesSection />
        <AboutSection />
        <ProcessSection />
        <TestimonialSection />
        <FullscriptStrip />
      </div>
    </main>
  );
}
