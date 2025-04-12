import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Suspense } from "react";
import { Analytics } from "@/components/analytics";
import { ThemeProvider } from "@/components/theme-provider";

// Fuentes optimizadas
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sebastian Huanca | Backend Developer",
  description:
    "Portfolio profesional de Sebastian Huanca, Backend Developer especializado en arquitecturas escalables y soluciones de alto rendimiento.",
  keywords: [
    "backend developer",
    "node.js",
    "typescript",
    "arquitectura de sistemas",
    "desarrollo web",
    "API",
    "microservicios",
  ],
  authors: [{ name: "Sebastian Huanca" }],
  creator: "Sebastian Huanca",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://sebastianhuanca.dev",
    title: "Sebastian Huanca | Backend Developer",
    description:
      "Portfolio profesional de Sebastian Huanca, Backend Developer especializado en arquitecturas escalables y soluciones de alto rendimiento.",
    siteName: "Sebastian Huanca Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sebastian Huanca | Backend Developer",
    description:
      "Portfolio profesional de Sebastian Huanca, Backend Developer especializado en arquitecturas escalables y soluciones de alto rendimiento.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`scroll-smooth ${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
          </div>
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
