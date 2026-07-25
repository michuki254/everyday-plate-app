import { Roboto, Roboto_Slab, Oswald } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-roboto-slab",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-oswald",
});

export const metadata = {
  title:
    "The Everyday Plate Blueprint — The Practical 30-Day System For Sustainable Fat Loss",
  description:
    "The complete 730+ page system: 24 chapters, 60 flexible recipes, a day-by-day 30-day program, and printable workbook tools for sustainable fat loss without extremes.",
  openGraph: {
    title: "The Everyday Plate Blueprint",
    description:
      "The practical 30-day system for sustainable fat loss, better energy, and real-life eating — without extremes.",
    images: ["/images/cover.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${robotoSlab.variable} ${oswald.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
