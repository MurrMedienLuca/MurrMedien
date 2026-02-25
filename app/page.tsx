import Project from "@/components/projects/Project";
import { getPeople, getProjects } from "@/lib/dataprovider";
import Person from "@/components/people/Person";
import { ProjectProps } from "@/types/types";


export default async function Home() {
  const projects = await getProjects();
  const people = await getPeople();
  console.log(projects)



  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">
          Unsere Projekte
        </h1>

        <p className="text-gray-600 text-lg">
          Eine Auswahl unserer aktuellen Arbeiten.
        </p>
      </section>


      {/* Projektliste */}
      <section className="max-w-5xl mx-auto px-6 pb-16">

        <div className="grid gap-6 sm:grid-cols-2">

          {projects.map((project: ProjectProps) => (
            <Project
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </section>
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">
          Über uns
        </h1>
      </section>

       {/* Projektliste */}
       <section className="max-w-5xl mx-auto px-6 pb-16">

<div className="grid gap-6 sm:grid-cols-2">

  {people.map((person: any) => (
    <Person
      key={person.id}
      person={person}
    />
  ))}

</div>

</section>


    </main>
  );
}