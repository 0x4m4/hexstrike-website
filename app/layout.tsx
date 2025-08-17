import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "HexStrike AI - Revolutionary AI-Powered Offensive Security Framework",
  description: "Advanced AI-driven penetration testing and security assessment tools. Automated vulnerability discovery, intelligent threat analysis, and comprehensive security solutions.",
  keywords: ["penetration testing", "AI security", "cybersecurity", "vulnerability assessment", "offensive security", "ethical hacking"],
  authors: [{ name: "HexStrike AI Team" }],
  creator: "HexStrike AI",
  publisher: "HexStrike AI",
  metadataBase: new URL("https://hexstrike.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
    ]
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "HexStrike AI - Revolutionary AI-Powered Offensive Security Framework",
    description: "Advanced AI-driven penetration testing and security assessment tools. Automated vulnerability discovery and intelligent threat analysis.",
    url: "https://hexstrike.com",
    siteName: "HexStrike AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HexStrike AI - Revolutionary AI-Powered Offensive Security Framework",
    description: "Advanced AI-driven penetration testing and security assessment tools.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="dark">{children}</body>
    </html>
  )
}
