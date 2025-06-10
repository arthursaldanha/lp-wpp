import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "@/styles/globals.css";

const hostGrotesk = Host_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whatsapp Farma",
  description: "A solução que sua farmácia precisa!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={hostGrotesk.className}>{children}</body>
    </html>
  );
}
