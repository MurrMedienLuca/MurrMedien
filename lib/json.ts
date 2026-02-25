import projectsJson from "../data/projects.json";
import peopleJson from "../data/people.json";
import { PersonProps, ProjectProps } from "@/types/types";
import { mapJsonPerson, mapJsonProject } from "@/mappers/projectmapper";

export async function getProjectsFromJson(): Promise<ProjectProps[]> {
  // bei statischem JSON reicht das direkte Mapping
  return projectsJson.map(mapJsonProject);
}

export async function getPeopleFromJson(): Promise<PersonProps[]> {
  // bei statischem JSON reicht das direkte Mapping
  return peopleJson.map(mapJsonPerson);
}