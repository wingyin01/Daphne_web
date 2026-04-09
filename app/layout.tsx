import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daphne Ng | Full-Stack & AI Engineer",
  description:
    "Personal website for Daphne Ng, an aspiring Full-Stack & AI Engineer focused on generative AI, full-stack product development, and intelligent systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
