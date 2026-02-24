import { PersonProps, ProjectProps } from "@/app/types/types";
import { getProjectsFromWordpress } from "./wordpress";
import { getPeopleFromJson, getProjectsFromJson } from "./json";

export type DataSource = "JSON" | "WORDPRESS";

const DATA_SOURCE: DataSource = "JSON"; // <- hier ändern

export async function getProjects(): Promise<ProjectProps[]> {
  if (DATA_SOURCE === "WORDPRESS") {
    return await getProjectsFromWordpress();
  }
  return getProjectsFromJson();
}

export async function getPeople(): Promise<PersonProps[]> {
  if (DATA_SOURCE === "WORDPRESS") {
    return await getPeopleFromJson();
  }
  return getPeopleFromJson();
}