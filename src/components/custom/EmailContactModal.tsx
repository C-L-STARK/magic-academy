"use client";

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { siteConfig } from '@/config/site';

interface EmailContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function EmailContactModal({ isOpen, onClose, title }: EmailContactModalProps) {
  const { language } = useLanguage();
  const emailAddress = siteConfig.contact.email;

  const displayTitle = title || (language === 'zh' ? '联系我们' : 'Contact Us');
  const emailSubject = siteConfig.contact.emailSubject[language];

  const handleSendEmail = () => {
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    alert(language === 'zh' ? '邮箱地址已复制！' : 'Email address copied!');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-gray-900 max-w-md w-full p-6 border-2 border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{displayTitle}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              {language === 'zh'
                ? '请通过以下邮箱地址联系我们，我们将尽快回复您的咨询。'
                : 'Please contact us via the email address below, and we will respond to your inquiry as soon as possible.'}
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {language === 'zh' ? '邮箱地址' : 'Email Address'}
              </p>
              <div className="flex items-center justify-between gap-2">
                <code className="text-black dark:text-white font-mono text-sm flex-1">
                  {emailAddress}
                </code>
                <button
                  onClick={handleCopyEmail}
                  className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 text-sm font-semibold whitespace-nowrap"
                >
                  {language === 'zh' ? '复制' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {language === 'zh' ? '建议邮件主题' : 'Suggested Subject'}
              </p>
              <code className="text-gray-900 dark:text-white font-mono text-sm">
                {emailSubject}
              </code>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-4">
              <p className="text-sm text-gray-800 dark:text-gray-200">
                <strong>{language === 'zh' ? '💡 提示：' : '💡 Tip: '}</strong>
                {language === 'zh'
                  ? '在邮件中请详细描述您的问题或需求，以便我们更好地为您服务。'
                  : 'Please describe your question or needs in detail in the email so we can serve you better.'}
              </p>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={handleSendEmail}
                className="flex-1 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all"
              >
                {language === 'zh' ? '发送邮件' : 'Send Email'}
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
              >
                {language === 'zh' ? '关闭' : 'Close'}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
