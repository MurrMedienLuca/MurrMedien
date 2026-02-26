import { ServiceProps } from "@/types/types";

export const mapJsonService = (json: any): ServiceProps => ({
    id: json.id,
    title: json.title,
    description: json.description
  });
  