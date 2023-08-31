import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full ml-auto mr-auto pl-4 pr-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
      <header className="flex justify-between border-2 border-red-500 pt-8 pb-8">
        <a className="border-2 border-green-500" href="/">
          Fantastical Names Generator
        </a>
        <nav>
          <ul className="border-2 border-blue-500 flex flex-row gap-8 items-center justify-center">
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
        </nav>
      </header>
      <section className="border-2 border-purple-500">
        <h1>Welcome to Fantastical Name Generator</h1>
        <p>Use this website to generate names for your fantasy places!</p>
        <p>
          This site was born out of a necessity. I run a Dungeons and Dragons
          game and I needed a way to generate names for the places my players
          visit. I hope you find it useful!
        </p>
      </section>
    </main>
  );
}
