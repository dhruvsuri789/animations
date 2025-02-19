import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/SideNav";

const interSans = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Motion Library",
  description: "Motion or Framer Motion animations library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={interSans.className}>
      <body className="antialiased grid grid-cols-[270px_1fr] text-slate-300 bg-background">
        <SideNav />
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
