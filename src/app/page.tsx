import Header from "@/widgets/Header";
import Hero from "@/widgets/Hero";
import TransformSection from "@/widgets/TransformSection";
import Footer from "@/widgets/Footer";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center w-full">
      <Header />
      <main className="flex flex-col flex-1 items-center justify-center w-full">
        <Hero />
        <TransformSection />
      </main>
      <Footer />

      <Toaster richColors position="top-right" />
    </div>
  );
}
