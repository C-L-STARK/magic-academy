"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import EmailContactModal from '@/components/custom/EmailContactModal';
import LocaleLink from '@/components/navigation/LocaleLink';

export default function PsychologyTestPage() {
  const { language } = useLanguage();
  const isZh = language === 'zh';
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const questions = [
    {
      id: 0,
      question: isZh
        ? '在高压环境下，你通常如何应对？'
        : 'How do you typically respond in high-pressure situations?',
      options: [
        { id: 'A', text: isZh ? '保持冷静，理性分析' : 'Stay calm and analyze rationally' },
        { id: 'B', text: isZh ? '感到焦虑，但能继续工作' : 'Feel anxious but can continue working' },
        { id: 'C', text: isZh ? '容易情绪化，难以集中' : 'Become emotional, hard to focus' },
        { id: 'D', text: isZh ? '选择暂时回避' : 'Choose to temporarily avoid' },
      ],
    },
    {
      id: 1,
      question: isZh
        ? '当遇到连续亏损时，你会？'
        : 'When facing consecutive losses, you would:',
      options: [
        { id: 'A', text: isZh ? '冷静分析原因，调整策略' : 'Calmly analyze and adjust strategy' },
        { id: 'B', text: isZh ? '感到沮丧，但坚持执行系统' : 'Feel frustrated but stick to system' },
        { id: 'C', text: isZh ? '想要加大仓位快速回本' : 'Want to increase position to recover quickly' },
        { id: 'D', text: isZh ? '暂停交易，等待情绪平复' : 'Stop trading until emotions settle' },
      ],
    },
    {
      id: 2,
      question: isZh
        ? '你对纪律和规则的态度是？'
        : 'Your attitude towards discipline and rules is:',
      options: [
        { id: 'A', text: isZh ? '严格遵守，从不违反' : 'Strictly follow, never violate' },
        { id: 'B', text: isZh ? '基本遵守，偶尔灵活变通' : 'Generally follow, occasionally flexible' },
        { id: 'C', text: isZh ? '视情况而定，经常调整' : 'Depend on situation, often adjust' },
        { id: 'D', text: isZh ? '不太在意规则' : 'Not very concerned about rules' },
      ],
    },
    {
      id: 3,
      question: isZh
        ? '面对诱惑（如看到大行情想偏离计划）你会？'
        : 'When tempted (like seeing big moves that deviate from plan):',
      options: [
        { id: 'A', text: isZh ? '坚持原计划，不受影响' : 'Stick to original plan, unaffected' },
        { id: 'B', text: isZh ? '内心挣扎，但最终坚持' : 'Struggle internally but ultimately stick' },
        { id: 'C', text: isZh ? '经常改变计划去追逐机会' : 'Often change plan to chase opportunities' },
        { id: 'D', text: isZh ? '完全跟着感觉走' : 'Completely follow feelings' },
      ],
    },
    {
      id: 4,
      question: isZh
        ? '你的学习和执行能力如何？'
        : 'How is your learning and execution ability?',
      options: [
        { id: 'A', text: isZh ? '学习快，执行力强' : 'Learn fast, strong execution' },
        { id: 'B', text: isZh ? '学习较快，需要监督' : 'Learn quickly, need supervision' },
        { id: 'C', text: isZh ? '学习较慢，执行一般' : 'Learn slowly, average execution' },
        { id: 'D', text: isZh ? '不太喜欢学习和改变' : 'Don\'t like learning and change' },
      ],
    },
    {
      id: 5,
      question: isZh
        ? '你能接受多长时间的投入而不见收益？'
        : 'How long can you invest without seeing returns?',
      options: [
        { id: 'A', text: isZh ? '1年以上，看重长期价值' : '1+ year, value long-term' },
        { id: 'B', text: isZh ? '6个月左右' : 'Around 6 months' },
        { id: 'C', text: isZh ? '3个月左右' : 'Around 3 months' },
        { id: 'D', text: isZh ? '希望马上看到回报' : 'Want immediate returns' },
      ],
    },
    {
      id: 6,
      question: isZh
        ? '你对失败的态度是？'
        : 'Your attitude towards failure is:',
      options: [
        { id: 'A', text: isZh ? '是学习的机会，积极总结' : 'Learning opportunity, actively summarize' },
        { id: 'B', text: isZh ? '难过但能接受' : 'Sad but can accept' },
        { id: 'C', text: isZh ? '很难接受失败' : 'Hard to accept failure' },
        { id: 'D', text: isZh ? '倾向于归咎于外部因素' : 'Tend to blame external factors' },
      ],
    },
    {
      id: 7,
      question: isZh
        ? '你的时间管理能力如何？'
        : 'How is your time management ability?',
      options: [
        { id: 'A', text: isZh ? '非常好，能合理安排' : 'Very good, can arrange reasonably' },
        { id: 'B', text: isZh ? '还可以，基本能完成任务' : 'OK, can basically complete tasks' },
        { id: 'C', text: isZh ? '较差，经常拖延' : 'Poor, often procrastinate' },
        { id: 'D', text: isZh ? '没有时间规划' : 'No time planning' },
      ],
    },
    {
      id: 8,
      question: isZh
        ? '你认为成功的关键是？'
        : 'You think the key to success is:',
      options: [
        { id: 'A', text: isZh ? '系统+纪律+坚持' : 'System + discipline + persistence' },
        { id: 'B', text: isZh ? '天赋+努力' : 'Talent + effort' },
        { id: 'C', text: isZh ? '运气+机会' : 'Luck + opportunity' },
        { id: 'D', text: isZh ? '不确定' : 'Not sure' },
      ],
    },
    {
      id: 9,
      question: isZh
        ? '对于反复练习同一件事，你的态度是？'
        : 'Your attitude towards repeatedly practicing the same thing:',
      options: [
        { id: 'A', text: isZh ? '能坚持，相信量变到质变' : 'Can persist, believe in gradual change' },
        { id: 'B', text: isZh ? '可以坚持一段时间' : 'Can persist for a while' },
        { id: 'C', text: isZh ? '容易感到枯燥' : 'Easy to feel bored' },
        { id: 'D', text: isZh ? '很难坚持重复练习' : 'Hard to persist in repetition' },
      ],
    },
  ];

  const handleAnswer = (optionId: string) => {
    setAnswers({ ...answers, [currentQuestion]: optionId });

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setShowResults(true);
      }, 300);
    }
  };

  const calculateScore = () => {
    let score = 0;
    Object.values(answers).forEach(answer => {
      if (answer === 'A') score += 4;
      else if (answer === 'B') score += 3;
      else if (answer === 'C') score += 2;
      else if (answer === 'D') score += 1;
    });
    return score;
  };

  const getResult = () => {
    const score = calculateScore();
    const maxScore = questions.length * 4;
    const percentage = (score / maxScore) * 100;

    if (percentage >= 85) {
      return {
        level: isZh ? '极高适配度' : 'Extremely High Fit',
        color: '#10B981',
        description: isZh
          ? '你具备成为优秀交易员的核心素质：强大的自律能力、情绪管理能力和学习执行力。建议立即申请培训，你有很大概率通过考核。'
          : 'You have core qualities to become an excellent trader: strong self-discipline, emotional management, and execution ability. Highly recommended to apply for training immediately.',
      };
    } else if (percentage >= 70) {
      return {
        level: isZh ? '高适配度' : 'High Fit',
        color: '#F98513',
        description: isZh
          ? '你具备较好的交易员素质，在某些方面可能需要加强。通过系统化培训，有较大机会成功。建议申请培训并认真准备。'
          : 'You have good trader qualities, may need strengthening in some areas. Good chance of success through systematic training. Recommended to apply and prepare seriously.',
      };
    } else if (percentage >= 55) {
      return {
        level: isZh ? '中等适配度' : 'Medium Fit',
        color: '#EAB308',
        description: isZh
          ? '你具备一定的潜力，但需要在纪律性、情绪管理等方面有明显提升。建议先自我提升一段时间后再考虑申请。'
          : 'You have potential but need significant improvement in discipline and emotional management. Suggest self-improvement before applying.',
      };
    } else {
      return {
        level: isZh ? '较低适配度' : 'Low Fit',
        color: '#EF4444',
        description: isZh
          ? '根据测评结果，交易可能不是最适合你的职业方向。我们建议你诚实地评估自己是否真的适合这个行业，避免浪费时间和精力。'
          : 'Based on assessment, trading may not be the most suitable career for you. We suggest honestly evaluating if this industry suits you to avoid wasting time and energy.',
      };
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="relative -mt-16 pt-16 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #F4F1EC 0%, #9BACD8 50%, #F98513 100%)',
        }}>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-96 h-96 rounded-full border-2 border-white/20"
            style={{ top: '10%', left: '5%' }}
            animate={{
              y: [0, 30, 0],
              x: [0, 20, 0],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-64 h-64 rounded-full bg-white/10"
            style={{ top: '60%', right: '10%' }}
            animate={{
              y: [0, -40, 0],
              x: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating dots */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-white/40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 50 - 25, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-7xl font-black leading-tight text-gray-900 mb-6">
              {isZh ? '你适合做' : 'Are You Fit'}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500">
                {isZh ? '交易员吗？' : 'For Trading?'}
              </span>
            </h1>

            <p className="text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto font-medium">
              {isZh
                ? '通过10道专业问题，评估你是否具备成为职业交易员的心理素质'
                : 'Through 10 professional questions, assess if you have the psychological qualities to become a professional trader'}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Test Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        {!showResults ? (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-gray-600">
                  {isZh ? '进度' : 'Progress'}: {currentQuestion + 1} / {questions.length}
                </span>
                <span className="text-sm font-bold text-orange-600">
                  {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                </span>
              </div>
              <div className="h-3 bg-gray-200 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="bg-white border-2 border-gray-200 shadow-xl p-10 mb-6">
              <h2 className="text-3xl font-black text-gray-900 mb-8 leading-tight">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(option.id)}
                    className={`w-full text-left px-6 py-5 border-2 transition-all duration-300 ${
                      answers[currentQuestion] === option.id
                        ? 'border-orange-500 bg-gradient-to-r from-orange-50 to-blue-50 shadow-md'
                        : 'border-gray-300 hover:border-orange-400 hover:bg-gray-50 hover:shadow-md'
                    }`}
                  >
                    <span className="font-black text-orange-600 mr-4 text-lg">{option.id}.</span>
                    <span className="text-gray-800 font-medium text-lg">{option.text}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            {currentQuestion > 0 && (
              <button
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold hover:bg-gray-100 transition-all duration-300"
              >
                ← {isZh ? '上一题' : 'Previous'}
              </button>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Results */}
            <div className="bg-white border-2 border-gray-200 shadow-2xl p-12">
              <div className="text-center mb-10">
                <motion.div
                  className="inline-block px-8 py-3 bg-gradient-to-r from-orange-100 to-blue-100 border-2 border-orange-300 text-orange-700 text-sm font-black mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  {isZh ? '✓ 测评完成' : '✓ Assessment Complete'}
                </motion.div>
                <h2 className="text-5xl font-black text-gray-900 mb-4">
                  {isZh ? '你的测评结果' : 'Your Assessment Result'}
                </h2>
              </div>

              <div className="max-w-2xl mx-auto">
                {/* Score */}
                <motion.div
                  className="text-center mb-10 p-10 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 shadow-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-7xl font-black mb-6" style={{ color: getResult().color }}>
                    {getResult().level}
                  </div>
                  <div className="text-2xl text-gray-700 font-bold mb-3">
                    {isZh ? '得分' : 'Score'}: {calculateScore()} / {questions.length * 4}
                  </div>
                  <div className="text-xl font-bold" style={{ color: getResult().color }}>
                    {Math.round((calculateScore() / (questions.length * 4)) * 100)}%
                  </div>
                </motion.div>

                {/* Description */}
                <motion.div
                  className="bg-gradient-to-r from-orange-50 to-blue-50 border-l-4 p-8 mb-10 shadow-md"
                  style={{ borderColor: getResult().color }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-gray-800 leading-relaxed text-lg font-medium">
                    {getResult().description}
                  </p>
                </motion.div>

                {/* Actions */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <button
                    onClick={resetTest}
                    className="flex-1 px-8 py-5 border-2 border-gray-400 text-gray-700 font-bold hover:bg-gray-100 hover:border-gray-500 transition-all duration-300"
                  >
                    {isZh ? '🔄 重新测评' : '🔄 Retake Test'}
                  </button>
                  <button
                    onClick={() => setIsEmailModalOpen(true)}
                    className="flex-1 px-8 py-5 bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 text-white font-bold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {isZh ? '📝 申请培训' : '📝 Apply for Training'}
                  </button>
                </motion.div>

                {/* Back to Training Page */}
                <div className="text-center mt-8">
                  <LocaleLink
                    href="/training/forex"
                    className="text-orange-600 font-bold hover:text-orange-700 transition-colors inline-flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    {isZh ? '返回交易培训页面' : 'Back to Trading Training'}
                  </LocaleLink>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Email Contact Modal */}
      <EmailContactModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        title={isZh ? '申请交易员培训' : 'Apply for Trading Training'}
      />
    </div>
  );
}
