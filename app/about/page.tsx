import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="container-page py-20 flex flex-col gap-8">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p className="heading-3 text-muted">À propos</p>
          <h1 className="heading-1">Le Comptoir, l&apos;âme du quartier depuis 1972</h1>
        </div>
        <div className="max-w-3xl space-y-4">
          <p className="para-md">
            Le Comptoir n&apos;a pas changé d&apos;adresse ni d&apos;état d&apos;esprit depuis plus de cinquante ans. On y vient pour un café serré, un croissant, la presse du jour et la discussion. Pas de wifi ni de formules à la mode : juste un comptoir, des tables en bois et un accueil fidèle. Un café comme on n&apos;en fait plus.
          </p>
        </div>

        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-6">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-surface border border-divider shadow-card">
            <Image
              src="/images/cafe3/05-oak-1.jpg"
              alt="Le Comptoir — café et savoir-faire"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
            <div className="absolute inset-0 bg-ink/10" />
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-surface border border-divider shadow-card">
            <Image
              src="/images/cafe3/06-amr.jpg"
              alt="Viennoiseries — Le Comptoir"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
