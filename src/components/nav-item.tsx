export default function NavItem(props: { name: string; link: string }) {
  const name = props.name;
  const link = props.link;
  return (
    <>
      <li>
        <a
          className="after:m-auto after:block after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-500 hover:after:w-full after:mt-1 text-lg font-semibold"
          href={link}
        >
          {name}
        </a>
      </li>
    </>
  );
}
