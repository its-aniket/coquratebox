import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import WhatsappAPI from "./components/WhatsappAPI";

const inter = Poppins({
  subsets: ["latin"],
  weight: "300",
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
      <head> 
        <meta name="title" content="Coqurate Box" />
        <meta
          name="description"
          content="Coqurate Box is a corporate and personalized gifting solution company that believes in the power of thoughtful gifts to build connections and inspire loyalty."
        />

      </head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <WhatsappAPI />
      </body>
    </html>
  );
}
