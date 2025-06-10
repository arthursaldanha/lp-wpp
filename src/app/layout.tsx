import type { Metadata } from "next";
import { Host_Grotesk, Roboto } from "next/font/google";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "@/styles/globals.css";
import { Providers } from "@/app/providers";

const hostGrotesk = Host_Grotesk({ subsets: ["latin"] });

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

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
    <html lang="pt-BR">
      <body className={`${hostGrotesk.className} ${roboto.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
