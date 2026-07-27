import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Libre_Baskerville,
  Quicksand,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

import DesktopGuard from "@/components/ui/desktop-guard";

export const metadata: Metadata = {
  title: "Aarunya",
  description: "A Beach Site Resort",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${libreBaskerville.variable} ${quicksand.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/regular/style.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <DesktopGuard>{children}</DesktopGuard>
      </body>
    </html>
  );
}
