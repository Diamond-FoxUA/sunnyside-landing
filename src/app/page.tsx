import Header from "@/widgets/Header";
import Hero from "@/widgets/Hero";
import Footer from "@/widgets/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center w-full">
      <Header />
      <main className="flex flex-col flex-1 items-center justify-center w-full bg-blue-bg">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
