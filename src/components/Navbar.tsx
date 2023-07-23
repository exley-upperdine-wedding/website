import Link from "next/link";

type RouteMapping = {
  text: string;
  href: string;
};

export default function Navbar() {
  const routes = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "FAQs",
      href: "/faq",
    },
  ];
  return (
    <header>
      <nav>
        {routes.map((route, i) => {
          return (
            <Link key={i} href={route.href}>
              {route.text}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
