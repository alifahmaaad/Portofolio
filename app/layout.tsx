"use client";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <head>
        <title>Portofolio Ahmad Alif Sofian</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
