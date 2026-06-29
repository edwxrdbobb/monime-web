import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { PageTransitionOverlay } from "@/components/gsap/page-transition-overlay";

// Primary typeface — body copy and UI.
const sora = localFont({
  src: "../../public/sora-family/Sora-Variable.ttf",
  weight: "100 800",
  variable: "--font-sans",
  display: "swap",
});

// Secondary typeface — headings only (see globals.css `h1`–`h6` rule).
const klarheitHeading = localFont({
  src: [
    {
      path: "../../public/es-klarheit-font-family/ESKlarheitGrotesk-Rg-TRIAL-BF6618a7002c70f.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/es-klarheit-font-family/ESKlarheitGrotesk-Md-TRIAL-BF6618a7001a5a8.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/es-klarheit-font-family/ESKlarheitGrotesk-Smbd-TRIAL-BF6618a70009538.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/es-klarheit-font-family/ESKlarheitGrotesk-Bd-TRIAL-BF6618a70049644.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-heading",
  display: "swap",
});

const klarheitMono = localFont({
  src: "../../public/es-klarheit-font-family/ESKlarheitGroteskMono-Rg-TRIAL-BF6618a6fe16ceb.otf",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Monime — Modern Payments for Growing Businesses",
  description:
    "Monime is Sierra Leone's most reliable payment gateway, offering an end-to-end platform that boosts payment performance and streamlines finances.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sora.variable} ${klarheitHeading.variable} ${klarheitMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <PageTransitionOverlay />
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
