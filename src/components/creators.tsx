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
    <li className="flex flex-col rounded-xl border bg-card text-card-foreground transition-transform duration-500 ease-in-out hover:scale-105 hover:outline hover:outline-2 hover:outline-primary">
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <div className="relative h-32 overflow-hidden rounded-t-xl sm:h-48">
          <Image
            src={image}
            alt="Shop Image"
            fill={true}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <article className="px-5 pb-12 pt-5">
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="pt-5 font-semibold">{description}</p>
        </article>
      </Link>
    </li>
  );
}
