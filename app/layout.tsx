import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const ppmori = localFont({
  src: [
    {
      path: "../public/fonts/PPMori/PPMori-Extralight.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/PPMori/PPMori-ExtralightItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/PPMori/PPMori-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PPMori/PPMori-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/PPMori/PPMori-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/PPMori/PPMori-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-ppmori",
});

export const metadata: Metadata = {
  title: "Honestly - Authentic Beauty Reviews",
  description:
    "Honestly is the go-to platform for real, trustworthy beauty product reviews tailored to your unique skin tone, type, age, gender, and hair. No more wasting money on disappointing products - connect with people just like you who've actually tried them. Our community shares honest, nuanced feedback to help you make informed decisions. Skip the influencer hype and generic reviews with Honestly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ppmori.className}>{children}</body>
    </html>
  );
}
