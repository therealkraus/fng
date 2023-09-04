import Link from "next/link";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="flex flex-col items-center justify-center ml-auto mr-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl p-10">
        <p className="font-semibold text-center dark:text-neutral-400">
          Made with ❤️ by{" "}
          <Link
            href="mailto:nikolailic25@live.ca"
            className="font-bold text-white hover:text-primary transition-all duration-500 ease-in-out hover:border-b hover:border-primary"
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
