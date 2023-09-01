import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="border-2 border-black w-full">
        <nav className="flex justify-between border-2 border-red-500 p-8 ml-auto mr-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
          <a className="border-2 border-green-500" href="/">
            Fantastical Names Generator
          </a>
          <ul className="border-2 border-blue-500 lg:flex flex-row gap-8 items-center justify-center hidden">
            <li>
              <a href="/">Alchemy Shop</a>
            </li>
            <li>
              <a href="/">Blacksmith</a>
            </li>
            <li>
              <a href="/">General Shop</a>
            </li>
            <li>
              <a href="/">Magic Shop</a>
            </li>
            <li>
              <a href="/">Stables</a>
            </li>
            <li>
              <a href="/">Tavern</a>
            </li>
          </ul>
          <button className="text-black w-6 h-6 block lg:hidden">
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
