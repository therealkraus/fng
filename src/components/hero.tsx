import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-hero-pattern bg-cover min-h-[85vh] bg-center bg-no-repeat">
      <div className="flex flex-col items-center justify-center ml-auto mr-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl pr-10 pl-10 pt-40 pb-40">
        <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-bold text-white">
          Welcome to the Fantasy Name Creator
        </h1>
        <p className="md:text-lg lg:text-xl xl:text-3xl mt-3 text-white">
          Generate names for all your fantasy shop needs!
        </p>
        <Button
          className="text-white lg:text-lg mt-8 font-bold animate-bounce"
          asChild
        >
          <Link href="#creators">Get Started</Link>
        </Button>
      </div>
    </section>
  );
}
