import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Kreos | Roblox VFX Artist — Beams, Trails & Particle Systems",
  description:
    "Kreos builds high-quality, game-ready visual effects for Roblox — aura particles, trail systems, and full ability sequences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=general-sans@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Global, client-only UI. Each of these renders null / fixed-position
            elements and is safe to mount once at the root. */}
        <Loader />
        <ScrollProgress />
        <CursorGlow />
        <SmoothScroll />
        <Nav />
        {children}
      </body>
    </html>
  );
}
