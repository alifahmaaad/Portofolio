"use client";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Portofolio Ahmad Alif Sofian</title>
      </head>
      <body className="dark">{children}</body>
    </html>
  );
}
