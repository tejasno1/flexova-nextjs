import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JR Fitness - Discipline Builds Champions",
  description: "JR Fitness is where ambition meets results. Expert coaching, proven programs, and a community committed to helping you become the strongest version of yourself.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-flex-black text-white">
        {children}
      </body>
    </html>
  );
}
