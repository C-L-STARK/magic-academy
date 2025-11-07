import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Providers from "@/components/providers/Providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "感谢您 | 魔道院 Magic Academy",
  description: "感谢您的咨询，我们将在24小时内与您联系。",
  robots: {
    index: false, // Don't index thank you pages
    follow: false,
  },
};

export default async function ThankYouLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const lang = locale === 'en' ? 'en-US' : 'zh-CN';

  return (
    <html lang={lang} className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
