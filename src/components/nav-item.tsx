import Link from "next/link";
export default function NavItem(props: { name: string; link: string }) {
  const name = props.name;
  const link = props.link;
  return (
    <>
      <li>
        <Link
          className="after:m-auto after:block after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-500 hover:after:w-full text-lg font-semibold"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </Link>
      </li>
    </>
  );
}
