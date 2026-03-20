"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="bg-background">
      <section className="container-page py-20 flex flex-col gap-8">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p className="heading-3 text-muted">Contact</p>
          <h1 className="heading-1">Poussez la porte</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
          <div className="space-y-3">
            <p className="para-md">Le Comptoir<br />5 rue de la République, Lyon</p>
            <p className="para-md">Mar–Dim 7h30–19h</p>
            <p className="para-md"><a href="mailto:lecafe@lecomptoir-lyon.fr" className="underline">lecafe@lecomptoir-lyon.fr</a></p>
            <p className="para-md">04 78 00 00 77</p>
          </div>
          <div>
            {sent ? (
              <p className="para-md">Merci. À bientôt au comptoir.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="caption block mb-1" htmlFor="name">Nom</label>
                  <input id="name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded border-2 border-divider bg-surface px-3 py-2" />
                </div>
                <div>
                  <label className="caption block mb-1" htmlFor="email">Email</label>
                  <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded border-2 border-divider bg-surface px-3 py-2" />
                </div>
                <div>
                  <label className="caption block mb-1" htmlFor="message">Message</label>
                  <textarea id="message" required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded border-2 border-divider bg-surface px-3 py-2" />
                </div>
                <button type="submit" className="inline-flex px-4 py-2 bg-ink text-surface font-heading text-sm uppercase tracking-wider hover:opacity-90">Envoyer</button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-8 relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-lg overflow-hidden bg-surface border border-divider shadow-card">
          <Image
            src="/images/cafe3/08-oak-3.jpg"
            alt="Façade et accueil — Le Comptoir"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 840px"
            priority
          />
          <div className="absolute inset-0 bg-ink/10" />
          <div className="absolute bottom-0 left-0 right-0 bg-background/85 border-t border-divider px-6 py-4">
            <p className="caption">Poussez la porte</p>
          </div>
        </div>
      </section>
    </div>
  );
}
