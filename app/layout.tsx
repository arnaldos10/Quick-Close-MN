import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "RealEstateAgent"],
  name: "Quick Close Home Buyers",
  description:
    "Minnesota cash home buyers serving the Twin Cities and South Metro. We buy houses in any condition — close in 7 days with no fees or commissions.",
  url: "https://quickclosemn.com",
  telephone: "+19522348099",
  email: "info@quickclosemn.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Burnsville",
    addressRegion: "MN",
    addressCountry: "US",
  },
  areaServed: [
    "Twin Cities, MN",
    "Burnsville, MN",
    "Eagan, MN",
    "Apple Valley, MN",
    "Lakeville, MN",
    "Bloomington, MN",
    "Savage, MN",
    "Prior Lake, MN",
    "Rosemount, MN",
    "Shakopee, MN",
  ],
  foundingDate: "2021",
  priceRange: "$$",
};

export const metadata: Metadata = {
  title: "Quick Close Home Buyers — We buy houses in the Twin Cities & South Metro",
  description:
    "Minnesota cash home buyers. We buy houses in any condition — fire damage, foreclosure, inherited, bad tenants. Cash offer in 24 hrs. Close in 7 days. No fees, no commissions. Local since 2014.",
  openGraph: {
    title: "Quick Close Home Buyers — We buy houses in the Twin Cities & South Metro",
    description:
      "Cash offer in 24 hours. Close in 7 days. No fees, no repairs, no showings. Local Minnesota buyers since 2014.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quick Close Home Buyers",
    description: "Cash offer in 24 hrs. Close in 7 days. No fees. Local MN buyers.",
  },
  metadataBase: new URL("https://quickclosemn.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
