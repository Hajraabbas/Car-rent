import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/clerk-react';
import Header from "@/components/Header";

import FooterHandler from "@/components/FooterHandler";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || ""}>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <FooterHandler />
        </body>
      </html>
    </ClerkProvider>
  );
}