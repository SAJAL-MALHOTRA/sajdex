import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SAJDEX — Sajal (Sam) | ML Engineer & Full-Stack Builder",
  description:
    "Personal portfolio and engineering workstation for Sajal (Sam). Building intelligent products at the intersection of machine learning, software, and design.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[#08090B] text-[#F8FAFC] antialiased selection:bg-[#EF4444] selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
