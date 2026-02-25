
import { getProjectsFromWordpress } from "./wordpress";
import { getPeopleFromJson, getProjectsFromJson } from "./json";
import { PersonProps, ProjectProps } from "@/types/types";

export type DataSource = "JSON" | "WORDPRESS";

const DATA_SOURCE: DataSource = "WORDPRESS"; // <- hier ändern

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