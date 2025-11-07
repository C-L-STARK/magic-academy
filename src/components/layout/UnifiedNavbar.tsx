"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useMode } from '@/contexts/ModeContext';
import BrandName from '@/components/custom/BrandName';
import LocaleLink from '@/components/navigation/LocaleLink';

export default function UnifiedNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage, t } = useLanguage();
  const { mode, theme } = useMode();

  const navItems = [
    {
      name: t('nav.home'),
      link: "/",
    },
    {
      name: language === 'zh' ? '职业交易培训' : 'Trading Training',
      link: "/training/forex",
    },
    {
      name: language === 'zh' ? '个人品牌孵化' : 'Brand Incubation',
      link: "/training/social-media",
    },
    {
      name: t('nav.blog'),
      link: "/blog",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (link: string) => {
    // Extract path without locale prefix for comparison
    const pathSegments = pathname.split('/').filter(Boolean);
    const currentLocale = pathSegments[0] === 'en' || pathSegments[0] === 'zh' ? pathSegments[0] : 'zh';
    const pathWithoutLocale = '/' + pathSegments.slice(currentLocale === pathSegments[0] ? 1 : 0).join('/');

    if (link === '/') {
      return pathWithoutLocale === '/' || pathWithoutLocale === '';
    }
    return pathWithoutLocale.startsWith(link);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-xl shadow-lg'
          : 'bg-white/50 backdrop-blur-md'
      } border-b border-gray-200/50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <LocaleLink href="/" className="flex items-center group">
            <span className="text-2xl"><BrandName /></span>
          </LocaleLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
              >
                <LocaleLink
                  href={item.link}
                  className="relative px-4 py-2 text-sm font-medium transition-colors group flex items-center gap-1"
                >
                  <span
                    className={`relative z-10 ${
                      isActive(item.link)
                        ? 'font-bold'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    style={isActive(item.link) ? { color: theme.primary } : {}}
                  >
                    {item.name}
                  </span>
                  {isActive(item.link) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5"
                      style={{ backgroundColor: theme.primary }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </LocaleLink>
              </div>
            ))}
          </div>

          {/* Right Side Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors text-sm font-medium"
              title={language === 'zh' ? 'Switch to English' : '切换到中文'}
            >
              {language === 'zh' ? 'EN' : '中文'}
            </button>

            {/* Join Us Button */}
            <LocaleLink
              href="/landing"
              className="px-4 py-2 text-white text-sm font-semibold border transition-all hover:opacity-90"
              style={{
                backgroundColor: theme.primary,
                borderColor: theme.primary
              }}
            >
              {language === 'zh' ? '开始学习' : 'Get Started'}
            </LocaleLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-gray-200 bg-white"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <LocaleLink
                  key={index}
                  href={item.link}
                  className={`block px-4 py-3 text-sm font-medium transition-colors ${
                    isActive(item.link)
                      ? 'bg-gray-100 font-bold'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  style={isActive(item.link) ? { color: theme.primary } : {}}
                >
                  {item.name}
                </LocaleLink>
              ))}

              {/* Mobile Language Toggle */}
              <div className="px-4 pt-2">
                {/* Language Toggle */}
                <button
                  onClick={toggleLanguage}
                  className="w-full px-4 py-3 border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors text-sm font-medium"
                >
                  {language === 'zh' ? 'EN' : '中文'}
                </button>
              </div>

              <LocaleLink
                href="/landing"
                className="block px-4 py-3 text-white text-sm font-semibold text-center mt-4 border transition-all"
                style={{
                  backgroundColor: theme.primary,
                  borderColor: theme.primary
                }}
              >
                {language === 'zh' ? '开始学习' : 'Get Started'}
              </LocaleLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
