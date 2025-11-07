"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Notification {
  id: string;
  email: string;
  messageKey: string;
  type: 'trading' | 'branding';
}

// 生成随机Gmail邮箱（中间部分用*替代）
function generateRandomEmail(): string {
  const prefixes = ['user', 'trader', 'investor', 'creator', 'digital', 'pro', 'master', 'elite', 'expert', 'star'];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const randomNum = Math.floor(Math.random() * 9999);

  // 邮箱格式: us***23@gmail.com
  const visibleStart = prefix.substring(0, 2);
  const visibleEnd = randomNum.toString().substring(0, 2);

  return `${visibleStart}***${visibleEnd}@gmail.com`;
}

// 随机消息内容 - 返回翻译key和类型
function getRandomMessage(): { messageKey: string; type: 'trading' | 'branding' } {
  const messages = [
    { messageKey: 'notification.message1', type: 'trading' as const },
    { messageKey: 'notification.message2', type: 'branding' as const }
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

export default function SubscriptionNotification() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    const showNotification = () => {
      const message = getRandomMessage();
      const newNotification: Notification = {
        id: Date.now().toString(),
        email: generateRandomEmail(),
        messageKey: message.messageKey,
        type: message.type,
      };

      setNotifications(prev => [...prev, newNotification]);

      // 4秒后自动移除通知
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
      }, 4000);
    };

    // 首次延迟3秒显示
    const initialTimeout = setTimeout(showNotification, 3000);

    // 之后每10-18秒随机显示一次
    const interval = setInterval(() => {
      showNotification();
    }, Math.random() * 8000 + 10000); // 10-18秒随机间隔

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-50 pointer-events-none">
      <AnimatePresence>
        {notifications.map((notification) => {
          const isTrading = notification.type === 'trading';
          const bgGradient = isTrading
            ? 'from-orange-500 to-orange-600'
            : 'from-blue-500 to-blue-600';
          const iconBg = isTrading ? 'bg-orange-500' : 'bg-blue-500';

          return (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 50, x: -50, scale: 0.8, rotate: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                rotate: [0, -2, 2, -1, 1, 0], // 倾斜晃动效果
              }}
              exit={{ opacity: 0, y: 20, x: -40, scale: 0.9, rotate: -5 }}
              transition={{
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1], // 弹性缓动
                rotate: {
                  duration: 0.8,
                  ease: "easeInOut"
                }
              }}
              className="mb-3 pointer-events-auto"
            >
              <motion.div
                className="bg-white border-l-4 shadow-xl hover:shadow-2xl transition-shadow duration-300 p-4 max-w-sm rounded-r-lg"
                style={{ borderLeftColor: isTrading ? '#F98513' : '#9BACD8' }}
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  transition: { duration: 0.2 }
                }}
                animate={{
                  y: [0, -5, 0], // 悬浮弹跳效果
                }}
                transition={{
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="flex items-start gap-3">
                  {/* 图标 */}
                  <motion.div
                    className={`flex-shrink-0 w-10 h-10 ${iconBg} rounded-full flex items-center justify-center shadow-md`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                  >
                    {isTrading ? (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    )}
                  </motion.div>

                  {/* 内容 */}
                  <div className="flex-1 min-w-0">
                    <motion.p
                      className="text-sm font-bold text-gray-900 truncate"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {notification.email}
                    </motion.p>
                    <motion.p
                      className={`text-sm font-semibold mt-1 bg-gradient-to-r ${bgGradient} bg-clip-text text-transparent`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.25 }}
                    >
                      {t(notification.messageKey)}
                    </motion.p>
                    <motion.p
                      className="text-xs text-gray-400 mt-1 flex items-center gap-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {t('notification.time')}
                    </motion.p>
                  </div>

                  {/* Success checkmark */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{
                      scale: 1,
                      rotate: [0, -10, 10, -5, 5, 0], // 晃动效果
                    }}
                    transition={{
                      delay: 0.35,
                      type: "spring",
                      stiffness: 300,
                      damping: 10,
                      rotate: {
                        duration: 0.6,
                        ease: "easeInOut"
                      }
                    }}
                    className="flex-shrink-0"
                  >
                    <motion.div
                      className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                      animate={{
                        scale: [1, 1.2, 1], // 脉冲效果
                      }}
                      transition={{
                        scale: {
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
