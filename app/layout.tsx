import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '700'], });

export const metadata: Metadata = {
  title: "Apex Auto | Expert Mechanics",
  description: "Expert mechanics for all your car needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={'scroll-smooth'}>
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
