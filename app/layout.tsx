import type { Metadata } from "next";
import { Oswald, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fontHeading = Oswald({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
});
const fontBody = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Le Comptoir — Café de quartier Lyon depuis 1972",
  description: "Café de quartier à Lyon. Expresso, viennoiseries, presse. Un café à l'ancienne.",
  keywords: ["café Lyon", "café quartier", "Le Comptoir", "café traditionnel"],
  robots: "index, follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fontHeading.variable} ${fontBody.variable}`}>
      <body className="antialiased bg-background text-ink">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
