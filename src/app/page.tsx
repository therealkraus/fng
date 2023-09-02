import Header from "../components/header";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full">
        <section className="bg-hero-pattern bg-cover min-h-[80vh] bg-center bg-no-repeat">
          <div className="flex flex-col items-center justify-center ml-auto mr-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl pr-10 pl-10 pt-40 pb-40">
            <h1 className="text-6xl font-bold text-white">
              Welcome to the Fantastical Name Generator
            </h1>
            <p className="mt-3 text-2xl text-white">
              Generate names for all your fantasy shop needs!
            </p>
            <Button className="mt-8 font-bold animate-bounce">
              Get Started
            </Button>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center ml-auto mr-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl pr-10 pl-10 pt-40 pb-40"></section>
      </main>
    </>
  );
}
