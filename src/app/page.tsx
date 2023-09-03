import Header from "../components/header";
import Hero from "../components/hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full">
        <Hero />
        <section className="flex flex-col items-center justify-center ml-auto mr-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl pr-10 pl-10 pt-40 pb-40"></section>
      </main>
    </>
  );
}
