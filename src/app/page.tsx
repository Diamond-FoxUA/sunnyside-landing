import Header from "@/widgets/Header";
import Hero from "@/widgets/Hero";
import TransformSection from "@/widgets/TransformSection";
import StandOutSection from "@/widgets/StandOutSection";
import PhotographySection from "@/widgets/PhotographySection";
import TestimonialsSection from "@/widgets/TestimonialsSection";
import Footer from "@/widgets/Footer";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center w-full">
      <Header />
      <main className="flex flex-col flex-1 items-center justify-center w-full">
        <Hero />
        <TransformSection />
        <StandOutSection />
        <PhotographySection />
        <TestimonialsSection />
      </main>
      <Footer />

      <Toaster richColors position="top-right" />
    </div>
  );
}
