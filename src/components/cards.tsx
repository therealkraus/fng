import Creators from "@/components/creators";

export default function Cards() {
  return (
    <section id="creators">
      <div className="flex flex-col items-center justify-center ml-auto mr-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl pr-10 pl-10 pt-10 pb-40">
        <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-6xl font-bold">
          FANTASY SHOP CREATORS
        </h1>
        <div className="w-32 bg-primary h-1 my-12 rounded-full"></div>
        <ul className="grid xl:grid-cols-3 xl:gap-6 2xl:grid-cols-4 2xl:gap-8 md:grid-cols-2 md:gap-6 grid-cols-1 gap-4">
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
