"use client"
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
import { PersonProps } from "../types/types";
type PersonProps2 = {
  person: PersonProps;
};



  const Person = ({ person }: PersonProps2) => {
  return (
<Card className="relative mx-auto w-full max-w-sm pt-0 rounded-xl overflow-hidden">
  {/* Overlay */}
  <div className="absolute inset-0 z-30 aspect-[3/4] bg-black/35 rounded-t-xl" />
  
  {/* Bild */}
  <img
    src={person.img}
    alt="Person portrait"
    className="relative z-20 w-full aspect-[3/4] object-cover rounded-t-xl"
  />

  <CardHeader>

    <CardTitle>{person.firstName} {person.lastName}</CardTitle>
    <CardDescription>

        <p className="">
        {person.role}
</p>
<br/>
<p className="">
        {person.email}
</p>
<p className="">
        {person.phoneNumber}
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


