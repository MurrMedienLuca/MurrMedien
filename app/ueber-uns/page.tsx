import Section from "@/components/layout/Section"
import PeopleList from "@/components/people/PeopleList"
import { getPeople } from "@/lib/dataprovider"
import React from "react"

export default async function AboutUs() {
  const people = await getPeople()
  return (
    <Section title="Über uns">
      <div className="grid gap-6 sm:grid-cols-2">
        <PeopleList people={people} />
      </div>
    </Section>
  )
}
