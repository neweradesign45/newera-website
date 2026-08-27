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
    default: "NewEra Automations — AI Agents & Workflow Automation Agency",
    template: "%s | NewEra Automations",
  },
  description:
    "We build AI agents, smart workflows, and automation systems that help businesses capture leads, recover revenue, and scale operations — without hiring more people.",
  keywords: [
    "AI Automation Agency",
    "WhatsApp Chatbot",
    "Lead Qualification",
    "Workflow Automation",
    "n8n Automation",
    "AI Agents India",
    "Cold Email Infrastructure",
    "E-Commerce Cart Recovery",
    "Business Automation",
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
    title: "NewEra Automations — AI Agents & Workflow Automation Agency",
    description:
      "We build AI agents, smart workflows, and automation systems that help businesses capture leads, recover revenue, and scale operations.",
    siteName: "NewEra Automations",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "NewEra Automations — AI Agents & Workflow Automation",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NewEra Automations — AI Agents & Workflow Automation Agency",
    description:
      "We build AI agents, smart workflows, and automation systems that help businesses capture leads, recover revenue, and scale operations.",
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
        </ThemeProvider>
      </body>
    </html>
  );
}
