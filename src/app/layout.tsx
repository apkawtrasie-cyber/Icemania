import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import { LanguageProvider } from "@/context/LanguageContext";
import MobileBottomNav from "@/components/navigation/MobileBottomNav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Icemania | Prawdziwe Lody Rzemieślnicze",
  description:
    "Prawdziwe lody. Bez pośpiechu. Rzemieślnicze smaki z naturalnych składników, tworzone z pasją każdego ranka w Krakowie.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Icemania",
  },
};

export const viewport: Viewport = {
  themeColor: "#F9F5E7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${
        geistSans.variable
      } ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <AuthProvider>
            {children}
            {/* Spacer for MobileBottomNav — prevents content from being hidden */}
            <div className="h-20 lg:h-0 shrink-0" />
            <MobileBottomNav />
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
