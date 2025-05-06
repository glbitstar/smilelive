import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: ["400", "700"], // 400 for Regular, 700 for Bold
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "スマイルライブ",
  description: "ライブ配信でお客様と画面越しに楽しくお話しするお仕事です。 ご希望のジャンルで配信いただけます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
