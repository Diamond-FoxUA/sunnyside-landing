import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center w-full">
      <Header />
      <main className="flex flex-col flex-1 items-center justify-center w-full pt-14 bg-blue-bg"></main>
      <Footer />
    </div>
  );
}
