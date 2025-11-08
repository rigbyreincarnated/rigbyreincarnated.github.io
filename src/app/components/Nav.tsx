"use client";

import Link from "next/link";

type NavProps = {
  context: "home" | "contact";
  name: string;
};

export default function Nav({ context, name }: NavProps) {
  return (
    <nav>
      {context === "home" ? (
        <Link href="/contact">Contact {name}</Link>
      ) : (
        <Link href="/">About {name}</Link>
      )}
    </nav>
  );
}