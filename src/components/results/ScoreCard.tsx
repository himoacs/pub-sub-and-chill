import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import { formatScore, getRankTitle, calculateAccuracy, getGrade } from '../../services/scoring';
import { LEVELS } from '../../data/questions';

interface ScoreCardProps {
  nickname: string;
  score: number;
  level: number;
  correctAnswers: number;
  wrongAnswers: number;
  longestStreak: number;
  achievements: string[];
}

export function ScoreCard({
  nickname,
  score,
  level,
  correctAnswers,
  wrongAnswers,
  longestStreak,
  achievements,
}: ScoreCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const accuracy = calculateAccuracy(correctAnswers, wrongAnswers);
  const grade = getGrade(accuracy);
  const rank = getRankTitle(level);
  const levelName = LEVELS[level - 1]?.name || 'Unknown';
  const date = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const gameUrl = 'https://himoacs.github.io/pub-sub-and-chill/';
  
  const shareText = `🎮 I just scored ${formatScore(score)} on Pub/Sub and Chill Trivia!\n\n🏆 Reached Level ${level}: ${levelName}\n📊 Accuracy: ${accuracy}%\n🔥 Best Streak: ${longestStreak}\n\nThink you can beat my score? Play now:\n${gameUrl}\n\n#Solace #EventDrivenArchitecture #pubsubandchill`;

  const downloadImage = async (): Promise<boolean> => {
    if (!cardRef.current) {
      console.error('Card ref not available');
      return false;
    }
    
    setIsGenerating(true);
    
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#0a0a0f',
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
      });
      
      // Convert to blob and create download link
      return new Promise((resolve) => {
        canvas.toBlob((blob) => {
          if (!blob) {
            console.error('Failed to create blob');
            setIsGenerating(false);
            resolve(false);
            return;
          }
          
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `pubsub-chill-score-${nickname}-${Date.now()}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
          
          setIsGenerating(false);
          resolve(true);
        }, 'image/png');
      });
    } catch (error) {
      console.error('Failed to generate image:', error);
      setIsGenerating(false);
      return false;
    }
  };

  const shareOnLinkedIn = async () => {
    // Copy the share text to clipboard first
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard failed, continue anyway
    }
    
    // Open LinkedIn - user can paste the copied text
    window.open('https://www.linkedin.com/feed/', '_blank', 'noopener,noreferrer');
  };
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard failed
    }
  };

  // Color constants for html2canvas compatibility (it doesn't support oklab)
  const colors = {
    dark: '#0a0a0f',
    darker: '#050508',
    pink: '#ff2d95',
    cyan: '#00f5ff',
    yellow: '#ffd93d',
    purple: '#bf5af2',
    green: '#30d158',
    orange: '#ff9f0a',
    white: '#ffffff',
  };

  // Get grade color as hex
  const getGradeColor = () => {
    if (accuracy >= 80) return colors.green;
    if (accuracy >= 60) return colors.yellow;
    if (accuracy >= 40) return colors.orange;
    return '#ff453a';
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Shareable card - uses inline styles for html2canvas compatibility */}
      <div
        ref={cardRef}
        style={{ 
          position: 'relative',
          padding: '16px',
          backgroundColor: colors.darker,
          border: `3px solid ${colors.cyan}`,
          overflow: 'hidden',
          boxShadow: '0 0 20px rgba(0, 245, 255, 0.3), inset 0 0 20px rgba(0, 245, 255, 0.1)'
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '12px', position: 'relative', zIndex: 10 }}>
          {/* Solace Logo */}
          <p style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '16px', color: '#00C895', marginBottom: '8px' }}>
            SOLACE.
          </p>
          <h3 style={{ 
            fontFamily: '"Press Start 2P", cursive', 
            fontSize: '10px', 
            color: colors.pink,
            marginBottom: '4px'
          }}>
            PUB/SUB AND CHILL
          </h3>
          <p style={{ fontFamily: '"VT323", monospace', fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>{date}</p>
        </div>

        {/* Player name */}
        <div style={{ textAlign: 'center', marginBottom: '12px', position: 'relative', zIndex: 10 }}>
          <p style={{ fontFamily: '"VT323", monospace', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>Player</p>
          <h2 style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '14px', color: colors.yellow }}>
            {nickname}
          </h2>
        </div>

        {/* Score */}
        <div style={{ textAlign: 'center', marginBottom: '16px', position: 'relative', zIndex: 10 }}>
          <p style={{ fontFamily: '"VT323", monospace', fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '2px' }}>FINAL SCORE</p>
          <p style={{ 
            fontFamily: '"Press Start 2P", cursive', 
            fontSize: '24px', 
            color: colors.cyan,
            textShadow: `0 0 10px ${colors.cyan}, 0 0 20px ${colors.cyan}`
          }}>
            {formatScore(score)}
          </p>
        </div>

        {/* Stats grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '8px', 
          marginBottom: '16px', 
          position: 'relative', 
          zIndex: 10 
        }}>
          <div style={{ backgroundColor: 'rgba(10,10,15,0.5)', padding: '8px', border: `1px solid rgba(191,90,242,0.3)`, textAlign: 'center' }}>
            <p style={{ fontFamily: '"VT323", monospace', fontSize: '20px', color: colors.purple }}>{level}</p>
            <p style={{ fontFamily: '"VT323", monospace', fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>LEVEL</p>
          </div>
          <div style={{ backgroundColor: 'rgba(10,10,15,0.5)', padding: '8px', border: `1px solid rgba(48,209,88,0.3)`, textAlign: 'center' }}>
            <p style={{ fontFamily: '"VT323", monospace', fontSize: '20px', color: getGradeColor() }}>{grade.grade}</p>
            <p style={{ fontFamily: '"VT323", monospace', fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>GRADE</p>
          </div>
          <div style={{ backgroundColor: 'rgba(10,10,15,0.5)', padding: '8px', border: `1px solid rgba(255,217,61,0.3)`, textAlign: 'center' }}>
            <p style={{ fontFamily: '"VT323", monospace', fontSize: '20px', color: colors.yellow }}>{accuracy}%</p>
            <p style={{ fontFamily: '"VT323", monospace', fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>ACCURACY</p>
          </div>
          <div style={{ backgroundColor: 'rgba(10,10,15,0.5)', padding: '8px', border: `1px solid rgba(255,159,10,0.3)`, textAlign: 'center' }}>
            <p style={{ fontFamily: '"VT323", monospace', fontSize: '20px', color: colors.orange }}>{longestStreak}</p>
            <p style={{ fontFamily: '"VT323", monospace', fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>STREAK</p>
          </div>
        </div>

        {/* Rank */}
        <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <p style={{ fontFamily: '"VT323", monospace', fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginBottom: '2px' }}>RANK</p>
          <p style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '12px', color: colors.pink }}>
            {rank}
          </p>
        </div>

        {/* Achievements */}
        {achievements.length > 0 && (
          <div style={{ marginTop: '12px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
            <p style={{ fontFamily: '"VT323", monospace', fontSize: '10px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>ACHIEVEMENTS</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', flexWrap: 'wrap' }}>
              {achievements.slice(0, 5).map((id) => (
                <span key={id} style={{ fontSize: '14px' }}>🏅</span>
              ))}
              {achievements.length > 5 && (
                <span style={{ fontFamily: '"VT323", monospace', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
                  +{achievements.length - 5}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Corner decorations */}
        <div style={{ position: 'absolute', top: '6px', left: '6px', width: '12px', height: '12px', borderTop: `2px solid ${colors.pink}`, borderLeft: `2px solid ${colors.pink}` }} />
        <div style={{ position: 'absolute', top: '6px', right: '6px', width: '12px', height: '12px', borderTop: `2px solid ${colors.pink}`, borderRight: `2px solid ${colors.pink}` }} />
        <div style={{ position: 'absolute', bottom: '6px', left: '6px', width: '12px', height: '12px', borderBottom: `2px solid ${colors.pink}`, borderLeft: `2px solid ${colors.pink}` }} />
        <div style={{ position: 'absolute', bottom: '6px', right: '6px', width: '12px', height: '12px', borderBottom: `2px solid ${colors.pink}`, borderRight: `2px solid ${colors.pink}` }} />
      </div>

      {/* Share buttons */}
      <div className="flex gap-2 mt-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => downloadImage()}
          disabled={isGenerating}
          className="py-2 px-3 bg-arcade-purple/20 border-2 border-arcade-purple text-arcade-purple font-arcade text-sm hover:bg-arcade-purple/30 transition-colors disabled:opacity-50"
        >
          {isGenerating ? '...' : '📥 Save'}
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={copyToClipboard}
          className={`py-2 px-3 border-2 font-arcade text-sm transition-colors ${
            copied 
              ? 'bg-arcade-green/20 border-arcade-green text-arcade-green' 
              : 'bg-arcade-cyan/20 border-arcade-cyan text-arcade-cyan hover:bg-arcade-cyan/30'
          }`}
        >
          {copied ? '✓ Copied!' : '📋 Copy'}
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={shareOnLinkedIn}
          className="flex-1 py-2 px-3 bg-[#00C895] border-2 border-[#00C895] text-black font-arcade text-sm font-bold hover:bg-[#00B085] transition-colors flex items-center justify-center gap-1"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </motion.button>
      </div>
      
      {/* Helper text */}
      <p className="text-center text-white/40 font-arcade text-[10px] mt-2">
        Tap Copy, then paste in LinkedIn post
      </p>
    </div>
  );
}
