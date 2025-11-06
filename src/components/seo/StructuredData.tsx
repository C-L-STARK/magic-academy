"use client";

import Script from 'next/script'
import { useLanguage } from '@/contexts/LanguageContext'
import { siteConfig } from '@/config/site'

export default function StructuredData() {
  const { language } = useLanguage()
  const isZh = language === 'zh'

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": isZh ? "魔道院" : "Magic Academy",
    "alternateName": isZh ? "Magic Academy" : "魔道院",
    "url": "https://magic-academy.com",
    "logo": "https://magic-academy.com/logo.png",
    "description": isZh
      ? "魔道院致力于培养数字时代的自由职业者，提供职业交易培训和个人品牌孵化两大核心业务。"
      : "Magic Academy cultivates digital nomads with two core services: Professional Trading Training and Personal Brand Incubation.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": siteConfig.contact.email
    },
    "sameAs": [
      siteConfig.social.twitter,
      siteConfig.social.youtube,
      siteConfig.social.bilibili,
      siteConfig.social.github
    ]
  }

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": isZh ? "职业交易培训计划" : "Professional Trading Training Program",
    "description": isZh
      ? "30天系统化交易培训，包括规则学习、实战训练、资金支持等阶段，帮助学员成为职业交易员。"
      : "30-day systematic trading training including rule learning, practical training, and funding support to help students become professional traders.",
    "provider": {
      "@type": "Organization",
      "name": isZh ? "魔道院" : "Magic Academy",
      "url": "https://magic-academy.com"
    },
    "educationalLevel": isZh ? "专业级" : "Professional",
    "timeRequired": "P30D",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1000"
    }
  }

  const brandingCourseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": isZh ? "个人品牌孵化计划" : "Personal Brand Incubation Program",
    "description": isZh
      ? "全方位个人品牌孵化培训，从内容创作到商业变现，帮助学员打造数字影响力。"
      : "Comprehensive personal brand incubation training, from content creation to monetization, helping students build digital influence.",
    "provider": {
      "@type": "Organization",
      "name": isZh ? "魔道院" : "Magic Academy",
      "url": "https://magic-academy.com"
    },
    "educationalLevel": isZh ? "专业级" : "Professional",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "800"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": isZh ? [
      {
        "@type": "Question",
        "name": "什么是魔道院？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "魔道院是一个致力于培养数字时代自由职业者的教育平台。我们提供职业交易培训和个人品牌孵化两大核心业务，帮助学员实现财务自由和时间自由。"
        }
      },
      {
        "@type": "Question",
        "name": "魔道院提供哪些培训项目？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "我们提供两大核心培训项目：1. 职业交易培训 - 30天系统化培训，帮助学员成为专业交易员并获得资金支持；2. 个人品牌孵化 - 全方位培训，从内容创作到商业变现，打造个人数字影响力。"
        }
      },
      {
        "@type": "Question",
        "name": "魔道院的成功率如何？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "我们拥有1000+学员成功案例，85%的达标率。学员平均在30-90天内实现变现，月收入从2万到10万+不等。"
        }
      }
    ] : [
      {
        "@type": "Question",
        "name": "What is Magic Academy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Magic Academy is an educational platform dedicated to cultivating digital nomads. We offer two core services: Professional Trading Training and Personal Brand Incubation, helping students achieve financial and time freedom."
        }
      },
      {
        "@type": "Question",
        "name": "What training programs does Magic Academy offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer two core training programs: 1. Professional Trading Training - 30-day systematic program to become a professional trader with funding support; 2. Personal Brand Incubation - Comprehensive training from content creation to monetization for building digital influence."
        }
      },
      {
        "@type": "Question",
        "name": "What is Magic Academy's success rate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We have 1000+ success stories with an 85% achievement rate. Students typically achieve monetization within 30-90 days, with monthly income ranging from $3k to $14k+."
        }
      }
    ]
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <Script
        id="course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema)
        }}
      />
      <Script
        id="branding-course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(brandingCourseSchema)
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
    </>
  )
}
