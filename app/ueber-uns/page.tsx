import { getPeople, getServices } from "@/lib/dataprovider"
import PeopleList from "@/components/people/PeopleList"
import ServiceList from "@/components/services/ServiceList"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Über uns – Murr Medien",
}

export default async function AboutUs() {
  const people = await getPeople()
  const services = await getServices()

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      {/* Intro */}
      <section className="space-y-6">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Über uns</p>
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            Murr Medien entstand 2025 – nicht aus einem klassischen Businessplan, sondern aus
            unserer gemeinsamen Motivation heraus, kreative Projekte für Unternehmen umzusetzen, auf
            die wir wirklich Lust haben. Aus der Überzeugung, dass Firmen in der Region einen
            Medienpartner verdienen, der zuhört, mitdenkt und ehrlich berät. Wir liefern nicht
            einfach das, was bestellt wird – wir hinterfragen, gestalten und entwickeln Lösungen,
            hinter denen wir selbst stehen.
          </p>
          <p>
            Was uns antreibt, ist die Überzeugung, dass ein konsistenter Markenauftritt keine Frage
            der Größe ist, sondern der Haltung. Wer nach außen klar und ehrlich kommuniziert,
            schafft Vertrauen – und Vertrauen ist das Fundament jeder guten Zusammenarbeit.
          </p>
        </div>
      </section>

      <Separator />

      {/* Team */}
      <section className="space-y-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Das Team</p>
        <div className="grid gap-8 sm:grid-cols-2 max-w-lg">
          <PeopleList people={people} />
        </div>
      </section>

      <Separator />

      {/* Was wir machen */}
      <section className="space-y-8">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Was wir machen</p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Wir begleiten Projekte von der ersten Skizze bis zur fertigen Umsetzung. Unser Angebot
            halten wir bewusst offen, damit wir auf das eingehen können, was ein Projekt wirklich
            braucht – und nicht nur das, was in eine Kategorie passt.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceList services={services} />
        </div>
      </section>

      <Separator />

      {/* CTA */}
      <section className="max-w-xl space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Klingt das nach eurem Projekt?</h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          Schreibt uns oder ruft direkt an – wir hören zu und schauen gemeinsam, was möglich ist.
        </p>
        <Button asChild>
          <Link href="/kontakt">Jetzt melden</Link>
        </Button>
      </section>
    </main>
  )
}
