import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import WhatsappAPI from "./components/WhatsappAPI";

const inter = Poppins({
  subsets: ["latin"],
  weight: "300"
});

export const metadata: Metadata = {
  title: "Coqurate Box",
  description: "Crafting smiles, Creating memories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children} 
        <SpeedInsights />
        <WhatsappAPI />
      </body>
    </html>
  );
}
