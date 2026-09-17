import type { Metadata, Viewport } from "next";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: site.title,
    description: site.description,
    siteName: site.title,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f5f2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
