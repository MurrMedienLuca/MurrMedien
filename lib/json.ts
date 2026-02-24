import { mapJsonPerson, mapJsonProject } from "@/app/mappers/projectmapper";
import projectsJson from "../app/data/projects.json";
import peopleJson from "../app/data/people.json";
import { PersonProps, ProjectProps } from "../app/types/types"; // Pfad prüfen!

export async function getProjectsFromJson(): Promise<ProjectProps[]> {
  // bei statischem JSON reicht das direkte Mapping
  return projectsJson.map(mapJsonProject);
}

export async function getPeopleFromJson(): Promise<PersonProps[]> {
  // bei statischem JSON reicht das direkte Mapping
  return peopleJson.map(mapJsonPerson);
}