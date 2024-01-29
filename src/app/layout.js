import { Inter } from "next/font/google";
import "./globals.css";

// Below I import Link functionality //
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RECAPweek8",
  description: "RECAPING things is vital!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <h1>RECAPweek8</h1>
        <h5>
        <Link href="/">MAINrecapPAGE</Link>
        <Link href="/duderecaps">DUDErecaps</Link>
        </h5>
        {children}</body>
    </html>
  );
}
