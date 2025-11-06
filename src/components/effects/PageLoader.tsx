"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 页面加载动画
export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 页面加载完成后隐藏加载动画
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5秒后消失

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-white"
        >
          {/* Logo 和加载动画 */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Logo with Simple Gradient Text */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              <div className="text-6xl lg:text-7xl font-black mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">
                  魔道院
                </span>
              </div>
              <div className="text-lg font-bold text-gray-600">
                Magic Academy
              </div>
            </motion.div>

            {/* Simple Loading Bar */}
            <div className="relative w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-orange-500 to-blue-500"
              />
            </div>

            {/* Simple Loading Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm font-medium text-gray-500"
            >
              Loading...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
