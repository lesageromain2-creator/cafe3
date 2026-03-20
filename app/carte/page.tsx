/* eslint-disable react/no-array-index-key */
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type MenuItem = {
  name: string;
  description?: string;
};

type MenuCategory = {
  id: string;
  label: string;
  icon: string;
  items: MenuItem[];
  image: string;
};

const categories: MenuCategory[] = [
  {
    id: "cafes",
    label: "Cafés à l’ancienne",
    icon: "☕",
    image: "/images/cafe3/01-raymond.jpg",
    items: [
      { name: "Expresso", description: "Expresso serré." },
      { name: "Allongé", description: "Allongé, doux et équilibré." },
      { name: "Noisette", description: "Touche noisette au caractère doux." },
      { name: "Crème", description: "Crème onctueuse pour bien démarrer." },
    ],
  },
  {
    id: "viennoiseries",
    label: "Viennoiseries & tartines",
    icon: "🥐",
    image: "/images/cafe3/03-laura.jpg",
    items: [
      { name: "Croissants", description: "Du boulanger, chaque matin." },
      { name: "Pains au chocolat", description: "Feuilletés et généreux." },
      { name: "Tartines beurre & confiture", description: "Classiques du comptoir." },
    ],
  },
  {
    id: "presse",
    label: "Presse & journaux",
    icon: "📰",
    image: "/images/cafe3/04-sebastian.jpg",
    items: [
      { name: "Journaux en libre accès", description: "Prenez votre café, feuilletez la presse du jour." },
      { name: "Ambiance lecture", description: "Un lieu calme pour discuter ou simplement lire." },
    ],
  },
  {
    id: "terrasse",
    label: "Terrasse",
    icon: "🌤️",
    image: "/images/cafe3/07-oak-2.jpg",
    items: [{ name: "Tables sur le trottoir", description: "Quelques places dehors dès les beaux jours." }],
  },
];

export default function CartePage() {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id ?? "cafes");
  const [showDishes, setShowDishes] = useState(true);

  const activeCategory = useMemo(
    () => categories.find((c) => c.id === activeCategoryId) ?? categories[0],
    [activeCategoryId],
  );

  return (
    <div className="bg-background">
      <section className="container-page pt-24 pb-10">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 max-w-3xl">
            <p className="heading-3 text-muted">La carte</p>
            <h1 className="heading-1">Café, viennoiseries & presse</h1>
            <p className="para-md max-w-2xl">
              Un vrai café à l&apos;ancienne : expresso serré, croissants du boulanger, journaux et conversations.
            </p>
          </div>

          <div className="relative w-full max-w-4xl h-[240px] rounded-lg overflow-hidden bg-surface border border-divider shadow-card">
            <Image
              src={activeCategory.image}
              alt="Visuel — Le Comptoir"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-ink/10" />
          </div>
        </div>
      </section>

      <section className="container-page py-10">
        <div className="flex flex-col gap-8">
          {/* Catégories (inspiré de l&apos;UI Kafé Stockholm) */}
          <div className="flex flex-col gap-4">
            <p className="caption">Choisir une catégorie</p>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => {
                const isActive = cat.id === activeCategoryId;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategoryId(cat.id)}
                    className={[
                      "inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-colors font-heading text-sm uppercase tracking-wider",
                      isActive ? "bg-ink text-surface border-ink" : "bg-surface text-ink border-ink/40 hover:bg-surface/80",
                    ].join(" ")}
                    aria-pressed={isActive}
                  >
                    <span aria-hidden>{cat.icon}</span>
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Affichage */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <button
              type="button"
              onClick={() => setShowDishes((v) => !v)}
              className="inline-flex items-center justify-center px-5 py-3 bg-ink text-surface font-heading text-sm uppercase tracking-wider rounded hover:opacity-90"
            >
              {showDishes ? "Masquer les plats" : "Afficher les plats"}
            </button>

            <div className="text-muted text-sm">
              {activeCategory.items.length} {activeCategory.items.length > 1 ? "propositions" : "proposition"} •{" "}
              {activeCategory.label}
            </div>
          </div>

          {/* Liste */}
          {showDishes ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCategory.items.map((item) => (
                <article
                  key={item.name}
                  className="rounded-lg overflow-hidden bg-surface border border-divider shadow-card hover:shadow-card transition-shadow"
                >
                  <div className="relative h-[140px] bg-surface">
                    <Image
                      src={activeCategory.image}
                      alt={`Visuel — ${item.name}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                    <div className="absolute inset-0 bg-ink/10" />
                  </div>
                  <div className="p-5 flex flex-col gap-2">
                    <h2 className="font-heading text-ink text-[18px] md:text-[20px] leading-[1.2]">{item.name}</h2>
                    {item.description && <p className="para-md !text-ink/90 !text-[16px]">{item.description}</p>}
                  </div>
                </article>
              ))}
            </div>
          ) : null}

          {/* CTA Click & Collect */}
          <div className="mt-10 pt-10 border-t-2 border-divider">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col gap-4">
                <p className="heading-3 text-muted">Envie de commander ?</p>
                <h3 className="heading-2">Click & Collect</h3>
                <p className="para-md max-w-xl">
                  Commandez et récupérez au comptoir. Simple, rapide, à la bonne heure.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-ink text-surface font-heading text-sm uppercase tracking-wider rounded hover:opacity-90"
                  >
                    Commander
                  </Link>
                  <Link
                    href="/infos-pratiques"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-ink text-ink font-heading text-sm uppercase tracking-wider bg-surface hover:bg-surface/80 rounded"
                  >
                    Horaires
                  </Link>
                </div>
              </div>

              <div className="relative w-full h-[260px] rounded-lg overflow-hidden bg-surface border border-divider shadow-card">
                <Image src="/images/cafe3/02-katie.jpg" alt="Click & Collect — Le Comptoir" fill className="object-cover" sizes="100vw" />
                <div className="absolute inset-0 bg-ink/10" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
