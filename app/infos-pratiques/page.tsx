import Image from "next/image";

export default function InfosPratiquesPage() {
  return (
    <div className="bg-background">
      <section className="container-page py-20 flex flex-col gap-8">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p className="heading-3 text-muted">Infos pratiques</p>
          <h1 className="heading-1">Venir au Comptoir</h1>
        </div>
        <div className="max-w-3xl space-y-4">
          <p className="para-md">Le Comptoir<br />5 rue de la République, Lyon</p>
          <p className="para-md">Horaires : Mar–Dim 7h30–19h</p>
          <p className="para-md">Métro et bus à proximité. Pas de réservation.</p>
        </div>

        <div className="max-w-5xl w-full relative aspect-[16/7] rounded-lg overflow-hidden bg-surface border border-divider shadow-card">
          <Image
            src="/images/cafe3/07-oak-2.jpg"
            alt="La terrasse et l'accès au Comptoir"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-ink/10" />
          <div className="absolute bottom-0 left-0 right-0 bg-background/85 border-t border-divider px-6 py-4">
            <p className="caption">Terrasse & accès</p>
          </div>
        </div>
      </section>
    </div>
  );
}
