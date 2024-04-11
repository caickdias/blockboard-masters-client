import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cryptoboard Masters",
  description: "Cryptoboard Masters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='midnightBlue'><text y='.9em' font-size='120'>♞</text></svg>"
        />
      </head>

      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
