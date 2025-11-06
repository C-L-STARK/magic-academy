"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { siteConfig } from '@/config/site';

export default function BrandName() {
  const { language } = useLanguage();

  const brandName = siteConfig.brand.name[language];

  if (language === 'zh') {
    return (
      <>
        <span className="font-black">魔道</span>
        <span className="font-normal text-gray-600 dark:text-gray-400">院</span>
      </>
    );
  }

  return (
    <>
      <span className="font-black">Magic</span>
      <span className="font-normal text-gray-600 dark:text-gray-400">Academy</span>
    </>
  );
}
