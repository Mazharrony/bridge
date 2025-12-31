import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BRIDGE - Business Development & Advisory | Dubai",
  description: "Strategic business development, market entry, and corporate advisory services for local and international companies in Dubai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

