import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { defaultMetadata } from "@/data/metadata";
import "./globals.css";
import AppLayout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...defaultMetadata
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <AppLayout>
            {children}
          </AppLayout>
        </MantineProvider>
      </body>
    </html>
  );
}