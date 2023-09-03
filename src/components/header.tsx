import Image from "next/image";
import { ModeToggle } from "@/components/dark-mode-toggle";
import NavItem from "./nav-item";

export default function Header() {
  return (
    <header className="w-full">
      <nav className="flex justify-between p-10 ml-auto mr-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl items-center">
        <div className="flex flex-row gap-4 items-center justify-center">
          <a href="/">
            <Image src="/logo.png" width="50" height="50" alt="Site Logo" />
          </a>
          <a className="text-2xl font-semibold hover:text-primary" href="/">
            FANTASY NAME CREATOR
          </a>
        </div>
        <ul className="lg:flex flex-row gap-8 items-center justify-center hidden">
          <NavItem name={"Alchemy Shop"} link={"/"} />
          <NavItem name={"Blacksmith"} link={"/"} />
          <NavItem name={"General Shop"} link={"/"} />
          <NavItem name={"Magic Shop"} link={"/"} />
          <NavItem name={"Stables"} link={"/"} />
          <NavItem name={"Tavern"} link={"/"} />
          <li className="border border-primary pt-6 rounded-full"></li>
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
  );
}
