import { Component, ReactNode } from 'react';
import { PixelButton } from './ui/PixelButton';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Game error:', error, errorInfo);
  }

  handleReload = () => {
    // Clear any potentially corrupted state
    try {
      localStorage.removeItem('pubsub_and_chill_player');
    } catch {
      // Ignore localStorage errors
    }
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-arcade-dark">
          <div className="max-w-md w-full bg-arcade-darker/80 border-4 border-arcade-red p-6 text-center">
            <h1 className="font-pixel text-xl text-arcade-red mb-4">
              GAME CRASHED
            </h1>
            <p className="font-arcade text-white/70 mb-6">
              Something went wrong. Don't worry, you can restart the game!
            </p>
            <PixelButton
              variant="warning"
              size="lg"
              glow
              onClick={this.handleReload}
            >
              RESTART GAME
            </PixelButton>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
