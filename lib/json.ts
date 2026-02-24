import { mapJsonProject } from "@/app/mappers/projectmapper";
import projectsJson from "../app/data/projects.json";
import { ProjectProps } from "../app/types/types"; // Pfad prüfen!

export async function getProjectsFromJson(): Promise<ProjectProps[]> {
  // bei statischem JSON reicht das direkte Mapping
  return projectsJson.map(mapJsonProject);
}