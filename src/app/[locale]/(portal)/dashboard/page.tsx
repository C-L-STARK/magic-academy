"use client";

import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import BacktestPanel from './components/BacktestPanel';
import LiveTradePanel from './components/LiveTradePanel';
import TiantiPanel from './components/TiantiPanel';
import AdminLogin from './components/AdminLogin';
import { useLanguage } from '@/contexts/LanguageContext';
import BrandName from '@/components/custom/BrandName';
import type { TradingConfig } from '@/lib/trading/types';

// 默认配置 - 回调策略（验证通过：1.75盈亏比，57.58%胜率）
const defaultConfig: TradingConfig = {
  symbol: 'XAUUSDT', // 默认XAUUSDT黄金
  interval: '1m', // 1分钟K线
  strategy: {
    aggressiveness: 3, // 激进模式（回调策略推荐）
    trailingActivation: 1.5, // 1.5R激活跟踪止盈（验证通过）
    trailingDistance: 1.0, // 1 ATR跟踪距离（验证通过）
    indicators: {
      keltner: {
        maPeriod: 20, // 肯特那通道MA周期
        atrPeriod: 14, // ATR周期14（更稳定）
        atrMultiple: 1.5, // 1.5倍ATR（更宽的通道）
      },
      bollinger: {
        period: 20, // BB周期20（回调策略核心）
        deviation: 2.0, // 2倍标准差
      },
      macd: {
        fastPeriod: 12,
        slowPeriod: 26,
        signalPeriod: 9,
      },
      cci: {
        period: 14, // CCI周期14（超买超卖判断）
      },
      supertrend: {
        period: 10,
        multiplier: 3.0,
      },
    },
  },
  risk: {
    maxDailyLoss: 90000, // 90%资金（回测用）
    maxDrawdown: 0.50, // 50%最大回撤（回测用）
    maxPositions: 1,
    positionSize: 0.01, // 0.01 USDT仓位
    leverage: 20, // 20倍杠杆
    stopLossMultiple: 2.0, // 2 ATR止损（验证通过）
    takeProfitLevels: [3.0, 6.0, 9.0], // 3R/6R/9R（验证通过，1.75盈亏比）
  },
};

export default function TradingDashboard() {
  const [tradingConfig, setTradingConfig] = useState<TradingConfig>(defaultConfig);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Check if user is already authenticated (use localStorage for persistent login)
    const authenticated = localStorage.getItem('dashboard_authenticated');
    if (authenticated === 'true') {
      setIsAuthenticated(true);
    }

    // Load saved trading config from localStorage
    const savedConfig = localStorage.getItem('trading_config');
    if (savedConfig) {
      try {
        const parsedConfig = JSON.parse(savedConfig);
        setTradingConfig(parsedConfig);
      } catch (error) {
        console.error('Failed to load saved config:', error);
      }
    }
  }, []);

  // Save config to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('trading_config', JSON.stringify(tradingConfig));
  }, [tradingConfig]);

  const handleLogout = () => {
    localStorage.removeItem('dashboard_authenticated');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <AdminLogin onAuthenticate={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              <BrandName /> {t('dashboard.title')}
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {t('dashboard.subtitle')}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
          >
            {t('dashboard.logout')}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs defaultValue="backtest" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="backtest">
              {t('dashboard.tab.backtest')}
            </TabsTrigger>
            <TabsTrigger value="live">
              {t('dashboard.tab.live')}
            </TabsTrigger>
            <TabsTrigger value="tianti">
              {t('dashboard.tab.tianti')}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="backtest" className="space-y-6">
            <BacktestPanel
              tradingConfig={tradingConfig}
              onConfigChange={setTradingConfig}
            />
          </TabsContent>

          <TabsContent value="live" className="space-y-6">
            <LiveTradePanel
              tradingConfig={tradingConfig}
              onConfigChange={setTradingConfig}
            />
          </TabsContent>

          <TabsContent value="tianti" className="space-y-6">
            <TiantiPanel />
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-6 py-4 mt-12">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-600 dark:text-gray-400">
          <p className="font-semibold text-gray-900 dark:text-white">{t('dashboard.footer.warning')}</p>
          <p className="mt-1">{t('dashboard.footer.copyright')}</p>
        </div>
      </div>
    </div>
  );
}
