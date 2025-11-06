"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ShimmerButtonProps {
  children: React.ReactNode;
  gradient: string;
  onClick?: () => void;
  className?: string;
}

export default function ShimmerButton({
  children,
  gradient,
  onClick,
  className = ''
}: ShimmerButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative px-8 py-4 rounded-full font-bold text-lg overflow-hidden group ${className}`}
      style={{ background: gradient }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* 扫光效果 */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>

      {/* 内容 */}
      <span className="relative z-10 drop-shadow-sm">
        {children}
      </span>

      {/* 光晕效果 */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
           style={{
             boxShadow: `0 0 30px ${gradient.includes('F98513') ? 'rgba(249, 133, 19, 0.6)' : 'rgba(155, 172, 216, 0.6)'}`
           }}
      />
    </motion.button>
  );
}
