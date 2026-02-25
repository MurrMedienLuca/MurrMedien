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
import { ProjectProps } from "@/types/types";
import Link from "next/link";
type ProjectProps2 = {
  project: ProjectProps;
};


  const Project = ({ project }: ProjectProps2) => {
  return (
<Card key={project.id} className="relative mx-auto w-full max-w-sm pt-0 rounded-xl overflow-hidden">
  <div className="absolute inset-0 z-30 aspect-video bg-black/35 rounded-t-xl" />
  <img
    src={project.imageUrl}
    alt="Event cover"
    className="relative z-20 aspect-video w-full object-cover rounded-t-xl"
  />

  <CardHeader>

    <CardTitle>  {project.title}</CardTitle>
    <CardDescription>
    {project.description}
    </CardDescription>
  </CardHeader>

  <CardFooter>
  <Link href={project.link} target="_blank" className="w-full">
    <Button className="w-full">
      View Project
    </Button>
  </Link>
  </CardFooter>
</Card>
  );
};

export default Project;


