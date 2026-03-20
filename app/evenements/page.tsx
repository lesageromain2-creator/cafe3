export default function EvenementsPage() {
  return (
    <div className="bg-background">
      <section className="container-page py-20 flex flex-col gap-8">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p className="heading-3 text-muted">Événements</p>
          <h1 className="heading-1">Un café, pas une salle</h1>
        </div>
        <div className="max-w-3xl space-y-6">
          <p className="para-md">
            Le Comptoir reste un café de quartier : pas de soirées organisées ni de réservations de groupe. On y vient pour le calme, le café et la lecture du journal.
          </p>
        </div>
      </section>
    </div>
  );
}
