import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question } from '../../types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answerIndex: number) => void;
  eliminatedOptions: number[];
  questionNumber: number;
  totalQuestions: number;
  disabled?: boolean;
}

const optionLabels = ['A', 'B', 'C', 'D'];

const optionColors = [
  'border-arcade-pink hover:bg-arcade-pink/20 hover:shadow-neon-pink',
  'border-arcade-cyan hover:bg-arcade-cyan/20 hover:shadow-neon-cyan',
  'border-arcade-yellow hover:bg-arcade-yellow/20 hover:shadow-neon-yellow',
  'border-arcade-purple hover:bg-arcade-purple/20 hover:shadow-neon-purple',
];

export function QuestionCard({
  question,
  onAnswer,
  eliminatedOptions,
  questionNumber,
  totalQuestions,
  disabled = false,
}: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);

  // Reset state when question changes
  useEffect(() => {
    setSelectedAnswer(null);
    setShowResult(false);
    setIsSelecting(false);
  }, [question.id]);

  const handleSelectAnswer = (index: number) => {
    if (disabled || selectedAnswer !== null || eliminatedOptions.includes(index)) {
      return;
    }

    // First show selection highlight (yellow pulse)
    setSelectedAnswer(index);
    setIsSelecting(true);
    
    // After delay, show correct/wrong result (green/red)
    setTimeout(() => {
      setIsSelecting(false);
      setShowResult(true);

      // Delay before moving to next question so user can see result
      setTimeout(() => {
        onAnswer(index);
      }, 1000);
    }, 600);
  };

  const getOptionStyle = (index: number): React.CSSProperties => {
    // Show selection highlight (yellow pulse)
    if (isSelecting && selectedAnswer === index) {
      return {
        borderColor: '#ffd93d',
        backgroundColor: 'rgba(255, 217, 61, 0.4)',
        boxShadow: '0 0 10px #ffd93d, 0 0 20px #ffd93d',
        transform: 'scale(1.02)',
      };
    }

    if (showResult) {
      // Correct answer - green
      if (index === question.correctAnswer) {
        return {
          borderColor: '#30d158',
          backgroundColor: 'rgba(48, 209, 88, 0.4)',
          boxShadow: '0 0 10px #30d158, 0 0 20px #30d158',
        };
      }
      // Wrong selection - red
      if (index === selectedAnswer && index !== question.correctAnswer) {
        return {
          borderColor: '#ff453a',
          backgroundColor: 'rgba(255, 69, 58, 0.4)',
          boxShadow: '0 0 10px #ff453a, 0 0 20px #ff453a',
        };
      }
    }

    // Dim unselected options when one is selected
    if (selectedAnswer !== null && index !== selectedAnswer) {
      return { opacity: 0.5 };
    }

    return {};
  };

  const getOptionClass = (index: number) => {
    if (eliminatedOptions.includes(index)) {
      return 'opacity-30 cursor-not-allowed border-gray-600';
    }

    // Show selection highlight before result (pulsing yellow)
    if (isSelecting && selectedAnswer === index) {
      return 'border-4 border-arcade-yellow bg-arcade-yellow/40 shadow-neon-yellow scale-[1.02] animate-pulse';
    }

    if (showResult) {
      // Always highlight correct answer in green
      if (index === question.correctAnswer) {
        return 'border-4 border-arcade-green bg-arcade-green/40 shadow-neon-green';
      }
      // Highlight wrong selection in red
      if (index === selectedAnswer && index !== question.correctAnswer) {
        return 'border-4 border-arcade-red bg-arcade-red/40 shadow-neon-red animate-shake';
      }
    }

    // Default state with selected answer - dim unselected options
    if (selectedAnswer !== null && index !== selectedAnswer) {
      return 'opacity-50 border-gray-500';
    }

    return optionColors[index];
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-2xl mx-auto"
    >
      {/* Question header */}
      <div className="flex justify-between items-center mb-4">
        <span className="font-pixel text-xs text-arcade-purple">
          Q{questionNumber}/{totalQuestions}
        </span>
        <span className="font-pixel text-xs text-arcade-cyan">
          {question.difficulty.toUpperCase()}
        </span>
      </div>

      {/* Question text */}
      <div className="bg-arcade-darker/80 border-4 border-arcade-cyan p-3 md:p-6 mb-3 md:mb-6 relative">
        {/* CRT scanline effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-scanline" />
        </div>
        
        <p className="font-arcade text-base md:text-2xl text-white leading-relaxed relative z-10">
          {question.question}
        </p>
      </div>

      {/* Answer options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
        <AnimatePresence>
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleSelectAnswer(index)}
              disabled={disabled || selectedAnswer !== null || eliminatedOptions.includes(index)}
              style={getOptionStyle(index)}
              className={`
                relative p-3 md:p-4 text-left
                border-4 bg-arcade-darker/60
                transition-all duration-200
                disabled:cursor-not-allowed
                group
                ${getOptionClass(index)}
              `}
            >
              {/* Option label */}
              <span className="absolute top-1 right-1 md:top-2 md:right-2 font-pixel text-xs opacity-50">
                {optionLabels[index]}
              </span>
              
              {/* Option text */}
              <p className="font-arcade text-sm md:text-lg text-white pr-6">
                {option}
              </p>

              {/* Correct/Wrong indicator */}
              {showResult && index === question.correctAnswer && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-2xl"
                >
                  ✓
                </motion.span>
              )}
              {showResult && index === selectedAnswer && index !== question.correctAnswer && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-2xl"
                >
                  ✗
                </motion.span>
              )}

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-current group-hover:w-full transition-all duration-300" />
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Explanation (shown after answer) */}
      <AnimatePresence>
        {showResult && question.explanation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 p-4 bg-arcade-dark/80 border-2 border-arcade-purple/50"
          >
            <p className="font-arcade text-sm text-arcade-purple">
              💡 {question.explanation}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
