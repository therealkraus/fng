import Link from "next/link";
import { ModeToggle } from "@/components/dark-mode-toggle";
import NavItem from "./nav-item";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="w-full">
      <nav className="ml-auto mr-auto flex items-center justify-between p-10 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="flex flex-row items-center justify-center gap-4 transition-colors duration-300 ease-in-out hover:text-primary">
          <Link href="/">
            <Logo />
          </Link>
          <Link className="text-2xl font-semibold" href="/">
            FANTASY NAME CREATOR
          </Link>
        </div>
        <ul className="hidden flex-row items-center justify-center gap-8 lg:flex">
          <NavItem name={"Alchemy Shop"} link={"/creators/alchemy-shop"} />
          <NavItem name={"Blacksmith"} link={"/creators/blacksmith-shop"} />
          <NavItem name={"General Shop"} link={"/creators/general-shop"} />
          <NavItem name={"Magic Shop"} link={"/creators/magic-shop"} />
          <NavItem name={"Stables"} link={"/creators/stables-shop"} />
          <NavItem name={"Tavern"} link={"/creators/tavern-shop"} />
          <li className="rounded-full border border-primary pt-6"></li>
          <li>
            <ModeToggle />
          </li>
        </ul>
        <button className="block h-6 w-6 lg:hidden">
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
  );
}
