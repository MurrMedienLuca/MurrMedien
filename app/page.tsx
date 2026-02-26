import Project from "@/components/projects/Project";
import { getPeople, getProjects } from "@/lib/dataprovider";
import Person from "@/components/people/Person";
import { ProjectProps } from "@/types/types";
import Section from "@/components/layout/Section";
import ProjectList from "@/components/projects/ProjectList";
import PeopleList from "@/components/people/PeopleList";


export default async function Home() {
  const projects = await getProjects();
  const people = await getPeople();


  return (
    <>
    <Section title="Unsere Projekte" description="Eine Auswahl unserer aktuellen Arbeiten.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectList projects={projects}/>
      </div>
    </Section>

    <Section title="Über uns">
      <div className="grid gap-6 sm:grid-cols-2">
        <PeopleList people={people}/>
      </div>
    </Section>


</>

  );
}