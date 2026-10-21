import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SAJAL MALHOTRA // SYSTEMS ARCHITECTURE",
  description:
    "Engineering portfolio for Sajal Malhotra. High-concurrency distributed systems, real-time WebSocket architecture, and technical sartorial curation at NIT Jalandhar.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="min-h-screen bg-[#09090B] text-[#EDEDED] font-mono antialiased selection:bg-white selection:text-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
