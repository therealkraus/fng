import Image from "next/image";
import Link from "next/link";
export default function Creators(props: {
  title: string;
  link: string;
  description: string;
  image: string;
}) {
  const { title, link, description, image } = props;
  return (
    <li className="flex flex-col border bg-card text-card-foreground rounded-xl hover:outline hover:outline-2 hover:outline-primary transition-transform ease-in-out duration-500 hover:scale-105">
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <div className="relative overflow-hidden h-32 sm:h-48 rounded-t-xl">
          <Image
            src={image}
            alt="Shop Image"
            fill={true}
            className="object-cover"
          />
        </div>
        <article className="pt-5 pb-12 px-5">
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="pt-5 font-semibold">{description}</p>
        </article>
      </Link>
    </li>
  );
}
