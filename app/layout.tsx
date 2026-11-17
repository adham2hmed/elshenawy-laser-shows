import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ELSHENAWY | Laser Shows",
  description: "الشناوي لعروض ليزر الأفراح والمؤثرات البصرية",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
