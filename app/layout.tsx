import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Font Inter untuk teks umum agar terlihat bersih/modern
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

// Font JetBrains Mono untuk kesan "IT/Code" pada aksen atau angka
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Raya Geandy Pratama | Portfolio",
  description: "Portfolio of a Network Engineer and Web Developer",
  icons: {
    icon: "/favicon.ico", // Pastikan kamu punya file favicon di folder public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrains.variable} font-sans bg-[#0B0F1A] text-[#F0F9FF] antialiased`}
      >
        {/* Konten Utama */}
        {children}

        {/* Script atau elemen tambahan (seperti Analytics) bisa ditaruh di sini */}
      </body>
    </html>
  );
}