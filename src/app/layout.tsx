import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { UfoCursor } from "@/components/UfoCursor";
import { ThreeBackground } from "@/components/ThreeBackground";
import { Socials } from "@/components/Socials";
import { Nav } from "@/components/Nav";
import { portfolioData } from "@/data/portfolio";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${portfolioData.profile.name} — ${portfolioData.profile.roleTitle}`,
  description: portfolioData.profile.bioSubtitle,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      data-scroll-behavior="smooth"
      className={`${barlowCondensed.variable} ${ibmPlexMono.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased min-h-screen flex flex-col selection:bg-[var(--accent)] selection:text-white">
        <ThemeProvider>
          <UfoCursor />
          <ThreeBackground />
          <Socials />
          <Nav />
          <div className="flex-1 flex flex-col relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
