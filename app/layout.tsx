import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cal } from "./font";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.webdesignagencybd.com"),
  title: {
    default: "Web Agency Bangladesh",
    template: "Web Agency Bangladesh | %s",
  },
  description: "Expert Web Design Services Tailored for Your Business Success",
  openGraph: {
    url: "https://www.webdesignagencybd.com",
    title: "Web Agency Bangladesh",
    description:
      "Expert Web Design Services Tailored for Your Business Success",
    siteName: "Web Agency Bangladesh",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@therundigital",
    creator: "@therundigital",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${cal.variable} bg-[#F8F8F8]`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
