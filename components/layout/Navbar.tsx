"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/programme", label: "Programme" },
  { href: "/evenements", label: "Événements" },
  { href: "/carte", label: "La carte" },
  { href: "/presse", label: "Presse" },
  { href: "/infos-pratiques", label: "Infos pratiques" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-surface border-b-2 border-ink">
      <div className="container-page flex items-center justify-between h-20">
        <Link href="/" className="font-heading text-2xl tracking-tight text-ink uppercase">Le Comptoir</Link>
        <button type="button" className="md:hidden w-8 h-6 flex flex-col justify-between" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          <span className="h-[2px] w-full bg-ink" /><span className="h-[2px] w-full bg-ink" /><span className="h-[2px] w-full bg-ink" />
        </button>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`font-heading text-sm uppercase tracking-wider ${pathname === link.href ? "text-ink" : "text-muted"} hover:text-ink transition-colors`}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      {open && (
        <nav className="md:hidden border-t-2 border-ink bg-surface">
          <div className="container-page flex flex-col py-4 gap-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={`font-heading text-sm uppercase ${pathname === link.href ? "text-ink" : "text-muted"}`}>
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
