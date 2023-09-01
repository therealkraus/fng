import Image from "next/image";
import { ModeToggle } from "@/components/dark-mode-toggle";

export default function Home() {
  return (
    <>
      <header className="w-full">
        <nav className="flex justify-between p-8 ml-auto mr-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl items-center">
          <div className="flex flex-row gap-4 items-center justify-center">
            <a href="/">
              <Image src="/logo.png" width={50} height={50} alt="Site Logo" />
            </a>
            <a className="text-xl font-semibold" href="/">
              FANTASTICAL NAME GENERATOR
            </a>
          </div>
          <ul className="lg:flex flex-row gap-8 items-center justify-center hidden">
            <li>
              <a
                className="hover:border-b-2 hover:border-primary hover:pb-2"
                href="/"
              >
                Alchemy Shop
              </a>
            </li>
            <li>
              <a
                className="hover:border-b-2 hover:border-primary hover:pb-2"
                href="/"
              >
                Blacksmith
              </a>
            </li>
            <li>
              <a
                className="hover:border-b-2 hover:border-primary hover:pb-2"
                href="/"
              >
                General Shop
              </a>
            </li>
            <li>
              <a
                className="hover:border-b-2 hover:border-primary hover:pb-2"
                href="/"
              >
                Magic Shop
              </a>
            </li>
            <li>
              <a
                className="hover:border-b-2 hover:border-primary hover:pb-2"
                href="/"
              >
                Stables
              </a>
            </li>
            <li>
              <a
                className="hover:border-b-2 hover:border-primary hover:pb-2"
                href="/"
              >
                Tavern
              </a>
            </li>
            <li className="border border-primary pt-6"></li>
            <li>
              <ModeToggle />
            </li>
          </ul>
          <button className="w-6 h-6 block lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </nav>
      </header>
    </>
  );
}
