import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cusor";
import Navigation from "@/components/Navigation";
import { Toaster } from "@/components/ui/sonner";

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
  metadataBase: new URL('https://jesreel.me'),
  title: {
    default: "Jesreel | Software Engineer & Developer",
    template: "%s | Jesreel"
  },
  description: "Full-stack developer specializing in Next.js, React, and AWS. Portfolio showcasing professional projects, coding skills, and technical expertise.",
  keywords: "software engineer, web developer, full-stack, Next.js, React, TypeScript, portfolio, hire developer",
  authors: [{ name: "Jesreel John Miole" }],
  creator: "Jesreel",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jesreel.me/',
    title: 'Jesreel | Software Engineer & Developer',
    description: 'Full-stack developer specializing in Next.js, React, and AWS. Portfolio showcasing professional projects, coding skills, and technical expertise.',
    siteName: 'Jesreel Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jesreel | Software Engineer & Developer',
    description: 'Full-stack developer specializing in Next.js, React, and AWS. Portfolio showcasing professional projects, coding skills, and technical expertise.',
    creator: '@jesreel',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://jesreel.me/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Cursor />
        <Navigation />
        <Toaster position="top-center" />
        <main className="flex-grow mx-auto max-w-3xl w-full p-4 pb-6 sm:px-6 lg:px-8 lg:pb-8 lg:pt-16">
          {children}
        </main>

        <footer className="py-4 border-t border-border mt-auto">
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
