import type { Metadata } from "next";
import { Playfair_Display } from 'next/font/google';
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: "Splash Boyz Financial Group",
  description: "Professional financial services for your success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className={playfair.className}>{children}</body>
    </html>
  );
}
