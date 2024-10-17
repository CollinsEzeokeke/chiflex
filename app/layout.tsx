import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import TanStackProvider from "@/providers/TanStackProvider";
import Providers from "@/components/providers";

export const metadata: Metadata = {
  title: "Chiflex",
  description:
    "The best online store for all types of footwear. We bring you the best at your own fingertips. Shop now!",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="scroll-smooth">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <TanStackProvider>
            <Providers>{children}</Providers>
          </TanStackProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
