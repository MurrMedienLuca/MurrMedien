import { getPeople, getProjects, getServices } from "@/lib/dataprovider";
import Section from "@/components/layout/Section";
import ProjectList from "@/components/projects/ProjectList";
import PeopleList from "@/components/people/PeopleList";
import ServiceList from "@/components/services/ServiceList";


export default async function Home() {
  const projects = await getProjects();
  const people = await getPeople();
  const services = await getServices();



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
    <Section title="Services">
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ServiceList services={services}/>
      </div>
    </Section>


</>

  );
}