import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata = {
  title: "The Everyday Plate Blueprint — A Practical 30-Day System for Sustainable Fat Loss",
  description:
    "A 730-page practical system: 24 chapters, 60 recipes, a 30-day implementation program, and workbook tools for sustainable fat loss, better energy, and real-life eating without extremes.",
  openGraph: {
    title: "The Everyday Plate Blueprint",
    description:
      "Build a system you can live with — not a plan you need to escape. 24 chapters • 60 recipes • 30-day program.",
    images: ["/images/cover.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${garamond.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
