import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "180DC Case Academy",
  description: "Case prep and social-impact consulting skills for 180DC UNC Charlotte members.",
  icons: {
    icon: "/180dc-mark.png",
    shortcut: "/180dc-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
