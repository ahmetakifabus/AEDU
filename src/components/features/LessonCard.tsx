import { Link } from 'react-router-dom';
import { Play, CheckCircle2, Clock } from 'lucide-react';
import type { Lesson } from '@/types';
import { useUserStore } from '@/stores/userStore';
import Watermark from './Watermark';

interface LessonCardProps {
  lesson: Lesson;
  compact?: boolean;
}

export default function LessonCard({ lesson, compact = false }: LessonCardProps) {
  const { progress } = useUserStore();
  const isCompleted = progress.lessonsCompleted.includes(lesson.id);
  const quizScore = progress.quizScores[lesson.id];

  return (
    <Link
      to={`/lesson/${lesson.id}`}
      className="group flex gap-4 p-3 rounded-xl glass hover:glass-strong transition-all duration-200"
    >
      {/* Thumbnail — YouTube thumbnail */}
      <div className="relative w-36 sm:w-44 shrink-0 aspect-video rounded-lg overflow-hidden bg-navy">
        <img
          src={`https://img.youtube.com/vi/${lesson.youtubeId}/mqdefault.jpg`}
          alt={lesson.title}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = lesson.thumbnailUrl;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />

        {/* Duration */}
        <span className="absolute top-2 left-2 flex items-center gap-1 text-[10px] font-heading bg-black/50 backdrop-blur-sm text-white/80 px-1.5 py-0.5 rounded-md">
          <Clock className="size-3" />
          {lesson.duration}
        </span>

        {/* Completed check */}
        {isCompleted && (
          <div className="absolute top-2 right-2">
            <CheckCircle2 className="size-5 text-primary" fill="hsl(174 72% 46% / 0.2)" />
          </div>
        )}

        {/* Play icon on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="size-10 rounded-full bg-primary/80 flex items-center justify-center">
            <Play className="size-4 text-navy ml-0.5" fill="currentColor" />
          </div>
        </div>

        <Watermark className="text-[9px] bottom-1 right-1" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0 py-1">
        <h4 className="font-heading font-semibold text-sm text-foreground group-hover:text-primary transition-colors truncate">
          {lesson.title}
        </h4>
        {!compact && (
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2 text-pretty">{lesson.description}</p>
        )}
        <div className="flex items-center gap-3 mt-2">
          {isCompleted && (
            <span className="inline-flex items-center gap-1 text-[10px] text-primary font-heading font-medium">
              <CheckCircle2 className="size-3" /> Tamamlandı
            </span>
          )}
          {quizScore !== undefined && (
            <span className="text-[10px] text-muted-foreground font-heading">
              Quiz: <span className="text-primary font-semibold">{quizScore}/100</span>
            </span>
          )}
          {!isCompleted && !quizScore && (
            <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground font-heading">
              <Play className="size-3" /> İzlenmedi
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
