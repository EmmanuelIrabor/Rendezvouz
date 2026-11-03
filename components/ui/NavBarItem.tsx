


import Link from "next/link";

type NavbarItemProps = {
  link: string;
  title: string;
  active?: boolean;
};

export default function NavbarItem({
  link,
  title,
  active = false,
}: NavbarItemProps) {
  return (
    <Link className={`navbar-item${active ? " active" : ""}`} href={link}>
      {title}
    </Link>
  );
}