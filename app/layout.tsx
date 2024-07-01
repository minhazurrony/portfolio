import type { Metadata } from "next";
import { Ubuntu, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

const ibm_plex_mono = IBM_Plex_Mono({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
});

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
    <html lang="en">
      <body className={`${ubuntu.variable} ${ibm_plex_mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
