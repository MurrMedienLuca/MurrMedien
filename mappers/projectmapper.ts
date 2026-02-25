import { PersonProps, ProjectProps } from "../types/types";

// Mapping von WordPress
export const mapWpProject = async (wpData: any): Promise<ProjectProps> => ({
  id: wpData.id,
  title: wpData.title.rendered,
  description: wpData.acf.description,
  imageUrl: await getImageUrl(wpData.acf.bild),
  link: wpData.acf.link,
});

export const mapWpPerson= async (wpData: any): Promise<PersonProps> => ({
  id: wpData.id,
  firstName: wpData.acf.firstName,
  lastName: wpData.acf.lastName,
  email: wpData.acf.email,
  phoneNumber: "",
  img: await getImageUrl(wpData.acf.bild),
  role: wpData.acf.role,
});

// Funktion zum Holen der Bild-URL
export async function getImageUrl(id: number): Promise<string> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/media/${id}`);
  if (!res.ok) throw new Error("Fehler beim Laden des Bildes");

  const data = await res.json();
  return data.source_url;
}

export const mapJsonProject = (json: any): ProjectProps => ({
  id: json.uuid,
  title: json.fullTitle,
  description: json.desc,
  imageUrl: json.img,
  link: json.link
});

export const mapJsonPerson = (json: any): PersonProps => ({
  id: json.uuid,
  firstName: json.firstName,
  lastName: json.lastName,
  img: json.img,
  email: json.email,
  phoneNumber: json.phoneNumber,
  role: json.role
});
