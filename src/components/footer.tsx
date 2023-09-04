export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="flex flex-col items-center justify-center ml-auto mr-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl p-10">
        <p className="font-semibold text-center text-neutral-400">
          Made with ❤️ by{" "}
          <a
            href="mailto:nikolailic25@live.ca"
            className="font-bold text-primary"
          >
            @nikolailic
          </a>
        </p>
        <p className="text-center text-neutral-400">
          &copy;{currentYear} Fantasy Name Creator
        </p>
      </div>
    </footer>
  );
}
