import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import "./globals.css";

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
      <body className="font-ppmori ">{children}</body>
    </html>
  );
}
