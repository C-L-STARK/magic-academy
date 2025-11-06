"use client";

import React, { useState } from 'react';
import LocaleLink from '@/components/navigation/LocaleLink';
import { useLanguage } from '@/contexts/LanguageContext';
import { siteConfig } from '@/config/site';
import EmailContactModal from '@/components/custom/EmailContactModal';

export default function SplanFooter() {
  const { t, language } = useLanguage();
  const isZh = language === 'zh';
  const [isWeChatModalOpen, setIsWeChatModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyWeChat = () => {
    navigator.clipboard.writeText('zzc19558181600');
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <footer className="bg-black dark:bg-gray-950 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-xl font-black text-white">
                {isZh ? '魔道' : 'Magic'}
              </span>
              <span className="text-xl font-normal text-gray-400 ml-1">
                {isZh ? '院' : 'Academy'}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {siteConfig.brand.description[language]}
            </p>
            {/* Contact Options */}
            <div className="flex items-center gap-4">
              {/* Email */}
              <button
                onClick={() => setIsEmailModalOpen(true)}
                className="text-gray-400 hover:text-white transition-colors"
                title="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </button>

              {/* WeChat */}
              <button
                onClick={() => setIsWeChatModalOpen(true)}
                className="text-gray-400 hover:text-white transition-colors"
                title="WeChat"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-5.523 3.02-6.844.68-.313 1.416-.461 2.158-.461.17 0 .339.01.505.027-.824-3.368-4.37-5.854-8.494-5.854zm-2.79 5.377a.924.924 0 0 1 .924-.924.925.925 0 0 1 0 1.848.925.925 0 0 1-.924-.924zm5.793 0a.924.924 0 0 1 .923-.924.925.925 0 0 1 0 1.848.925.925 0 0 1-.923-.924zm7.306.924c-3.757 0-6.8 2.608-6.8 5.828 0 3.22 3.043 5.828 6.8 5.828a8.6 8.6 0 0 0 2.218-.302.725.725 0 0 1 .596.082l1.584.926a.257.257 0 0 0 .14.045c.134 0 .24-.111.24-.246 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1 .146-.544c1.455-1.145 2.417-2.752 2.417-4.58 0-3.22-3.043-5.828-6.8-5.828zm-2.39 3.952a.768.768 0 0 1 .768-.768c.423 0 .768.345.768.768a.768.768 0 0 1-.768.768.768.768 0 0 1-.768-.768zm4.78 0a.768.768 0 0 1 .768-.768c.423 0 .768.345.768.768a.768.768 0 0 1-.768.768.768.768 0 0 1-.768-.768z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Links - Navigation */}
          <div>
            <h4 className="font-bold mb-4">{isZh ? '快速导航' : 'Quick Links'}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <LocaleLink href="/" className="text-gray-400 hover:text-white transition-colors">
                  {isZh ? '首页' : 'Home'}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/training/forex" className="text-gray-400 hover:text-white transition-colors">
                  {isZh ? '职业交易培训' : 'Professional Trading Training'}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/training/social-media" className="text-gray-400 hover:text-white transition-colors">
                  {isZh ? '个人品牌孵化' : 'Personal Branding'}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  {isZh ? '博客' : 'Blog'}
                </LocaleLink>
              </li>
            </ul>
          </div>

          {/* Training Programs */}
          <div>
            <h4 className="font-bold mb-4">{isZh ? '培训项目' : 'Training Programs'}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <LocaleLink href="/training/forex" className="block hover:opacity-80 transition-opacity">
                  <div className="flex items-center gap-2 text-gray-400">
                    <span>📈</span>
                    <span>{isZh ? '职业交易培训' : 'Professional Trading'}</span>
                  </div>
                  <p className="text-xs text-gray-500 ml-6 mt-1">
                    {isZh ? '30天系统化交易培训，获得资金支持' : '30-day systematic training with funding support'}
                  </p>
                </LocaleLink>
              </li>
              <li className="mt-3">
                <LocaleLink href="/training/social-media" className="block hover:opacity-80 transition-opacity">
                  <div className="flex items-center gap-2 text-gray-400">
                    <span>🎓</span>
                    <span>{isZh ? '个人品牌孵化' : 'Personal Brand Incubation'}</span>
                  </div>
                  <p className="text-xs text-gray-500 ml-6 mt-1">
                    {isZh ? '打造数字影响力，实现商业变现' : 'Build digital influence and monetize'}
                  </p>
                </LocaleLink>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">{isZh ? '其他资源' : 'Resources'}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <LocaleLink href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  {isZh ? '隐私政策' : 'Privacy Policy'}
                </LocaleLink>
              </li>
              <li>
                <a
                  href="https://www.bilibili.com/video/BV19a411X7eY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {isZh ? '交易纪录片1' : 'Trading Documentary 1'}
                </a>
              </li>
              <li>
                <a
                  href="https://www.bilibili.com/video/BV1FZ4y1o734"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {isZh ? '交易纪录片2' : 'Trading Documentary 2'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© 2024-2025 {siteConfig.brand.name[language]}. {isZh ? '保留所有权利' : 'All rights reserved'}.</p>
          <p className="mt-2 text-xs">
            {isZh
              ? '本网站内容仅供教育目的。投资有风险，请谨慎决策。'
              : 'Content on this website is for educational purposes only. Investment carries risks, please make decisions carefully.'}
          </p>
        </div>
      </div>

      {/* Email Contact Modal */}
      <EmailContactModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        title={isZh ? '咨询培训课程' : 'Inquire About Training'}
      />

      {/* WeChat Modal */}
      {isWeChatModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setIsWeChatModalOpen(false)}>
          <div className="relative bg-white dark:bg-gray-900 p-8 max-w-md w-full border-2 border-gray-200 dark:border-gray-800" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setIsWeChatModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-5.523 3.02-6.844.68-.313 1.416-.461 2.158-.461.17 0 .339.01.505.027-.824-3.368-4.37-5.854-8.494-5.854zm-2.79 5.377a.924.924 0 0 1 .924-.924.925.925 0 0 1 0 1.848.925.925 0 0 1-.924-.924zm5.793 0a.924.924 0 0 1 .923-.924.925.925 0 0 1 0 1.848.925.925 0 0 1-.923-.924zm7.306.924c-3.757 0-6.8 2.608-6.8 5.828 0 3.22 3.043 5.828 6.8 5.828a8.6 8.6 0 0 0 2.218-.302.725.725 0 0 1 .596.082l1.584.926a.257.257 0 0 0 .14.045c.134 0 .24-.111.24-.246 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1 .146-.544c1.455-1.145 2.417-2.752 2.417-4.58 0-3.22-3.043-5.828-6.8-5.828zm-2.39 3.952a.768.768 0 0 1 .768-.768c.423 0 .768.345.768.768a.768.768 0 0 1-.768.768.768.768 0 0 1-.768-.768zm4.78 0a.768.768 0 0 1 .768-.768c.423 0 .768.345.768.768a.768.768 0 0 1-.768.768.768.768 0 0 1-.768-.768z"/>
                </svg>
              </div>

              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                {isZh ? '微信号' : 'WeChat ID'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {isZh ? '添加我的微信，了解更多详情' : 'Add me on WeChat for more details'}
              </p>

              {/* WeChat ID Display */}
              <div className="bg-gray-100 dark:bg-gray-800 p-6 mb-6 border-2 border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-black text-gray-900 dark:text-white mb-2 tracking-wide">
                  zzc19558181600
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {isZh ? '点击下方按钮复制' : 'Click button below to copy'}
                </div>
              </div>

              {/* Copy Button */}
              <button
                onClick={handleCopyWeChat}
                className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
              >
                {copySuccess ? (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {isZh ? '已复制！' : 'Copied!'}
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    {isZh ? '复制微信号' : 'Copy WeChat ID'}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
