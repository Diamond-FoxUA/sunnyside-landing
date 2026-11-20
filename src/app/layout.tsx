import type { Metadata } from "next";
import { Barlow, Fraunces } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: "600",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || "http://localhost:3000"),
  title: "Sunnyside Landing",
  description:
    "This is a solution to the Sunnyside agency landing page challenge on Frontend Mentor.",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_URL || "http://localhost:3000",
    siteName: "Sunnyside Landing",
    title: "Sunnyside Landing",
    description:
      "This is a solution to the Sunnyside agency landing page challenge on Frontend Mentor.",
    images: [
      {
        url: "/img/og-default.png",
        width: 1200,
        height: 630,
        alt: "Sunnyside Landing Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunnyside Landing",
    description:
      "This is a solution to the Sunnyside agency landing page challenge on Frontend Mentor.",
    images: ["/img/og-default.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex flex-col min-h-dvh">{children}</body>
    </html>
  );
}
