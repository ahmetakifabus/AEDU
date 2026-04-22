import { useState } from 'react';
import { Play, CheckCircle2, RotateCcw, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Watermark from './Watermark';

interface VideoPlayerProps {
  youtubeId: string;
  thumbnailUrl: string;
  title: string;
  completed: boolean;
  onComplete: () => void;
}

export default function VideoPlayer({ youtubeId, thumbnailUrl, title, completed, onComplete }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [hasWatched, setHasWatched] = useState(completed);

  function handlePlay() {
    setPlaying(true);
    // Mark as watched after 10 seconds of viewing
    if (!hasWatched) {
      setTimeout(() => {
        setHasWatched(true);
        onComplete();
      }, 10000);
    }
  }

  function handleRewatch() {
    setPlaying(true);
  }

  return (
    <div className="relative rounded-xl overflow-hidden glass-strong">
      {/* Video area */}
      <div className="relative aspect-video bg-navy">
        {playing ? (
          <>
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&hl=tr`}
              title={title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            {/* Watermark overlay on video */}
            <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
              <span className="text-xs font-heading font-semibold text-white/40 tracking-wide drop-shadow-lg select-none">
                A-EDU for Türkiye
              </span>
            </div>
          </>
        ) : (
          <>
            {/* Thumbnail */}
            <img
              src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                // Fallback to medium quality if maxresdefault fails
                const target = e.target as HTMLImageElement;
                if (target.src.includes('maxresdefault')) {
                  target.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
                } else {
                  target.src = thumbnailUrl;
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy/20" />

            {/* Play button */}
            {!hasWatched ? (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 group/play"
                aria-label="Videoyu oynat"
              >
                <div className="size-16 sm:size-20 rounded-full bg-primary/90 flex items-center justify-center transition-transform duration-200 group-hover/play:scale-110 glow-teal">
                  <Play className="size-7 sm:size-8 text-navy ml-1" fill="currentColor" />
                </div>
                <span className="text-sm font-heading font-medium text-foreground/80">Dersi İzle</span>
              </button>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <CheckCircle2 className="size-12 text-primary" />
                <span className="text-sm font-heading font-semibold text-foreground">Ders Tamamlandı!</span>
                <Button
                  onClick={handleRewatch}
                  variant="outline"
                  size="sm"
                  className="gap-2 border-primary/30 text-primary hover:bg-primary/10 font-heading text-xs mt-1"
                >
                  <RotateCcw className="size-3.5" />
                  Tekrar İzle
                </Button>
              </div>
            )}

            {/* Duration / info bar */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-2.5 bg-gradient-to-t from-navy/90 to-transparent">
              <div className="flex items-center gap-2 text-xs text-white/60">
                <Volume2 className="size-3.5" />
                <span>YouTube</span>
              </div>
              {hasWatched && (
                <span className="flex items-center gap-1 text-xs text-primary font-heading font-medium">
                  <CheckCircle2 className="size-3" />
                  İzlendi
                </span>
              )}
            </div>

            <Watermark />
          </>
        )}
      </div>

      {/* Title bar */}
      <div className="px-4 py-3 flex items-center justify-between">
        <h3 className="font-heading font-semibold text-sm text-foreground truncate">{title}</h3>
        {!playing && !hasWatched && (
          <Button size="sm" onClick={handlePlay} className="bg-primary text-primary-foreground font-heading text-xs gap-1.5">
            <Play className="size-3.5" fill="currentColor" />
            İzle
          </Button>
        )}
        {!playing && hasWatched && (
          <Button size="sm" variant="ghost" onClick={handleRewatch} className="text-xs text-primary hover:bg-primary/10 font-heading gap-1.5">
            <RotateCcw className="size-3.5" />
            Tekrar İzle
          </Button>
        )}
      </div>
    </div>
  );
}
