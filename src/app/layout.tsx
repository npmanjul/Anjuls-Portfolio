import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Anjul Singh",
  description:
    "Explore Anjul Singh's portfolio – Full Stack Developer specializing in React, Node.js, and modern web technologies. View projects, skills, and contact info.",
  keywords: [
    "Anjul Singh",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Portfolio",
    "Node.js Projects",
    "JavaScript Developer",
    "Frontend Backend",
    "Software Engineer",
  ],
  authors: [{ name: "Anjul Singh", url: "https://yourdomain.com" }],
  creator: "Anjul Singh",
  openGraph: {
    title: "Portfolio | Anjul Singh",
    description:
      "Showcasing Anjul Singh’s work in web development, React, Node.js, and more. View live projects, skills, and contact details.",
    url: "https://yourdomain.com",
    siteName: "Anjul Singh Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anjul Singh Portfolio",
      },
    ],
    type: "website",
  },
  themeColor: "#000000",
  metadataBase: new URL("https://yourdomain.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
