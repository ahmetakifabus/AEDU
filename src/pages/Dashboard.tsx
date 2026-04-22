import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Trophy, Flame, TrendingUp, Zap, Play, Target, GraduationCap } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useUserStore } from '@/stores/userStore';
import { subjects, lessons, weeklyActivity } from '@/constants/mockData';
import StatsCard from '@/components/features/StatsCard';
import LessonCard from '@/components/features/LessonCard';
import { cn } from '@/lib/utils';
import { SUBJECT_ICON_COLORS } from '@/constants/config';

export default function Dashboard() {
  const { user } = useAuth();
  const { progress } = useUserStore();
  const displayName = user?.username || user?.email?.split('@')[0] || 'Öğrenci';

  const completedCount = progress.lessonsCompleted.length;
  const totalLessons = lessons.length;
  const avgScore = Object.values(progress.quizScores).length
    ? Math.round(Object.values(progress.quizScores).reduce((a, b) => a + b, 0) / Object.values(progress.quizScores).length)
    : 0;

  // Get lessons the user hasn't completed yet — show first 4
  const uncompletedLessons = useMemo(
    () => lessons.filter((l) => !progress.lessonsCompleted.includes(l.id)).slice(0, 4),
    [progress.lessonsCompleted]
  );

  // Recently completed
  const recentlyCompleted = useMemo(
    () => lessons.filter((l) => progress.lessonsCompleted.includes(l.id)).slice(-3).reverse(),
    [progress.lessonsCompleted]
  );

  // Subject performance from quiz scores
  const subjectPerformance = useMemo(() => {
    return subjects.slice(0, 8).map((s) => {
      const subLessons = lessons.filter((l) => l.subjectId === s.id);
      const scores = subLessons
        .map((l) => progress.quizScores[l.id])
        .filter((sc): sc is number => sc !== undefined);
      const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
      return { subject: s.name.slice(0, 3), score: avg, fullName: s.name };
    });
  }, [progress.quizScores]);

  // Overall progress percentage
  const overallProgress = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="font-heading font-bold text-2xl text-foreground">
            Merhaba, {displayName} 👋
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {completedCount === 0
              ? 'İlk dersini izleyerek başla!'
              : `${completedCount} ders tamamladın, harika gidiyorsun!`}
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-sm font-heading">
          <Zap className="size-4 text-primary" />
          <span className="text-foreground font-semibold">Seviye {progress.level}</span>
          <span className="text-muted-foreground">• {progress.xp} XP</span>
        </div>
      </div>

      {/* Overall progress bar */}
      <div className="glass rounded-xl p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Target className="size-5 text-primary" />
            <span className="font-heading font-semibold text-sm text-foreground">Genel İlerleme</span>
          </div>
          <span className="text-sm font-heading text-primary font-semibold">{overallProgress}%</span>
        </div>
        <div className="w-full h-3 rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-teal to-cyan transition-all duration-700"
            style={{ width: `${overallProgress}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2">{completedCount}/{totalLessons} ders tamamlandı</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          icon={<BookOpen className="size-5" />}
          label="Tamamlanan Ders"
          value={completedCount}
          subtitle={`${totalLessons} dersten`}
        />
        <StatsCard
          icon={<Clock className="size-5" />}
          label="Toplam Süre"
          value={progress.totalMinutes > 0 ? `${Math.floor(progress.totalMinutes / 60)}s ${progress.totalMinutes % 60}dk` : '0 dk'}
          subtitle="Toplam izleme"
        />
        <StatsCard
          icon={<Trophy className="size-5" />}
          label="Ortalama Skor"
          value={avgScore > 0 ? avgScore : '-'}
          subtitle={avgScore > 0 ? 'Quiz ortalaması' : 'Henüz quiz yok'}
        />
        <StatsCard
          icon={<Flame className="size-5" />}
          label="Günlük Seri"
          value={`${progress.streak} gün`}
          subtitle="Devam et!"
        />
      </div>

      {/* Main content grid */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Start / Continue Learning */}
        <div className="lg:col-span-7 space-y-6">
          {/* Uncompleted lessons — continue learning */}
          <div className="glass rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Play className="size-5 text-primary" />
                <h2 className="font-heading font-semibold text-foreground">
                  {completedCount === 0 ? 'Hemen Başla' : 'Devam Et'}
                </h2>
              </div>
              <Link to="/subjects">
                <Button variant="ghost" size="sm" className="text-xs text-primary hover:bg-primary/10 font-heading">
                  Tümünü Gör
                </Button>
              </Link>
            </div>
            <div className="space-y-2">
              {uncompletedLessons.map((lesson) => (
                <LessonCard key={lesson.id} lesson={lesson} compact />
              ))}
              {uncompletedLessons.length === 0 && (
                <div className="text-center py-8">
                  <GraduationCap className="size-12 text-primary/30 mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground font-heading">Tüm dersleri tamamladın! 🎉</p>
                </div>
              )}
            </div>
          </div>

          {/* Recently completed */}
          {recentlyCompleted.length > 0 && (
            <div className="glass rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="size-5 text-primary" />
                <h2 className="font-heading font-semibold text-foreground">Son Tamamlananlar</h2>
              </div>
              <div className="space-y-2">
                {recentlyCompleted.map((lesson) => (
                  <LessonCard key={lesson.id} lesson={lesson} compact />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right sidebar — Charts */}
        <div className="lg:col-span-5 space-y-6">
          {/* Subject performance radar */}
          {avgScore > 0 && (
            <div className="glass rounded-xl p-5">
              <h2 className="font-heading font-semibold text-foreground mb-4">Ders Performansı</h2>
              <div className="h-52">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={subjectPerformance} cx="50%" cy="50%" outerRadius="70%">
                    <PolarGrid stroke="hsl(217, 33%, 22%)" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(215, 20%, 55%)', fontSize: 10 }} />
                    <Radar dataKey="score" stroke="hsl(174, 72%, 46%)" fill="hsl(174, 72%, 46%)" fillOpacity={0.2} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Subject progress */}
          <div className="glass rounded-xl p-5">
            <h2 className="font-heading font-semibold text-foreground mb-4">Ders İlerlemeleri</h2>
            <div className="space-y-3">
              {subjects.map((s) => {
                const subLessons = lessons.filter((l) => l.subjectId === s.id);
                const completed = subLessons.filter((l) => progress.lessonsCompleted.includes(l.id)).length;
                const pct = subLessons.length > 0 ? Math.round((completed / subLessons.length) * 100) : 0;
                return (
                  <Link key={s.id} to={`/subjects?filter=${s.id}`} className="block group/sub">
                    <div className="flex items-center justify-between mb-1">
                      <span className={cn('text-xs font-heading font-medium group-hover/sub:text-primary transition-colors', SUBJECT_ICON_COLORS[s.id] || 'text-foreground')}>
                        {s.name}
                      </span>
                      <span className="text-[10px] text-muted-foreground tabular-nums">{completed}/{subLessons.length}</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-teal to-cyan transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick action */}
          <Link to="/subjects">
            <div className="glass-strong rounded-xl p-5 relative overflow-hidden hover:glow-teal transition-shadow duration-300 cursor-pointer group">
              <div className="absolute -bottom-6 -right-6 size-20 rounded-full bg-primary/10 blur-2xl pointer-events-none" />
              <BookOpen className="size-8 text-primary mb-3" />
              <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Ders Kataloğu</h3>
              <p className="text-xs text-muted-foreground">10 ders, {lessons.length} konu anlatımı — hepsini keşfet.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
