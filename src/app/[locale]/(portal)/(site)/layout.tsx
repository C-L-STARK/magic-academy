import type { Metadata } from "next";
import StructuredData from "@/components/seo/StructuredData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === 'zh';

  if (isZh) {
    return {
      title: "魔道院 - 打造数字时代的自由职业者 | 职业交易培训 & 个人品牌孵化",
      description: "魔道院致力于培养数字时代的自由职业者，提供职业交易培训和个人品牌孵化两大核心业务。30天系统化交易培训，获得资金支持；全方位个人品牌孵化，实现商业变现。1000+学员成功案例，85%达标率。",
      keywords: ["魔道院", "职业交易培训", "个人品牌孵化", "自由职业者", "外汇交易", "数字游民", "在线教育", "自媒体运营", "财务自由"],
      openGraph: {
        title: "魔道院 - 打造数字时代的自由职业者",
        description: "职业交易培训 & 个人品牌孵化，助力你实现财务自由和时间自由。1000+学员成功案例，85%达标率。",
        url: "https://magic-academy.com",
        type: "website",
        locale: "zh_CN",
        images: [
          {
            url: "/og-home.jpg",
            width: 1200,
            height: 630,
            alt: "魔道院 - 打造数字时代的自由职业者"
          }
        ]
      },
      twitter: {
        card: "summary_large_image",
        title: "魔道院 - 打造数字时代的自由职业者",
        description: "职业交易培训 & 个人品牌孵化，助力你实现财务自由和时间自由。",
      },
      alternates: {
        canonical: "https://magic-academy.com",
        languages: {
          'zh-CN': 'https://magic-academy.com/zh',
          'en-US': 'https://magic-academy.com/en',
        }
      },
    };
  } else {
    return {
      title: "Magic Academy - Master Your Future | Professional Trading & Personal Branding",
      description: "Magic Academy cultivates digital nomads with two core services: Professional Trading Training and Personal Brand Incubation. 30-day systematic trading program with funding support; comprehensive personal branding for monetization. 1000+ success stories, 85% achievement rate.",
      keywords: ["Magic Academy", "Professional Trading", "Personal Branding", "Digital Nomad", "Forex Trading", "Online Education", "Content Creation", "Financial Freedom"],
      openGraph: {
        title: "Magic Academy - Master Your Future",
        description: "Professional Trading & Personal Brand Incubation. Achieve financial and time freedom. 1000+ success stories, 85% achievement rate.",
        url: "https://magic-academy.com/en",
        type: "website",
        locale: "en_US",
        images: [
          {
            url: "/og-home.jpg",
            width: 1200,
            height: 630,
            alt: "Magic Academy - Master Your Future"
          }
        ]
      },
      twitter: {
        card: "summary_large_image",
        title: "Magic Academy - Master Your Future",
        description: "Professional Trading & Personal Brand Incubation. Achieve financial and time freedom.",
      },
      alternates: {
        canonical: "https://magic-academy.com/en",
        languages: {
          'zh-CN': 'https://magic-academy.com/zh',
          'en-US': 'https://magic-academy.com/en',
        }
      },
    };
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <StructuredData />
      {children}
    </>
  );
}
