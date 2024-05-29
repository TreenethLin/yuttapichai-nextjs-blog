import type { Metadata } from "next";
import { Sarabun } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./loading"
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Suspense } from "react";

const sarabun = Sarabun({
  subsets: ["thai"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "yuttapichai.space",
  description: "Welcome to the world of Yuttapichai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={sarabun.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />
        <Suspense fallback={<Loading />} />
        <main className="max-w-3xl mx-auto px-4">
          {children}
        </main>
        <ScrollToTop />
        <Footer />
      </ThemeProvider>
      </body>
    </html>
  );
}
