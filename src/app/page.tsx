import Header from "../components/header";
import Hero from "../components/hero";
import Cards from "@/components/cards";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full">
        <Hero />
        <Cards />
      </main>
    </>
  );
}
