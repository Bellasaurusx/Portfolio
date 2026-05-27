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

export const metadata = {
  metadataBase: new URL("https://portfolio-self-gamma-65.vercel.app"),
  title: "Valentino Web Design",
  description: "Built with design and engineering in mind.",
  openGraph: {
    title: "Valentino Web Design",
    description: "Built with design and engineering in mind.",
    url: "/",
    siteName: "Valentino Web Design",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valentino Web Design",
    description: "Built with design and engineering in mind.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
