/*
|-----------------------------------------
| setting up Nav for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TopWorkeer, November, 2023
|-----------------------------------------
*/

"use-client";

import Link from "next/link";
import { Home, Book } from "lucide-react";

import Container from "./container";

const navData = [
  { id: 1, title: "Home", url: "/", icon: <Home /> },
  { id: 1, title: "About", url: "/about", icon: <Book /> },
  { id: 1, title: "Service", url: "/service", icon: <Home /> },
  { id: 1, title: "Portfolio", url: "/portfolio", icon: <Home /> },
  { id: 1, title: "Blog", url: "/blog", icon: <Home /> },
  { id: 1, title: "Others", url: "/others", icon: <Home /> },
];

const Nav = () => {
  return (
    <Container>
      <nav className="w-full flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex gap-1 items-center justify-start text-2xl"
        >
          <span className="text-orange-500">TOP</span> Workeer
        </Link>
        <div className="text-xl flex items-end gap-4">
          {navData.map((curr) => (
            <Link key={curr.id} href={curr.url}>
              {curr.title}
            </Link>
          ))}
          <Link href="/">Q</Link>
          <Link href="/"> = </Link>
        </div>
      </nav>
    </Container>
  );
};
export default Nav;
