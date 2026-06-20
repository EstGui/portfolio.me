import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";

import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Guilherme Esteves — Full Stack Developer",
    template: "%s | Guilherme Esteves",
  },
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js and .NET. Based in São Paulo, Brazil. Open to new opportunities.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    ".NET",
    "TypeScript",
    "C#",
    "São Paulo",
    "Brazil",
    "Guilherme Esteves",
    "Software Engineer",
    "Web Developer",
  ],
  authors: [{ name: "Guilherme Esteves", url: "https://github.com/EstGui" }],
  creator: "Guilherme Esteves",
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: baseUrl,
    siteName: "Guilherme Esteves Portfolio",
    title: "Guilherme Esteves — Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js and .NET. Based in São Paulo, Brazil.",
    firstName: "Guilherme",
    lastName: "Esteves",
    username: "EstGui",
  },
  twitter: {
    card: "summary",
    title: "Guilherme Esteves — Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js and .NET. Based in São Paulo, Brazil.",
    creator: "@EstGui",
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
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#141414",
              color: "#ededed",
              fontFamily: '"Inter", sanas-serif',
            },
            // icon: ' '
          }}
        />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
