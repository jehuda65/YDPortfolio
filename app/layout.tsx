import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
