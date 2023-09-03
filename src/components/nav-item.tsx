export default function NavItem(props: { name: string; link: string }) {
  const name = props.name;
  const link = props.link;
  return (
    <>
      <li>
        <a
          className="hover:border-b-2 hover:border-primary hover:pb-2 text-lg font-semibold"
          href={link}
        >
          {name}
        </a>
      </li>
    </>
  );
}
