import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[85vh] bg-hero-pattern bg-cover bg-center bg-no-repeat">
      <div className="ml-auto mr-auto flex flex-col items-center justify-center pb-40 pl-10 pr-10 pt-40 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <h1 className="text-xl font-bold text-white md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl">
          Welcome to the Fantasy Name Creator
        </h1>
        <p className="mt-3 text-white md:text-lg lg:text-xl xl:text-3xl">
          Generate names for all your fantasy shop needs!
        </p>
        <Button
          className="mt-8 animate-bounce font-bold text-white lg:text-lg"
          asChild
        >
          <Link href="#creators">Get Started</Link>
        </Button>
      </div>
    </section>
  );
}
