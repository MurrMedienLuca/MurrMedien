import Section from "@/components/layout/Section"
import ProjectList from "@/components/projects/ProjectList"
import { getProjects } from "@/lib/dataprovider"
import React from "react"

export default async function Projekte() {
  const projects = await getProjects()

  return (
    <Section title="Unsere Projekte" description="Eine Auswahl unserer aktuellen Arbeiten.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectList projects={projects} />
      </div>
    </Section>
  )
}
