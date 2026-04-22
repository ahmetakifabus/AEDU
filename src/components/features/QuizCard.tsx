import { useState } from 'react';
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { QuizQuestion } from '@/types';

interface QuizCardProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}

export default function QuizCard({ questions, onComplete }: QuizCardProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [saved, setSaved] = useState(false);

  const q = questions[currentIdx];

  function handleReset() {
    setCurrentIdx(0);
    setSelected(null);
    setRevealed(false);
    setScore(0);
    setFinished(false);
    setSaved(false);
  }

  if (!q || finished) {
    const finalScore = Math.round((score / questions.length) * 100);
    const emoji = finalScore >= 80 ? '🎉' : finalScore >= 60 ? '👍' : '💪';
    const message = finalScore >= 80
      ? 'Harika! Konuyu çok iyi anlamışsın!'
      : finalScore >= 60
      ? 'İyi gidiyorsun, biraz daha pratik yap!'
      : 'Endişelenme, videoyu tekrar izleyip deneyebilirsin.';

    return (
      <div className="glass-strong rounded-xl p-6 text-center">
        <Trophy className="size-12 text-primary mx-auto mb-3" />
        <div className="text-5xl font-heading font-bold text-gradient mb-1">{finalScore}</div>
        <p className="text-xs text-muted-foreground mb-1">100 üzerinden</p>
        <p className="text-sm text-foreground font-heading mb-1">{emoji} {questions.length} sorudan {score} doğru</p>
        <p className="text-xs text-muted-foreground mb-5">{message}</p>
        <div className="flex gap-3 justify-center">
          {!saved ? (
            <Button
              onClick={() => { onComplete(finalScore); setSaved(true); }}
              className="bg-primary text-primary-foreground font-heading font-semibold gap-2"
            >
              <CheckCircle2 className="size-4" />
              Skoru Kaydet
            </Button>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm text-primary font-heading font-medium">
              <CheckCircle2 className="size-4" />
              Kaydedildi!
            </span>
          )}
          <Button onClick={handleReset} variant="outline" className="font-heading font-semibold gap-2 border-border">
            <RotateCcw className="size-4" />
            Tekrar Çöz
          </Button>
        </div>
      </div>
    );
  }

  function handleSelect(idx: number) {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
    if (idx === q.correctIndex) setScore((s) => s + 1);
  }

  function handleNext() {
    if (currentIdx + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentIdx((i) => i + 1);
      setSelected(null);
      setRevealed(false);
    }
  }

  return (
    <div className="glass-strong rounded-xl p-5">
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-muted-foreground font-heading">
          Soru {currentIdx + 1} / {questions.length}
        </span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div
              key={i}
              className={cn(
                'size-2.5 rounded-full transition-colors',
                i < currentIdx ? 'bg-primary' : i === currentIdx ? 'bg-primary animate-pulse' : 'bg-white/10'
              )}
            />
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1 rounded-full bg-white/10 mb-5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-teal to-cyan transition-all duration-300"
          style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <p className="font-heading font-semibold text-foreground mb-5 leading-relaxed text-base">{q.question}</p>

      {/* Options */}
      <div className="space-y-2.5 mb-4">
        {q.options.map((opt, i) => {
          const isCorrect = i === q.correctIndex;
          const isSelected = i === selected;
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={revealed}
              className={cn(
                'w-full text-left px-4 py-3.5 rounded-xl border text-sm font-medium transition-all duration-200',
                !revealed && 'border-border hover:border-primary/50 hover:bg-primary/5 cursor-pointer active:scale-[0.98]',
                revealed && isCorrect && 'border-green-500/50 bg-green-500/10 text-green-400',
                revealed && isSelected && !isCorrect && 'border-red-500/50 bg-red-500/10 text-red-400',
                revealed && !isSelected && !isCorrect && 'border-border opacity-40'
              )}
            >
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    'size-7 rounded-full border flex items-center justify-center text-xs shrink-0 font-heading font-semibold',
                    !revealed && 'border-muted-foreground/30 text-muted-foreground',
                    revealed && isCorrect && 'border-green-500 text-green-400 bg-green-500/10',
                    revealed && isSelected && !isCorrect && 'border-red-500 text-red-400 bg-red-500/10'
                  )}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1">{opt}</span>
                {revealed && isCorrect && <CheckCircle2 className="size-5 text-green-400 shrink-0" />}
                {revealed && isSelected && !isCorrect && <XCircle className="size-5 text-red-400 shrink-0" />}
              </div>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {revealed && (
        <div className="mb-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
          <p className="text-xs font-heading font-medium text-primary mb-1">Açıklama:</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{q.explanation}</p>
        </div>
      )}

      {/* Next */}
      {revealed && (
        <Button onClick={handleNext} className="w-full bg-primary text-primary-foreground font-heading font-semibold gap-2">
          {currentIdx + 1 >= questions.length ? 'Sonuçları Gör' : 'Sonraki Soru'}
          <ChevronRight className="size-4" />
        </Button>
      )}
    </div>
  );
}
