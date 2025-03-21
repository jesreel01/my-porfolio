import type { Metadata } from "next";
import { Inter ,Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cusor";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500', '700'],
})


export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Personal portfolio and projects showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}  ${jetbrainsMono.variable} antialiased bg-gray-50`}
      >
        <Cursor/>
        <Navigation/>
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}