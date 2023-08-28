"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Vision Ventures</title>
      </Head>
      <body className={inter.className}>
        <Navbar />

        <Providers>{children}</Providers>

        <Footer />
      </body>
    </html>
  );
}
