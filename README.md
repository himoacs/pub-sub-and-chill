# 🎮 Pub/Sub and Chill - Solace Trivia Arcade

An arcade-style trivia game to test your Solace knowledge! Built with React, TypeScript, and retro gaming aesthetics.

![Game Preview](./docs/preview.png)

## ✨ Features

- **10 Progressive Levels** covering all Solace concepts:
  1. Solace Overview
  2. Message Delivery (Direct vs Guaranteed)
  3. Protocols & APIs
  4. Topics & Wildcards
  5. Queues & Endpoints
  6. Message Replay
  7. VPN Bridges
  8. Dynamic Message Routing (DMR)
  9. High Availability
  10. Disaster Recovery

- **150+ Trivia Questions** generated from official Solace documentation
- **Power-Ups** to help you through tough questions:
  - ⏱️ **Time Freeze** - Pause the timer for 10 seconds
  - ✂️ **50/50** - Eliminate 2 wrong answers
  - ⏭️ **Skip** - Skip a question without penalty

- **Achievement System** with 15 badges to unlock
- **Global Leaderboard** with top 20 high scores
- **Shareable Score Cards** for LinkedIn and social media
- **Retro Arcade Aesthetics** with neon colors, pixel fonts, and CRT effects
- **Sound Effects & Music** for immersive gameplay
- **Fully Responsive** - works on desktop and mobile

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/himoacs/pub-sub-and-chill.git
cd pub-sub-and-chill

# Install dependencies
npm install

# Start development server
npm run dev
```

The game will be available at `http://localhost:5173/pub-sub-and-chill/`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` folder, ready for deployment.

## 🌐 Deploying to GitHub Pages

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

### Setup GitHub Pages:

1. Go to your repository Settings → Pages
2. Under "Build and deployment", select "GitHub Actions"
3. Push to `main` branch - the workflow will automatically build and deploy

Your game will be available at: `https://<username>.github.io/pub-sub-and-chill/`

## 🎯 Game Mechanics

### Scoring
- Each level has different point values per question (100-600 pts)
- **Streak Bonus**: Get multiple correct answers in a row
  - 3+ streak: 1.5x multiplier
  - 5+ streak: 2x multiplier
  - 10+ streak: 3x multiplier
- **Time Bonus**: Answer quickly for extra points

### Progression
- You need 70% of maximum level points to advance
- Each level has 5 questions and 60 seconds

### Power-Ups
- Start each game with: 1 Time Freeze, 2 50/50s, 1 Skip
- Use them wisely!

## 🏆 Achievements

| Badge | Name | Description |
|-------|------|-------------|
| 🎮 | First Steps | Complete Level 1 |
| 📨 | Messaging Master | Complete Level 2 without errors |
| 🔌 | Protocol Pro | Finish Level 3 under 45 seconds |
| 🧙 | Topic Wizard | Get 5-streak on Level 4 |
| 🏆 | Queue Champion | Complete Level 5 |
| ⏪ | Replay Legend | Complete Level 6 without power-ups |
| 🌉 | Bridge Builder | Reach Level 7 |
| 🔀 | DMR Expert | Complete Level 8 |
| 🦸 | HA Hero | Complete Level 9 |
| 👑 | DR Disaster Master | Complete all 10 levels |
| ⚡ | Speed Demon | Complete any level under 30 seconds |
| 💯 | Perfectionist | 100% accuracy on any level |
| 🏃 | Marathon Runner | Play 10 games |
| 🔥 | Streak Master | 10-answer streak |
| 🤠 | Quick Draw | Answer in under 3 seconds |

## 📁 Project Structure

```
pub-sub-and-chill/
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   ├── game/            # Game screen components
│   │   └── results/         # Score and results components
│   ├── context/
│   │   └── GameContext.tsx  # Global game state
│   ├── data/
│   │   ├── questions.ts     # 150+ trivia questions
│   │   └── achievements.ts  # Achievement definitions
│   ├── services/
│   │   ├── storage.ts       # Local storage for player data
│   │   ├── audio.ts         # Sound effects
│   │   └── scoring.ts       # Score calculations
│   └── types/
│       └── index.ts         # TypeScript types
├── public/
│   ├── favicon.svg
│   └── sounds/              # Audio files
└── .github/
    └── workflows/
        └── deploy.yml       # GitHub Pages deployment
```

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **Howler.js** - Audio
- **html2canvas** - Score card generation

## 📝 Adding Questions

Questions are stored in `src/data/questions.ts`. Each question follows this structure:

```typescript
{
  id: 'unique-id',
  question: 'What is Solace primarily used for?',
  options: [
    'Database management',
    'Event-driven messaging and streaming',
    'Web hosting',
    'File storage'
  ],
  correctAnswer: 1, // Index of correct option (0-3)
  difficulty: 'easy', // easy | medium | hard
  topic: 'overview', // Topic for categorization
  explanation: 'Optional explanation shown after answering'
}
```

Levels are organized by difficulty, with questions drawn from all topics:
- **Levels 1-2**: Easy questions
- **Levels 3-6**: Medium questions
- **Levels 7-10**: Hard questions

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add more trivia questions
- Improve the UI/UX
- Add new features
- Fix bugs

## 📄 License

MIT License - feel free to use this for learning, demos, or events!

## 🙏 Credits

- Questions based on [Solace Documentation](https://docs.solace.com)
- Pixel fonts from Google Fonts (Press Start 2P, VT323)
- Sound effects from Mixkit

---

Made with ❤️ for the Solace community
