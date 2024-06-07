import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "./navbar/NavbarDemo";
import { CardHoverEffectDemo } from "@/components/ui/CardHoverEffectDemo";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Page from "./about/page";
import { HeroParallaxDemo } from "@/components/ui/HeroParallaxDemo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frances Dev",
  description: "Portfolio",
  icons: {
    icon: './test.jpg', // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <TracingBeam>
          <NavbarDemo />
          {children}
          <Page/>
          <HeroParallaxDemo/>

          {/* this is the project */}
          {/* <CardHoverEffectDemo /> */}
        </TracingBeam>
      
      </body>
      
    </html>
  );
}
