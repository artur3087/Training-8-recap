import { Inter } from "next/font/google";
import "./globals.css";

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
        
        {children}</body>
    </html>
  );
}
