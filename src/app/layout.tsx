import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { LanguageProvider } from "@/context/LanguageContext";
import CustomCursor from "@/components/ui/CustomCursos";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Yuri Loureiro | Portfolio",
  description: "Full Stack Developer",
  icons: {
    icon: [
      { url: "/favicon.webp", sizes: "32x32", type: "image/webp" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${syne.variable} bg-background text-foreground antialiased relative`}
      >
        <div className="fixed inset-0 -z-10 bg-grid-pattern" />
        <LanguageProvider>
          <CustomCursor />
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
