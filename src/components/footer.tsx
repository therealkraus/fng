import Link from "next/link";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="ml-auto mr-auto flex flex-col items-center justify-center p-10 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <p className="text-center font-semibold dark:text-neutral-400">
          Made with ❤️ by{" "}
          <Link
            href="mailto:nikolailic25@live.ca"
            className="font-bold text-white transition-all duration-300 ease-in-out hover:border-b hover:border-primary hover:text-primary"
          >
            @nikolailic
          </Link>
        </p>
        <p className="text-center dark:text-neutral-400">
          &copy;{currentYear} Fantasy Name Creator
        </p>
      </div>
    </footer>
  );
}
