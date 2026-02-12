import type { Metadata } from "next";
import { Caveat, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
  preload: true,
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emailstack.app"),
  title: "EmailStack | AI Outreach Platform",
  description:
    "Plan, launch, and optimize outbound email campaigns with AI-assisted writing, deliverability controls, and real-time analytics.",
  openGraph: {
    title: "EmailStack | AI Outreach Platform",
    description:
      "A conversion-first platform for campaign automation, data quality, and outbound analytics.",
    type: "website",
    url: "https://emailstack.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmailStack | AI Outreach Platform",
    description:
      "A conversion-first platform for campaign automation, data quality, and outbound analytics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} ${caveat.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
