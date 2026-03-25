import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/ui/WhatsAppFAB";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import ThemeProvider from "@/components/ui/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MarKEN — Medical Cold Chain & Healthcare Solutions | India",
    template: "%s | MarKEN Healthcare",
  },
  description:
    "India's trusted manufacturer of WHO PQS approved blood bank refrigerators, vaccine refrigerators, deep freezers, hospital furniture & medical equipment. 25+ years, 400+ products, 20,000+ customers.",
  keywords: [
    "blood bank refrigerator",
    "vaccine refrigerator",
    "medical cold chain",
    "blood bank equipment",
    "hospital furniture manufacturer india",
    "medical equipment manufacturer",
    "WHO PQS refrigerator",
    "ULT deep freezer",
    "MarKEN",
  ],
  authors: [{ name: "MarKEN Healthcare Solutions" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://markenworld.com",
    siteName: "MarKEN Healthcare",
    title: "MarKEN — Medical Cold Chain & Healthcare Solutions",
    description:
      "India's trusted manufacturer of WHO PQS approved blood bank refrigerators, vaccine refrigerators, and hospital infrastructure.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MarKEN — Medical Cold Chain & Healthcare Solutions",
    description:
      "WHO PQS approved blood bank refrigerators, vaccine storage, and hospital infrastructure. 25+ years of innovation.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://markenworld.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <OrganizationSchema />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[var(--color-surface)] text-[var(--color-text-body)]">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFAB />
        </ThemeProvider>
      </body>
    </html>
  );
}
