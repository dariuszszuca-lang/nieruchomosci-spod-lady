import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { LayoutShell } from "@/components/LayoutShell";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Nieruchomości Spod Lady — Ogólnopolska sieć agentów nieruchomości",
  description:
    "Społeczność 1600+ agentów nieruchomości. Oferty off-market, współpraca, szkolenia, webinary. Dołącz do największej sieci pośredników w Polsce.",
  keywords: [
    "nieruchomości spod lady",
    "agenci nieruchomości",
    "oferty off-market",
    "współpraca pośredników",
    "nieruchomości polska",
  ],
  openGraph: {
    title: "Nieruchomości Spod Lady",
    description: "Ogólnopolska sieć agentów nieruchomości. Współpraca zamiast rywalizacji.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${poppins.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-poppins)]">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
