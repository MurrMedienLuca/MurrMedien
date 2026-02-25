import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>

        <section>
          <div className="flex flex-col min-h-screen">
            <Header/>
            <main>
              <section>{children}</section>
            </main>
            <Footer/>
          </div>
        </section>

    </body>
  </html>
  );
}
