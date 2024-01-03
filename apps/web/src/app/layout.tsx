import { ReactNode } from "react";
import Link from "next/link";

import { Header } from "ui";
import "./styles/globals.css";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="bg-slate-700">
        <Header>
          <Link href="/">
            <img className="h-12" src="/logo.svg" />
          </Link>
          <ul className="flex ml-4 w-full justify-center text-xl text-slate-700 gap-4">
            <li>
              <Link href="/about">Work</Link>
            </li>
            <li>
              <Link href="/about">Products</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </Header>
        {children}
      </body>
    </html>
  );
}
