import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { BASE_URL, OG_IMAGE } from "@/lib/constants";
import LenisWrapper from "@/providers/lenis-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import FooterSection from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import StructuredData from "@/components/common/structured-data";
import Analytics from "@/components/common/analytics";
import ConsoleLog from "@/components/common/console-log";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "NewEra Automations — AI Automation Agency & Intelligent AI Agents",
    template: "%s | NewEra Automations",
  },
  description:
    "NewEra Automations is an AI automation agency engineering autonomous AI agents, production n8n workflow automation, and CRM lead engines that scale business operations.",
  keywords: [
    "AI Automation Agency",
    "AI Agent Development",
    "n8n Automation Agency",
    "n8n Workflow Automation",
    "Business Process Automation",
    "Custom AI Agents",
    "AI Workflow Automation",
    "CRM Automation",
    "Lead Qualification Automation",
    "WhatsApp Automation",
    "Sales Automation",
    "NewEra Automations",
  ],
  authors: [{ name: "Krishna Prajapati" }],
  creator: "NewEra Automations",
  publisher: "NewEra Automations",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    title: "NewEra Automations — AI Automation Agency & Intelligent AI Agents",
    description:
      "NewEra Automations is an AI automation agency engineering autonomous AI agents, production n8n workflow automation, and CRM lead engines that scale business operations.",
    siteName: "NewEra Automations",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "NewEra Automations — AI Automation Agency",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NewEra Automations — AI Automation Agency & Intelligent AI Agents",
    description:
      "NewEra Automations is an AI automation agency engineering autonomous AI agents, production n8n workflow automation, and CRM lead engines.",
    creator: "@neweraagents",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "NewEra Automations preview",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon" },
    ],
    shortcut: "/icon",
    apple: "/icon",
  },
  verification: {
    google: "Vx6E9ggGFqshwVIjr5O5iBlfgCMj6HtGcurE6QU4Gl4",
  },
  alternates: {
    canonical: BASE_URL,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // suppressHydrationWarning: next-themes adds the `class="dark"` +
  // `color-scheme` style to <html> on the client, which the server can't know
  // about — this tells React to ignore that expected attribute mismatch.
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
          The hero video (/hv.webm) is eagerly buffered by its own
          <video preload="auto" fetchpriority="high"> in AboutMe. We intentionally
          do NOT use <link rel="preload" as="video"> — browsers reject "video" as
          an unsupported `as` value, which is what triggered the console warning.
        */}

        {/* Warm up Vimeo connections early so ShowReel iframes load faster */}



        <StructuredData />
        <Analytics />
        {/* Google Preferred Sources Publisher Library */}
        <script async src="https://news.google.com/swg/js/v1/publisher.js" />
      </head>
      <body
        className={`${poppins.variable} ${cormorantGaramond.variable} antialiased  mx-auto `}
      >
        <ConsoleLog />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LenisWrapper>
            <Navbar />
            {children}
            <FooterSection />
          </LenisWrapper>
          <SpeedInsights />
          <VercelAnalytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
