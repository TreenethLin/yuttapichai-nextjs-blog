import type { Metadata } from "next";
import { Sarabun } from "next/font/google";
import Navbar from "./components/Navbar";
import { ShortProfile } from "./components/ShortProfile";
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
