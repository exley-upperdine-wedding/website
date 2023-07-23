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
    <header className="max-w-screen-xl border-b-2 border-b-dusty-rose">
      <nav className="flex items-center">
        <div className="flex items-center mx-auto py-5">
          {routes.map((route, i) => {
            return (
              <Link
                className="mx-4 text-lg font-bold"
                key={i}
                href={route.href}
              >
                <span className="hover:text-dusty-rose">{route.text}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
