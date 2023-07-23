import Link from "next/link";

type RouteMapping = {
  text: string;
  href: string;
};

export default function Navbar() {
  const title = "Carlton and Libby's Wedding";

  const routes: RouteMapping[] = [
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
    <header className="w-100 border-b-2 border-b-dusty-rose">
      <div className="flex items-center pt-5">
        <h1 className="text-3xl font-bold flex items-center mx-auto">
          {title}
        </h1>
      </div>
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
