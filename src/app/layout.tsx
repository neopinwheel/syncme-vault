import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SyncME Vault — Own Your Memories. Skip the Cloud.",
  description:
    "A pocket-sized, AI-powered personal cloud that auto-backs up, organizes, and secures your photos and files — no subscriptions, no cloud, 100% private. Back the project on Kickstarter.",
  openGraph: {
    title: "SyncME Vault — Own Your Memories. Skip the Cloud.",
    description:
      "The pocket-sized AI vault that backs up, organizes, and de-dupes your entire photo library — locally, privately, automatically.",
    images: ["/media/product-shot.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#07080a] text-neutral-100">
        {children}
      </body>
    </html>
  );
}
