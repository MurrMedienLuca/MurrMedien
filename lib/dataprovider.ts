import { ProjectProps } from "@/app/types/types";
import { getProjectsFromWordpress } from "./wordpress";
import { getProjectsFromJson } from "./json";

export type DataSource = "JSON" | "WORDPRESS";

const DATA_SOURCE: DataSource = "JSON"; // <- hier ändern

export async function getProjects(): Promise<ProjectProps[]> {
  if (DATA_SOURCE === "WORDPRESS") {
    return await getProjectsFromWordpress();
  }
  return getProjectsFromJson();
}