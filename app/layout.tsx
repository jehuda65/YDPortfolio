import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "./components/sidebarContext";
// import { Component } from "react";
// import type { AppProps } from "next/app";

const inter = Inter({ subsets: ["latin"] });

<link rel="icon" href="favicon.ico" />;

export const metadata: Metadata = {
  title: "Yehudah D",
  description: "My portfolio",
  icons: {
    icon: "/images/logos/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </SidebarProvider>
  );
}
