import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";


const PoppinsFont = Poppins({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
variable: "--font-poppins"});

export const metadata: Metadata = {
  title: "Inspiring Leaders",
  description: "Create your own futuristic card",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: "black"}}}>
      <html lang="en">
        <body className={cn("font-PoppinsFont antialiased", PoppinsFont.variable)}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
