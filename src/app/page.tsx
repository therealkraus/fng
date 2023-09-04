import Header from "../components/header";
import Hero from "../components/hero";
import Cards from "@/components/cards";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";

export default function Home() {
  return (
    <div className="divide-y divide-ring">
      <Header />
      <main className="w-full divide-y divide-ring">
        <Hero />
        <Cards />
        <Footer />
        <ScrollToTop />
      </main>
    </div>
  );
}
