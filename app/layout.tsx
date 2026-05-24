import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

const BASE_URL = "https://www.tryinstallo.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "installo — Invoice & Get Paid Faster",
    template: "%s | installo",
  },
  description:
    "Installo gives small businesses a live dashboard for every invoice, payment plan, and customer. Send invoices in 2 minutes, offer installment plans, and get paid automatically.",

  keywords: [
    "invoicing app",
    "small business invoicing",
    "payment plans",
    "invoice software",
    "HVAC invoicing",
    "cleaning business invoicing",
    "contractor invoicing",
    "get paid faster",
    "installment payments",
  ],

  authors: [{ name: "installo", url: BASE_URL }],
  creator: "installo",

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "installo",
    title: "installo — Invoice & Get Paid Faster",
    description:
      "Send invoices in 2 minutes, offer payment plans, and track every dollar in real time. Built for cleaning, HVAC, contracting, and any service business.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "installo — Invoice & Get Paid Faster",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@tryinstallo",
    creator: "@tryinstallo",
    title: "installo — Invoice & Get Paid Faster",
    description:
      "Send invoices in 2 minutes, offer payment plans, and track every dollar in real time.",
    images: ["/og-image.png"],
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "installo",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/og-image.png`,
      },
      sameAs: ["https://twitter.com/tryinstallo"],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "installo",
      publisher: { "@id": `${BASE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      name: "installo",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
      url: BASE_URL,
      description:
        "Invoicing and payment management for small service businesses. Send invoices, offer installment plans, and track payments in real time.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free plan available",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-dm-sans, var(--font-sans))" }}>
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-0MNY63QR8V" />
      </body>
    </html>
  );
}
