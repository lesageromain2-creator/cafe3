import Link from "next/link";
import LsdevFooterCredit from "@/components/LsdevFooterCredit";

export default function Footer() {
  return (
    <footer className="mt-16 border-t-2 border-ink bg-surface">
      <div className="container-page py-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <p className="font-heading text-xl uppercase text-ink">Le Comptoir</p>
          <p className="font-body text-sm text-muted">Café de quartier — Lyon</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 text-sm">
          <div className="flex flex-col gap-1">
            <p className="caption mb-1">Navigation</p>
            <Link href="/carte" className="para-md text-muted hover:text-ink">La carte</Link>
            <Link href="/contact" className="para-md text-muted hover:text-ink">Contact</Link>
          </div>
          <div className="flex flex-col gap-1">
            <p className="caption mb-1">Pratique</p>
            <Link href="/infos-pratiques" className="para-md text-muted hover:text-ink">Infos pratiques</Link>
          </div>
        </div>
      </div>
      <div className="container-page pb-8">
        <LsdevFooterCredit />
      </div>
    </footer>
  );
}
