import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import UnifiedNavbar from "@/components/layout/UnifiedNavbar";
import SplanFooter from "@/components/splan/SplanFooter";
import SubscriptionNotification from "@/components/custom/SubscriptionNotification";
import Providers from "@/components/providers/Providers";
import MouseFollower from "@/components/effects/MouseFollower";
import ScrollProgress, { BackToTop } from "@/components/effects/ScrollProgress";
import PageLoader from "@/components/effects/PageLoader";
import ContactFormFloat from "@/components/custom/ContactFormFloat";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://magic-academy.com'),
  title: {
    default: "魔道院 Magic Academy - 交易·教育·自媒体 三位一体的职业技能孵化器",
    template: "%s | 魔道院 Magic Academy"
  },
  description: "魔道院（Magic Academy）- 专业的职业技能培训平台。提供外汇交易培训、在线教育课程、自媒体运营培训。三大业务板块助力你的职业发展，打造个人影响力，实现技能变现。",
  keywords: ["魔道院", "Magic Academy", "外汇交易", "在线教育", "自媒体运营", "职业培训", "技能孵化", "个人品牌", "交易员培训", "内容创作", "知识付费"],
  authors: [{ name: "魔道院 Magic Academy" }],
  creator: "魔道院 Magic Academy",
  publisher: "魔道院 Magic Academy",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' }
    ],
    apple: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' }
    ]
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://magic-academy.com",
    siteName: "魔道院 Magic Academy",
    title: "魔道院 Magic Academy - 职业技能孵化器",
    description: "专业的职业技能培训平台。提供外汇交易培训、在线教育课程、自媒体运营培训。三大业务板块助力你的职业发展。",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "魔道院 Magic Academy"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "魔道院 Magic Academy - 职业技能孵化器",
    description: "专业的职业技能培训平台。提供外汇交易培训、在线教育课程、自媒体运营培训。",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // 可以添加 Google Search Console 验证码
    // google: 'google-site-verification-code',
    other: {
      'baidu-site-verification': 'codeva-kDRjETSiUu',
    },
  },
};

export default async function PortalLayout({
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
      <head>
        <meta name="baidu-site-verification" content="codeva-kDRjETSiUu" />
      </head>
      <body suppressHydrationWarning>
        <Providers>
          <PageLoader />
          <MouseFollower />
          <ScrollProgress />
          <UnifiedNavbar />
          <main className="pt-16">
            <Theme accentColor="gray" scaling="90%" grayColor="slate" appearance="inherit" radius="none">
              {children}
            </Theme>
          </main>
          <SplanFooter />
          <BackToTop />
          <SubscriptionNotification />
          <ContactFormFloat />
        </Providers>
      </body>
    </html>
  );
}
