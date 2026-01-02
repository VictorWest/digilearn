import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";

import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin'], // Specify required subsets
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "DigiLearn",
  description: "By Victor Wariboko-West",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
           {children}
      </body>
    </html>
  );
}
