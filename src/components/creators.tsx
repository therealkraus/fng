import Image from "next/image";
export default function Creators(props: {
  title: string;
  link: string;
  description: string;
}) {
  const { title, link, description } = props;
  return (
    <li className="flex flex-col border bg-card text-card-foreground rounded-xl hover:outline hover:outline-2 hover:outline-primary transition-transform ease-in-out duration-500 hover:scale-105">
      <a href="/alchemy-shop">
        <div className="relative overflow-hidden h-32 sm:h-48 rounded-t-xl">
          <Image
            src={link}
            alt="Shop Image"
            fill={true}
            className="object-cover"
          />
        </div>
        <article className="pt-5 pb-12 px-5">
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="pt-5 font-semibold">{description}</p>
        </article>
      </a>
    </li>
  );
}
