import React from "react";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Link from "next/link";
type PersonProps = {
  person: any;
};

export async function getImageUrl(id: number) {

    const res = await fetch(
      `http://murr-medien-gbr.local/wp-json/wp/v2/media/${id}`
    );
  
    const data = await res.json();
  
    return data.source_url;
  }


  const Person = async ({ person }: PersonProps) => {
    const imageUrl = await getImageUrl(person.acf.bild);
  return (
<Card className="relative mx-auto w-full max-w-sm pt-0 rounded-xl overflow-hidden">
  {/* Overlay */}
  <div className="absolute inset-0 z-30 aspect-[3/4] bg-black/35 rounded-t-xl" />
  
  {/* Bild */}
  <img
    src={imageUrl}
    alt="Person portrait"
    className="relative z-20 w-full aspect-[3/4] object-cover rounded-t-xl"
  />

  <CardHeader>

    <CardTitle>{person.acf.firstname} {person.acf.lastname}</CardTitle>
    <CardDescription>

        <p className="">
        {person.acf.role}
</p>
<br/>
<p className="">
        {person.acf.email}
</p>
<p className="">
        {person.acf.phoneNumber}
</p>
    </CardDescription>
  </CardHeader>

  <CardFooter>   <Button className="w-full">
      View Project
    </Button>
  </CardFooter>
</Card>
  );
};

export default Person;


