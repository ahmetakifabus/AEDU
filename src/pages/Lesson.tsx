import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Brain, MessageCircle, CheckCircle2, Clock, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { lessons, quizQuestions, subjects } from '@/constants/mockData';
import { useUserStore } from '@/stores/userStore';
import VideoPlayer from '@/components/features/VideoPlayer';
import QuizCard from '@/components/features/QuizCard';

export default function Lesson() {
  const { id } = useParams<{ id: string }>();
  const { completeLesson, saveQuizScore, progress } = useUserStore();

  const lesson = lessons.find((l) => l.id === id);
  if (!lesson) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <p className="text-muted-foreground font-heading">Ders bulunamadı.</p>
        <Link to="/subjects">
          <Button variant="outline" className="gap-2 font-heading text-sm">
            <ArrowLeft className="size-4" />
            Derslere Dön
          </Button>
        </Link>
      </div>
    );
  }

  const subject = subjects.find((s) => s.id === lesson.subjectId);
  const questions = quizQuestions.filter((q) => q.lessonId === lesson.id);
  const isCompleted = progress.lessonsCompleted.includes(lesson.id);
  const existingScore = progress.quizScores[lesson.id];

  const relatedLessons = lessons
    .filter((l) => l.subjectId === lesson.subjectId && l.id !== lesson.id)
    .slice(0, 4);

  // Find next lesson in the same subject
  const nextLesson = lessons.find(
    (l) => l.subjectId === lesson.subjectId && l.order === lesson.order + 1
  );

  function handleVideoComplete() {
    completeLesson(lesson.id);
  }

  function handleQuizComplete(score: number) {
    saveQuizScore(lesson.id, score);
  }

  return (
    <div className="animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6">
        <Link to="/subjects" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="size-4" />
          Dersler
        </Link>
        <span className="text-muted-foreground/50">/</span>
        <Link
          to={`/subjects?filter=${lesson.subjectId}`}
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          {subject?.name}
        </Link>
        <span className="text-muted-foreground/50">/</span>
        <span className="text-sm text-primary font-heading font-medium truncate max-w-[200px]">{lesson.title}</span>
      </div>

      <div className="grid lg:grid-cols-12 gap-6">
        {/* Main content */}
        <div className="lg:col-span-8 space-y-6">
          {/* Video Player — Real YouTube Embed */}
          <VideoPlayer
            youtubeId={lesson.youtubeId}
            thumbnailUrl={lesson.thumbnailUrl}
            title={lesson.title}
            completed={isCompleted}
            onComplete={handleVideoComplete}
          />

          {/* Lesson info */}
          <div className="glass rounded-xl p-5">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {isCompleted && <CheckCircle2 className="size-4 text-primary shrink-0" />}
                  <h1 className="font-heading font-bold text-xl text-foreground">{lesson.title}</h1>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span>{subject?.name}</span>
                  <span className="text-muted-foreground/30">•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="size-3.5" />
                    {lesson.duration}
                  </span>
                  <span className="text-muted-foreground/30">•</span>
                  <span>Ders {lesson.order}</span>
                </div>
              </div>
              <Link to="/ai-tutor">
                <Button variant="outline" size="sm" className="gap-2 font-heading text-xs border-primary/30 text-primary hover:bg-primary/10">
                  <Brain className="size-4" />
                  AI'a Sor
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{lesson.description}</p>

            {/* Lesson status */}
            {isCompleted && (
              <div className="mt-4 px-3 py-2 rounded-lg bg-primary/5 border border-primary/20 flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" />
                <span className="text-xs text-primary font-heading font-medium">Bu dersi tamamladın!</span>
                {existingScore !== undefined && (
                  <span className="ml-auto text-xs text-muted-foreground">
                    Quiz Skoru: <span className="text-primary font-semibold">{existingScore}/100</span>
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Quiz section */}
          {questions.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="size-5 text-primary" />
                <h2 className="font-heading font-semibold text-foreground">Konu Testi ({questions.length} Soru)</h2>
                {existingScore !== undefined && (
                  <span className="ml-auto text-xs text-muted-foreground font-heading">
                    Son skor: <span className="text-primary font-semibold">{existingScore}/100</span>
                  </span>
                )}
              </div>
              <QuizCard questions={questions} onComplete={handleQuizComplete} />
            </div>
          )}

          {/* Next lesson CTA */}
          {nextLesson && (
            <Link to={`/lesson/${nextLesson.id}`}>
              <div className="glass rounded-xl p-5 flex items-center justify-between hover:glass-strong transition-all duration-200 group cursor-pointer">
                <div>
                  <span className="text-xs text-muted-foreground font-heading">Sonraki Ders</span>
                  <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">{nextLesson.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{nextLesson.duration}</p>
                </div>
                <ChevronRight className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </Link>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          {/* Related lessons */}
          <div className="glass rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="size-4 text-primary" />
              <h3 className="font-heading font-semibold text-sm text-foreground">{subject?.name} Dersleri</h3>
            </div>
            <div className="space-y-2">
              {relatedLessons.map((l) => {
                const relIsCompleted = progress.lessonsCompleted.includes(l.id);
                return (
                  <Link
                    key={l.id}
                    to={`/lesson/${l.id}`}
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/[0.04] transition-colors group/item"
                  >
                    <div className="relative w-20 aspect-video rounded-md overflow-hidden bg-navy shrink-0">
                      <img
                        src={`https://img.youtube.com/vi/${l.youtubeId}/mqdefault.jpg`}
                        alt={l.title}
                        className="w-full h-full object-cover opacity-70"
                        loading="lazy"
                      />
                      {relIsCompleted && (
                        <div className="absolute inset-0 bg-navy/60 flex items-center justify-center">
                          <CheckCircle2 className="size-4 text-primary" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-heading font-semibold text-foreground truncate group-hover/item:text-primary transition-colors">
                        {l.title}
                      </h4>
                      <p className="text-[11px] text-muted-foreground mt-0.5">{l.duration}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
            {relatedLessons.length === 0 && (
              <p className="text-xs text-muted-foreground">Bu dersteki tek konu anlatımı budur.</p>
            )}
          </div>

          {/* AI CTA */}
          <div className="glass-strong rounded-xl p-5 relative overflow-hidden">
            <div className="absolute -top-8 -right-8 size-24 rounded-full bg-primary/10 blur-2xl pointer-events-none" />
            <Brain className="size-8 text-primary mb-3" />
            <h3 className="font-heading font-semibold text-foreground mb-2">Bu konuyu anlamadın mı?</h3>
            <p className="text-xs text-muted-foreground mb-4">AI Asistan ile bu konunun özetini al veya sorularını sor.</p>
            <Link to="/ai-tutor">
              <Button className="w-full bg-primary text-primary-foreground font-heading font-semibold text-sm gap-2">
                <Brain className="size-4" />
                AI Asistan'a Git
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
