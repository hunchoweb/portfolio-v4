import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import { LenisProvider } from "@/contexts/LenisContext";
import { siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Odunayo Ojowa — AI Product Engineer",
    template: "%s | Odunayo Ojowa",
  },
  description:
    "AI Product Engineer building AI agents, business automation systems and intelligent SaaS products that help teams work more efficiently.",
  keywords: [
    "Odunayo Ojowa",
    "Ojowa",
    "Odunayo",
    "AI Product Engineer",
    "AI agents",
    "business automation",
    "agentic workflows",
    "AI-powered SaaS",
    "product engineering",
    "Lagos AI Product Engineer",
    "Huncho",
  ],
  authors: [{ name: "Odunayo Ojowa" }],
  creator: "Odunayo Ojowa",
  applicationName: "Odunayo Ojowa Portfolio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Odunayo Ojowa — AI Product Engineer",
    description:
      "AI Product Engineer building AI agents, business automation systems and intelligent SaaS products that help teams work more efficiently.",
    url: "/",
    siteName: "Odunayo Ojowa",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Portfolio preview thumbnail",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Odunayo Ojowa — AI Product Engineer",
    description:
      "AI Product Engineer building AI agents, business automation systems and intelligent SaaS products that help teams work more efficiently.",
    images: ["/images/thumbnail.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}#person`,
        name: "Odunayo Ojowa",
        alternateName: ["Odunayo", "Ojowa", "Huncho", "Ayo"],
        jobTitle: "AI Product Engineer",
        url: siteUrl,
        image: `${siteUrl}/images/thumbnail.png`,
        sameAs: [
          "https://twitter.com/hunchoweb",
          "https://github.com/hunchoweb",
          "https://www.linkedin.com/in/odunayo-ojowa-66763b192/",
        ],
        knowsAbout: [
          "AI Product Engineering",
          "AI Agents",
          "Business Automation",
          "Agentic Workflows",
          "SaaS Products",
          "Frontend Engineering",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: "Odunayo Ojowa",
        alternateName: "Odunayo Ojowa Portfolio",
        description:
          "AI Product Engineer building AI agents, business automation systems and intelligent SaaS products that help teams work more efficiently.",
        publisher: {
          "@id": `${siteUrl}#person`,
        },
      },
    ],
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
