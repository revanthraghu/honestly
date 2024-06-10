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
  title: "Find Best Skincare & Makeup by Asking Real People | Honestly",
  description:
    "We match people who have the same skin tone, skin type, age, gender, weather—you get the gist. A bit like Bumble, but for beauty",
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
