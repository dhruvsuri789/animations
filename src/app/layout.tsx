import SideNav from "@/components/SideNav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className="antialiased text-slate-300 bg-slate-950">
        <SideNav />
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
