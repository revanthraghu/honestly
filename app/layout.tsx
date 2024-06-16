import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const ppmori = localFont({
    src: [
        {
            path: "../public/fonts/PPMori/ppmori-extralight.woff2",
            weight: "100",
            style: "normal"
        },
        {
            path: "../public/fonts/PPMori/ppmori-extralightitalic.woff2",
            weight: "100",
            style: "italic"
        },
        {
            path: "../public/fonts/PPMori/ppmori-regular.woff2",
            weight: "400",
            style: "normal"
        },
        {
            path: "../public/fonts/PPMori/ppmori-regularitalic.woff2",
            weight: "400",
            style: "italic"
        },
        {
            path: "../public/fonts/PPMori/ppmori-semibold.woff2",
            weight: "600",
            style: "normal"
        },
        {
            path: "../public/fonts/PPMori/ppmori-semibolditalic.woff2",
            weight: "600",
            style: "italic"
        }
    ],
    display: "swap",
    variable: "--font-ppmori"
});

const ppeditorialnew = localFont({
    src: [
        {
            path: "../public/fonts/PPEditorialNew/ppeditorialnew-ultralight.woff2",
            weight: "200",
            style: "normal"
        },
        {
            path: "../public/fonts/PPEditorialNew/ppeditorialnew-ultralightitalic.woff2",
            weight: "200",
            style: "italic"
        },
        {
            path: "../public/fonts/PPEditorialNew/ppeditorialnew-regular.woff2",
            weight: "400",
            style: "normal"
        },
        {
            path: "../public/fonts/PPEditorialNew/ppeditorialnew-italic.woff2",
            weight: "400",
            style: "italic"
        },
        {
            path: "../public/fonts/PPEditorialNew/ppeditorialnew-ultrabold.woff2",
            weight: "800",
            style: "normal"
        },
        {
            path: "../public/fonts/PPEditorialNew/ppeditorialnew-ultrabolditalic.woff2",
            weight: "800",
            style: "italic"
        }
    ],
    display: "swap",
    variable: "--font-ppeditorialnew"
});

export const metadata: Metadata = {
    title: "Find Best Skincare & Makeup by Asking Real People | Honestly",
    description: "We match people who have the same skin tone, skin type, age, gender, weather—you get the gist. A bit like Bumble, but for beauty"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${ppmori.className} ${ppeditorialnew.variable}`}>{children}</body>
        </html>
    );
}
