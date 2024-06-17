import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Theme } from "@radix-ui/themes";

export const metadata: Metadata = {
  title: "Create A11Y Color",
  description:
    "Generate color for interactive items and check for accessibility with font color.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
