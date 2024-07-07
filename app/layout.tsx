import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { ubuntu, ibm_plex_mono } from "../public/assets/fonts";

export const metadata: Metadata = {
  title: "Minhazur Rahman",
  description:
    "Frontend engineer with 4+ years of expertise in creating high-quality web applications. Experienced in working in a highly collaborative multi-cultural environment, aligning with product visions, and staying updated with the latest tech innovations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-ibm-plex-mono">
      <body
        className={`${ubuntu.variable} ${ibm_plex_mono.variable} font-ibm-plex-mono`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
