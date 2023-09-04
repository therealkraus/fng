import Creators from "@/components/creators";

export default function Cards() {
  return (
    <section id="creators">
      <div className="ml-auto mr-auto flex flex-col items-center justify-center pb-40 pl-10 pr-10 pt-10 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <h1 className="text-3xl font-bold md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-6xl">
          FANTASY SHOP CREATORS
        </h1>
        <div className="my-12 h-1 w-32 rounded-full bg-primary"></div>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 xl:gap-6 2xl:grid-cols-4 2xl:gap-8">
          <Creators
            title={"ALCHEMY SHOP"}
            link={"/creators/alchemy-shop"}
            description={
              "Generate Alchemy shop names for all your fantasy needs!"
            }
            image={"/alchemy-shop.jpg"}
          />
          <Creators
            title={"BLACKSMITH"}
            link={"/creators/blacksmith-shop"}
            description={
              "Generates names for all your fantasy blacksmith needs!"
            }
            image={"/blacksmith-shop.jpg"}
          />
          <Creators
            title={"GENERAL SHOP"}
            link={"/creators/general-shop"}
            description={
              "Generates names for all your fantasy general shop needs!"
            }
            image={"/general-shop.jpg"}
          />
          <Creators
            title={"MAGIC SHOP"}
            link={"/creators/magic-shop"}
            description={
              "Generates names for all your fantasy magic shop needs!"
            }
            image={"/magic-shop.webp"}
          />
          <Creators
            title={"STABLES"}
            link={"/creators/stables-shop"}
            description={"Generates names for all your fantasy stables needs!"}
            image={"/stables-shop.jpg"}
          />
          <Creators
            title={"TAVERN"}
            link={"/creators/tavern-shop"}
            description={"Generates names for all your fantasy tavern needs!"}
            image={"/tavern-shop.webp"}
          />
        </ul>
      </div>
    </section>
  );
}
