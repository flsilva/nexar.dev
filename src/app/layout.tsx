import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { GitHubLogoIcon } from "./GitHubLogoIcon";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  colorScheme: "only light",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#FFFFFF",
  width: "device-width",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://opentask.app"),
  title: "Nexar",
  description:
    "Nexar is an application architecture for Next.js App Router apps.",
  authors: [{ name: "Flavio Silva", url: "https://flsilva.com" }],
  creator: "Flavio Silva",
  publisher: "https://flsilva.com",
  formatDetection: { telephone: false },
  alternates: { canonical: "https://nexar.dev" },
  generator: "Next.js",
  keywords: ["nexar", "application", "architecture", "nextjs", "react", "app"],
  openGraph: {
    type: "website",
    title: "Nexar",
    description:
      "Nexar is an application architecture for Next.js App Router apps.",
    siteName: "Nexar",
    url: "https://nexar.dev",
    images: [{ url: "https://nexar.dev/images/tweet-card.png" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://nexar.dev",
    title: "Nexar",
    description:
      "Nexar is an application architecture for Next.js App Router apps.",
    images: [{ url: "https://nexar.dev/images/tweet-card.png" }],
    creator: "@flsilva7",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${inter.className} flex flex-col h-full`}>
        <div className="flex flex-1 flex-col p-6 mb-14">{children}</div>
        <footer className="flex justify-between items-center p-6 bg-[#191919] dark:bg-[#f5f5f5] text-[#f5f5f5] dark:text-[#191919]">
          <Link href="https://flsilva.com" className="hover:underline">
            © Flavio Silva
          </Link>
          <Link className="mr-6" href="https://github.com/flsilva/nexar.dev/">
            <GitHubLogoIcon className="fill-white dark:fill-black" />
          </Link>
        </footer>
        <GoogleAnalytics gaId="G-QJRLJTTYZ9" />
      </body>
    </html>
  );
}
