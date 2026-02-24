import { mapWpProject } from "@/app/mappers/projectmapper";
import { ProjectProps } from "../app/types/types"; // Pfad prüfen!


export async function getProjectsFromWordpress(): Promise<ProjectProps[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/projekt`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Fehler beim Laden der Projekte");
  }

  const data = await res.json(); // rohe WP-Daten
  return await Promise.all(data.map((p: any) => mapWpProject(p)));
}

  export async function getPeople() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/person`, { cache: "no-store" });
  
    if (!res.ok) {
      throw new Error("Fehler beim Laden der Personen");
    }
  
    return res.json();
  }