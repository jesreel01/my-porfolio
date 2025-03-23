import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cusor";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

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
    <html lang="en" >
      <body className={`${inter.variable}  ${jetbrainsMono.variable} antialiased`}>
        <Cursor />
        <Navigation />
        <main className="mx-auto max-w-3xl px-4 pt-8 pb-6 sm:px-6 lg:px-8 lg:pb-8 lg:pt-16">{children}</main>

        <footer className="py-4 border-t border-border">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm">
                &copy; {new Date().getFullYear()} Jesreel John Miole
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
