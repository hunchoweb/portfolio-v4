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
    default: "Odunayo Ojowa | Frontend Engineer",
    template: "%s | Odunayo Ojowa",
  },
  description:
    "Odunayo Ojowa, also known as Huncho, is a frontend engineer building polished web experiences with React, Next.js, TypeScript, GSAP, and Umbraco CMS.",
  keywords: [
    "Odunayo Ojowa",
    "Ojowa",
    "Odunayo",
    "frontend engineer",
    "frontend developer",
    "frontend engineer portfolio",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "Lagos frontend engineer",
    "Huncho",
  ],
  authors: [{ name: "Odunayo Ojowa" }],
  creator: "Odunayo Ojowa",
  applicationName: "Odunayo Ojowa Portfolio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Odunayo Ojowa | Frontend Engineer",
    description:
      "Frontend engineer portfolio by Odunayo Ojowa, showcasing React, Next.js, TypeScript, GSAP, and Umbraco CMS work.",
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
    title: "Odunayo Ojowa | Frontend Engineer",
    description:
      "Frontend engineer portfolio by Odunayo Ojowa, also known as Huncho.",
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
        jobTitle: "Frontend Engineer",
        url: siteUrl,
        image: `${siteUrl}/images/thumbnail.png`,
        sameAs: [
          "https://twitter.com/hunchoweb",
          "https://github.com/hunchoweb",
          "https://www.linkedin.com/in/odunayo-ojowa-66763b192/",
        ],
        knowsAbout: [
          "Frontend Engineering",
          "React",
          "Next.js",
          "TypeScript",
          "GSAP",
          "Umbraco CMS",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: "Odunayo Ojowa",
        alternateName: "Odunayo Ojowa Portfolio",
        description:
          "Frontend engineer portfolio by Odunayo Ojowa, also known as Huncho.",
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
