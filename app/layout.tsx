import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "installo — Invoice & Pay",
  description:
    "Get paid faster. Stress less. Installo gives small businesses a live dashboard for every invoice, payment, and customer — so you always know where your money is.",
  openGraph: {
    title: "installo — Invoice & Pay",
    description: "Real-time invoicing and cash flow for small businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable}`}>
      <body style={{ fontFamily: "var(--font-dm-sans, var(--font-sans))" }}>
        {children}
      </body>
    </html>
  );
}
