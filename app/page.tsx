import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="bg-background">
      <section className="container-page pt-24 pb-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="heading-3 text-muted">Café de quartier · Lyon</p>
            <h1 className="heading-1">Le Comptoir — café de quartier depuis 1972</h1>
            <p className="para-lg max-w-2xl">
              Un vrai café à l&apos;ancienne : expresso serré, croissants du boulanger, journaux et conversations
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/carte" className="inline-flex items-center gap-2 px-4 py-2 bg-ink text-surface font-heading text-sm uppercase tracking-wider hover:opacity-90">
                La carte
              </Link>
              <Link href="/infos-pratiques" className="inline-flex items-center gap-2 px-4 py-2 border-2 border-ink text-ink font-heading text-sm uppercase tracking-wider bg-surface hover:bg-surface/80">
                Nous trouver
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="flex flex-col items-center gap-3 text-center max-w-3xl mx-auto">
          <p className="heading-3 text-muted">Ambiance</p>
          <h2 className="heading-2">Le Comptoir en images</h2>
        </div>

        <div className="mt-10 grid md:grid-cols-12 gap-6 items-stretch">
          <div className="md:col-span-7 relative aspect-[16/10] rounded-lg overflow-hidden bg-surface border border-divider shadow-card">
            <Image
              src="/images/cafe3/01-raymond.jpg"
              alt="Le Comptoir — intérieur"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
              priority
            />
            <div className="absolute inset-0 bg-ink/10" />
          </div>

          <div className="md:col-span-5 grid grid-rows-2 gap-6">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-surface border border-divider">
              <Image
                src="/images/cafe3/02-katie.jpg"
                alt="Café et comptoir — Le Comptoir"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-surface border border-divider">
              <Image
                src="/images/cafe3/03-laura.jpg"
                alt="Viennoiseries et ambiance — Le Comptoir"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </div>
          </div>

          <div className="md:col-span-12 relative aspect-[16/7] rounded-lg overflow-hidden bg-surface border border-divider">
            <Image
              src="/images/cafe3/04-sebastian.jpg"
              alt="Tables et lecture — Le Comptoir"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section className="container-page py-20 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4 max-w-3xl text-center">
          <p className="heading-3 text-muted">Notre histoire</p>
          <h2 className="heading-2">Le Comptoir, l&apos;âme du quartier depuis 1972</h2>
          <p className="para-md">
            Le Comptoir n&apos;a pas changé d&apos;adresse ni d&apos;état d&apos;esprit depuis plus de cinquante ans. On y vient pour un café serré, un croissant, la presse du jour et la discussion. Pas de wifi ni de formules à la mode : juste un comptoir, des tables en bois et un accueil fidèle. Un café comme on n&apos;en fait plus.
          </p>
        </div>
      </section>

      <section className="container-page py-20 border-t-2 border-divider">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="heading-3 text-muted">Ce que nous proposons</p>
            <h2 className="heading-1">Café, viennoiseries & presse</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 w-full max-w-4xl">
            <div className="flex flex-col gap-4">
              <p className="caption">Café à l&apos;ancienne</p>
              <p className="para-md">Expresso, allongé, noisette, crème</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="caption">Viennoiseries & tartines</p>
              <p className="para-md">Livrées par le boulanger du coin chaque matin</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="caption">Presse & journaux</p>
              <p className="para-md">Journaux en libre accès, ambiance lecture</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="caption">Terrasse</p>
              <p className="para-md">Quelques tables sur le trottoir dès les beaux jours</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-24 flex flex-col items-center gap-6 border-t-2 border-divider">
        <h2 className="heading-2 text-center">Poussez la porte — le comptoir vous attend</h2>
        <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2 bg-ink text-surface font-heading text-sm uppercase tracking-wider hover:opacity-90">
          Nous rendre visite
        </Link>
      </section>
    </div>
  );
}
