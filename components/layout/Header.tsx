"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/consts";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LEFT */}
        <div className="hidden md:flex items-center gap-4">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/murrmedien"
            target="_blank"
            rel="noopener"
            className="text-gray-600 hover:text-black transition"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/murrmedien"
            target="_blank"
            rel="noopener"
            className="text-gray-600 hover:text-black transition"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.7"/>
              <path d="M7 10v7M11 10v7M11 13a3 3 0 0 1 6 0v4"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"/>
              <circle cx="7" cy="7" r="1" fill="currentColor"/>
            </svg>
          </a>

        </div>


        {/* LOGO */}
        <Link href="/" className="flex items-center ">
          <Image
            src="/images/logo.png"
            className="h-12 w-auto"
            alt="Murr Medien"
            width={140}
            height={100}
            priority
          />
        </Link>


        {/* RIGHT */}
        <div className="flex items-center">

          {/* Desktop Nav */}
          <NavigationMenu>
  <NavigationMenuList>
  {NavLinks.map((link) => (
        <NavigationMenuItem key={link.key}>
        <NavigationMenuLink asChild>
          <Link href={link.href}>      {link.text}</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
              ))}
  </NavigationMenuList>
</NavigationMenu>
        


          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden ml-4 flex flex-col gap-1"
          >
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
          </button>

        </div>

      </div>


      {/* Mobile Menu */}
      {open && (

        <div className="md:hidden border-t border-gray-200 bg-white">

          <nav className="flex flex-col p-6 gap-4 text-lg">

            <Link href="/" onClick={() => setOpen(false)}>
              Start
            </Link>

            <Link href="/ueber-uns" onClick={() => setOpen(false)}>
              Über uns
            </Link>

            <Link href="/projekte" onClick={() => setOpen(false)}>
              Projekte
            </Link>

            <Link href="/kontakt" onClick={() => setOpen(false)}>
              Kontakt
            </Link>

            <div className="flex gap-4 pt-4">

              {/* Instagram */}
              <a href="https://www.instagram.com/murrmedien" target="_blank">
                Instagram
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/murrmedien" target="_blank">
                LinkedIn
              </a>

            </div>

          </nav>

        </div>

      )}

    </header>
  );
}